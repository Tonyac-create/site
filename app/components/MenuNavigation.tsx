import Link from "next/link";
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { usePlausible } from "next-plausible";

type MenuNavigationProps = {
  setIsMenuOpen: (isOpen: boolean) => void;
};

export default function MenuNavigation({ setIsMenuOpen }: MenuNavigationProps) {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const plausible = usePlausible();

  const navigation = [
    { name: "Accueil", href: "/", onClick: () => plausible('menu-home') },
    { 
      name: "L'association", 
      subItems: [
        { name: "Notre histoire", href: "/history", onClick: () => plausible('menu-history') },
        { name: "Nos missions", href: "/missions", onClick: () => plausible('menu-missions') },
        { name: "L'équipe", href: "/team" },
      ]
    },
    { 
      name: "Agir avec nous", 
      subItems: [
        { name: "S'engager", href: "/help", onClick: () => plausible('menu-help') },
        { name: "Adoptez nous", href: "/adopt", onClick: () => plausible('menu-adopt') },
        { name: "Visites pédagogiques", href: "/visits", onClick: () => plausible('menu-visits') },
      ]
    },
    { name: "Actualités", href: "/blog", onClick: () => plausible('menu-blog') },
    { name: "Contact", href: "/contact", onClick: () => plausible('menu-contact') },
  ];

  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenSubmenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMenuClick = (itemName: string) => {
    setOpenSubmenu(openSubmenu === itemName ? null : itemName);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setOpenSubmenu(null);
  };

  return (
    <div ref={menuRef} className="flex flex-col items-start xl:flex-row gap-11">
      {navigation.map((item) => (
        <li 
          key={item.name} 
          className="text-center relative list-none"
        >
          {item.href ? (
            <Link 
              href={item.href} 
              className={`hover:text-brown ${pathname === item.href ? 'text-brown' : 'text-black'}`}
              onClick={() => {
                handleLinkClick();
                plausible('menu-click', { props: { label: item.name } });
              }}
            >
              {item.name}
            </Link>
          ) : (
            <button 
              onClick={() => handleMenuClick(item.name)}
              className={`cursor-pointer hover:text-brown flex items-center gap-2 ${
                item.subItems?.some(subItem => pathname === subItem.href) ? 'text-brown' : 'text-black'
              }`}
            >
              {item.name}
              <Image
                src="/icons/chevron-down-solid.svg"
                width={12}
                height={12}
                alt=""
                className={`transition-transform duration-300 ${openSubmenu === item.name ? 'rotate-180' : ''}`}
              />
            </button>
          )}
          
          {item.subItems && openSubmenu === item.name && (
            <ul className="absolute top-6 left-0 mt-2 py-2 bg-white shadow-lg rounded-lg min-w-[200px] z-50">
              {item.subItems.map((subItem) => (
                <li key={subItem.name} className="px-4 py-2 hover:bg-gray-50">
                  <Link
                    href={subItem.href || ''}
                    className={`block ${pathname === subItem.href ? 'text-brown' : 'text-black'} hover:text-brown`}
                    onClick={() => {
                      handleLinkClick();
                      plausible('menu-click', { props: { label: subItem.name } });
                    }}
                  >
                    {subItem.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </div>
  );
}
