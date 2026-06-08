"use client";

import { useEffect } from "react";

export default function RevealProvider() {
  useEffect(() => {
    const revealItems = Array.from(document.querySelectorAll(".reveal"));
    const buttons = Array.from(document.querySelectorAll(".btn"));
    const root = document.documentElement;

    const setProgress = () => {
      const scrollable = Math.max(document.body.scrollHeight - window.innerHeight, 1);
      root.style.setProperty("--scroll-progress", `${window.scrollY / scrollable}`);
      root.style.setProperty("--scroll-depth", `${Math.min(window.scrollY / 900, 1)}`);
    };

    const rippleHandlers = buttons.map((button) => {
      const handler = (event) => {
        const rect = button.getBoundingClientRect();
        const ripple = document.createElement("span");
        ripple.className = "btn-ripple";
        ripple.style.left = `${event.clientX - rect.left}px`;
        ripple.style.top = `${event.clientY - rect.top}px`;
        button.appendChild(ripple);
        window.setTimeout(() => ripple.remove(), 620);
      };

      button.addEventListener("pointerdown", handler);
      return [button, handler];
    });

    document.body.classList.add("motion-ready");
    setProgress();
    window.addEventListener("scroll", setProgress, { passive: true });

    if (!("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return () => {
        window.removeEventListener("scroll", setProgress);
        rippleHandlers.forEach(([button, handler]) => button.removeEventListener("pointerdown", handler));
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", setProgress);
      rippleHandlers.forEach(([button, handler]) => button.removeEventListener("pointerdown", handler));
    };
  }, []);

  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />
      <div className="ambient-grain" aria-hidden="true" />
    </>
  );
}
