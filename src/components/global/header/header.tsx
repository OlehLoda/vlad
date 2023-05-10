"use client";
import { usePathname } from "next/navigation";
import s from "./header.module.css";
import Link from "next/link";
import { navMap } from "./nav-map";

export default function Header() {
  const pathname = usePathname();
  const is_active = (link: string) => (pathname === link ? s.active : "");

  return (
    <header className={s.header}>
      {navMap.map((nav, index) => (
        <nav key={index}>
          {nav.map(({ children, href }) => (
            <Link href={href} className={is_active(href)} key={href}>
              {children}
            </Link>
          ))}
        </nav>
      ))}
    </header>
  );
}
