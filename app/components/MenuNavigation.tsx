'use client'

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
    { name: "Accueil", href: "/"},
    { 
      name: "L'association", 
      subItems: [
        { name: "Notre histoire", href: "/history" },
        { name: "Nos missions", href: "/missions" },
        { name: "L'équipe", href: "/team" },
      ]
    },
    { 
      name: "Agir avec nous", 
      subItems: [
        { name: "S'engager", href: "/help" },
        { name: "Adoptez nous", href: "/adopt" },
        { name: "Visites pédagogiques", href: "/visits" },
      ]
    },
    { name: "Actualités", href: "/blog" },
    { name: "Contact", href: "/contact" },
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
    <div ref={menuRef} className="flex flex-col items-start xl:flex-row gap-11 pointer-events-auto">
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
                plausible(item.href);
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
            <ul className="xl:absolute xl:top-6 xl:left-0 xl:mt-2 xl:shadow-lg xl:rounded-lg xl:min-w-[200px] z-50
                         xl:bg-white bg-gray-50 
                         mt-1 py-2 w-full
                         transition-all duration-300 ease-in-out">
              {item.subItems.map((subItem) => (
                <li key={subItem.name} className="px-4 py-2 hover:bg-gray-50">
                  <Link
                    href={subItem.href || ''}
                    className={`block ${pathname === subItem.href ? 'text-brown' : 'text-black'} hover:text-brown`}
                    onClick={() => {
                      handleLinkClick();
                      plausible(subItem.href);
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
