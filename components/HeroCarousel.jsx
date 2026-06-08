"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { heroTiles } from "@/components/siteData";

export default function HeroCarousel() {
  const [activeTile, setActiveTile] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const timer = window.setInterval(() => {
      setActiveTile((tile) => (tile + 1) % heroTiles.length);
    }, 1800);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="hero hero-home" aria-label="Videsi Bar and Grill hero">
      <div className="hero-collage">
        {heroTiles.map((tile, index) => (
          <div
            className={`hero-tile ${tile.className} ${index === activeTile ? "active" : ""}`}
            style={{ "--photo": `url('${tile.image}')` }}
            key={tile.image}
          />
        ))}
      </div>
      <div className="hero-shade" />
      <div className="hero-content reveal">
        <p className="eyebrow">Downtown Kitchener Indian Resto-Bar</p>
        <img className="hero-logo" src="/images/videsi-full-logo.png" alt="Videsi Bar and Grill" />
        <h1>Authentic Punjabi & Indo-Chinese</h1>
        <p className="hero-copy">
          A black-and-gold dining room for bold curries, sizzling grill plates, late-night bites,
          and catering made for the K-W community.
        </p>
        <div className="button-row">
          <Link className="btn btn-primary" href="/menu">
            View Menu
          </Link>
          <Link className="btn btn-secondary" href="/catering">
            Plan Catering
          </Link>
        </div>
      </div>
      <aside className="hero-info reveal delay-2" aria-label="Restaurant quick details">
        <div>
          <span>Location</span>
          <strong>146 King St, Kitchener</strong>
        </div>
        <div>
          <span>Phone</span>
          <strong>
            <a href="tel:+15192217262">519-221-7262</a>
          </strong>
        </div>
      </aside>
    </section>
  );
}
