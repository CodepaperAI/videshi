"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const slideshowImages = [
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=80", // Ambiance
  "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=1800&q=80", // Punjabi Classic
  "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1800&q=80", // Curry Close-up
  "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=1800&q=80"  // Grill Platter
];

export default function HeroCarousel({ hideText = false }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { scrollY } = useScroll();
  
  // Scroll animation values
  const scrollOpacity = useTransform(scrollY, [0, 200], [1, 0]);
  const textY = useTransform(scrollY, [0, 500], [0, 80]);

  // Slideshow auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const headlineWords = "AUTHENTIC PUNJABI & INDO-CHINESE".split(" ");

  return (
    <section className={`hero ${hideText ? 'hero-subpage' : 'hero-fullscreen'}`} aria-label="Videsi Bar and Grill Hero Slideshow">
      {/* Fullscreen Background Slideshow */}
      <div className="hero-slideshow-container">
        {slideshowImages.map((image, index) => (
          <motion.div
            key={image}
            className="slideshow-slide-item"
            style={{ backgroundImage: `url('${image}')` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* Dark Gradient Shade Overlay */}
      <div className="hero-shade-overlay" />

      {/* Content Container (Vertically & Horizontally Centered) */}
      {!hideText && (
        <motion.div className="hero-center-content" style={{ y: textY }}>
        <motion.p 
          className="eyebrow gold-eyebrow"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          DOWNTOWN KITCHENER &bull; INDIAN RESTO-BAR
        </motion.p>

        <h1 className="hero-headline font-serif">
          {headlineWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.1 + i * 0.08,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1]
              }}
              style={{ display: "inline-block", marginRight: "0.25em" }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p 
          className="hero-subheadline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          A black-and-gold dining room for bold curries, sizzling grill plates, late-night bites,
          and catering made for the K-W community.
        </motion.p>

        <motion.div 
          className="hero-cta-container"
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <Link className="btn btn-gold-filled" href="/menu">
            View Menu
          </Link>
          <Link className="btn btn-gold-outline" href="/catering">
            Plan Catering
          </Link>
        </motion.div>

        {/* Small Location + Phone details */}
        <motion.div 
          className="hero-contact-footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <span>146 King St, Kitchener</span>
          <span className="bullet-dot">&bull;</span>
          <a href="tel:+15192217262" className="phone-link">519-221-7262</a>
        </motion.div>
      </motion.div>
      )}

      {/* Background Slideshow Dots Indicators */}
      <div className="slideshow-indicators-container">
        {slideshowImages.map((_, index) => (
          <button
            key={index}
            className={`slideshow-indicator-dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Bouncing Scroll Chevron */}
      {!hideText && (
        <motion.div
        className="hero-scroll-indicator"
        style={{ opacity: scrollOpacity }}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
      >
        <span>Scroll</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </motion.div>
      )}
    </section>
  );
}
