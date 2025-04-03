import Link from "next/link";
import { usePathname } from 'next/navigation'

type MenuNavigationProps = {
  setIsMenuOpen: (isOpen: boolean) => void;
};

export default function MenuNavigation({ setIsMenuOpen }: MenuNavigationProps) {
  const navigation = [
    { name: "Accueil", href: "/" },
    { name: "Notre histoire", href: "/history" },
    { name: "Nos missions", href: "/missions" },
    { name: "Visites pédagogiques", href: "/visits" },
    { name: "J'aide", href: "/help" },
    { name: "Adoptez nous", href: "/adopt" },
    { name: "L'équipe", href: "/team" },
    { name: "Actualités", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const pathname = usePathname();

  return (
    <>
      {navigation.map((item) => (
        <li key={item.name} className="text-center" onClick={() => setIsMenuOpen(false)}>
          <Link href={item.href} className={`hover:text-brown ${pathname === item.href ? 'text-brown' : 'text-black'}`}>{item.name}</Link>
        </li>
      ))}
    </>
  );
}
