"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems } from "@/components/siteData";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 12);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <Link className="brand" href="/" aria-label="Videsi Bar and Grill home">
        <img src="/images/videsi-mark.png" alt="" />
        <span>Videsi</span>
      </Link>
      <button
        className="nav-toggle"
        type="button"
        aria-label="Open navigation"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
      </button>
      <nav className={`site-nav${open ? " is-open" : ""}`}>
        {navItems.map((item) => (
          <Link
            className={pathname === item.href ? "active" : ""}
            href={item.href}
            key={item.href}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <a className="header-cta" href="tel:+15192217262">
        Call
      </a>
    </header>
  );
}
