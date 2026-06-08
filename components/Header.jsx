"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "@/components/siteData";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine scrolled state (past 60px)
      if (currentScrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 60) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on navigation change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isShrunk = scrolled && scrollDirection === "down";

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""} ${isShrunk ? "is-shrunk" : ""}`}>
      <div className="header-container">
        <Link className="brand" href="/" aria-label="Videsi Bar and Grill home">
          <img src="/images/videsi-mark.png" alt="Videsi Diamond Logo" />
          <span>Videsi</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          {navItems.map((item) => (
            <Link
              className={`nav-link ${pathname === item.href ? "active" : ""}`}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <a className="header-cta" href="tel:+15192217262">
            Call
          </a>

          {/* Hamburger button */}
          <button
            className="nav-toggle"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gold-bright)" strokeWidth="2.5" strokeLinecap="round">
              <motion.line
                x1="4"
                y1="6"
                x2="20"
                y2="6"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 6 }
                }}
                animate={open ? "open" : "closed"}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                style={{ originX: "12px", originY: "6px" }}
              />
              <motion.line
                x1="4"
                y1="12"
                x2="20"
                y2="12"
                variants={{
                  closed: { opacity: 1, scale: 1 },
                  open: { opacity: 0, scale: 0 }
                }}
                animate={open ? "open" : "closed"}
                transition={{ duration: 0.2 }}
              />
              <motion.line
                x1="4"
                y1="18"
                x2="20"
                y2="18"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -6 }
                }}
                animate={open ? "open" : "closed"}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                style={{ originX: "12px", originY: "18px" }}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Fullscreen Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-overlay"
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ type: "tween", duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setOpen(false)}
          >
            <div className="mobile-overlay-content" onClick={(e) => e.stopPropagation()}>
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  custom={index}
                  variants={{
                    closed: { opacity: 0, x: -60 },
                    open: (i) => ({
                      opacity: 1,
                      x: 0,
                      transition: {
                        delay: i * 0.08,
                        duration: 0.45,
                        ease: [0.16, 1, 0.3, 1]
                      }
                    })
                  }}
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  <Link
                    className={`mobile-nav-link ${pathname === item.href ? "active" : ""}`}
                    href={item.href}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                    {pathname === item.href && (
                      <span className="active-dot" />
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
