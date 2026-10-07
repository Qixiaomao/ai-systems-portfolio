"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/data/site";
import { LucasLogo } from "./LucasLogo";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const pathname = usePathname();
  return (
    <header className="header">
      <Link href="/" className="logo-link" aria-label="Lucas home">
        <LucasLogo />
      </Link>
      <nav aria-label="Main navigation">
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={pathname === item.href ? "page" : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <ThemeToggle />
    </header>
  );
}
