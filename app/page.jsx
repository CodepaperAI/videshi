"use client";

import HeroCarousel from "@/components/HeroCarousel";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const gridImages = [
  { className: "cell-a", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80", alt: "Indian curry bowl" },
  { className: "cell-b", image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=800&q=80", alt: "Grill platter" },
  { className: "cell-c", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80", alt: "Punjabi classic dish" },
  { className: "cell-d", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80", alt: "Indo-Chinese appetizer" },
  { className: "cell-e", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80", alt: "Restaurant interior ambiance" }
];

const dishes = [
  {
    title: "Punjabi Classics",
    copy: "Butter-rich gravies, breads, rice, and familiar favorites built for sharing.",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
    alt: "Indian curry served in a bowl"
  },
  {
    title: "Indo-Chinese Bites",
    copy: "Chilli, Manchurian, hakka-style plates, and fast-moving bar snacks.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
    alt: "Crisp fried Indian appetizer"
  },
  {
    title: "Grill & Tandoor",
    copy: "Smoky, sizzling plates with the depth and drama of a proper grill room.",
    image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=800&q=80",
    alt: "Grilled food on a platter"
  },
  {
    title: "Bar Specials",
    copy: "Food-friendly drinks, mocktails, and late-night pairings for the table.",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
    alt: "Cocktail drink with citrus"
  }
];

export default function HomePage() {
  const [isMobile, setIsMobile] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <main>
      <HeroCarousel />

      {/* NEW VIDEO SECTION (immediately below the hero) */}
      <section className="section video-promo-section">
        <div className="section-heading reveal">
          <p className="eyebrow">Inside Videsi</p>
          <h2>Experience the Room</h2>
        </div>

        <div className="video-viewport-wrapper reveal delay-1">
          {!videoError ? (
            <video
              src="/videsi-promo.mp4" // Replace with actual video
              autoPlay
              muted
              loop
              playsInline
              onError={() => setVideoError(true)}
              className="promo-video-player"
            />
          ) : (
            <div className="video-placeholder-card">
              <Play size={44} className="gold-play-icon" />
              <p>Promo video coming soon</p>
            </div>
          )}
        </div>

        {/* 3 stat pills below the video */}
        <div className="stats-pills-row reveal delay-2">
          <div className="stat-pill">
            <span>40+ Dishes</span>
          </div>
          <div className="stat-pill">
            <span>Catering 20–500 Guests</span>
          </div>
          <div className="stat-pill">
            <span>Open 7 Days</span>
          </div>
        </div>
      </section>

      {/* NEW OUR FOOD SECTION (relocated asymmetric food photo mosaic grid) */}
      <section className="section food-showcase-section">
        <div className="section-heading reveal">
          <p className="eyebrow">Our Food</p>
          <h2>Flavors of Punjab & Wok-fire</h2>
        </div>

        <div className="hero-grid reveal delay-1">
          {gridImages.map((tile, index) => (
            <motion.div
              className={`hero-grid-cell ${tile.className}`}
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.08, duration: 0.6, ease: "easeOut" }}
            >
              <img src={tile.image} alt={tile.alt} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="section split-section">
        <motion.div 
          className="section-copy"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="eyebrow">About Videsi</p>
          <h2>A rich Indian table with a downtown bar energy.</h2>
          <p>
            Videsi Bar & Grill brings Punjabi comfort, Indo-Chinese heat, and a polished night-out
            atmosphere to King Street. The site feels like the first taste of that experience:
            warm, dramatic, flavorful, and easy to act on.
          </p>
          <Link className="text-link" href="/about">
            Read the story
          </Link>
        </motion.div>
        
        <motion.div 
          className="framed-media"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <img
            src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&w=1100&q=80"
            alt="Elegant restaurant dining room with warm lighting"
          />
        </motion.div>
      </section>

      {/* Menu Preview Section */}
      <section className="section menu-preview">
        <div className="section-heading">
          <motion.p 
            className="eyebrow"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Menu
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Explore the Deliciousness
          </motion.h2>
        </div>

        <div className="dish-grid">
          {dishes.map((dish, index) => (
            <motion.article 
              className="dish-card" 
              key={dish.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
            >
              <img src={dish.image} alt={dish.alt} />
              <div>
                <h3>{dish.title}</h3>
                <p>{dish.copy}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div 
          className="center-action"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Link className="text-link" href="/menu">
            View full menu plan
          </Link>
        </motion.div>
      </section>

      {/* Gallery Section */}
      <section className="section gallery-band">
        <div className="section-heading">
          <motion.p 
            className="eyebrow"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Gallery
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Food, Fire & Ambience
          </motion.h2>
        </div>

        <div className="gallery-ribbon">
          {[
            ["https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=700&q=80", "Indian dish closeup"],
            ["https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=700&q=80", "Indian curry and rice"],
            ["/images/videsi-mark-circle.png", "Videsi circular logo"],
            ["https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=700&q=80", "Restaurant interior"],
            ["https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=700&q=80", "Cocktail with garnish"]
          ].map(([src, alt], idx) => (
            <motion.img
              key={src}
              src={src}
              alt={alt}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: idx * 0.08, duration: 0.6, ease: "easeOut" }}
            />
          ))}
        </div>

        <motion.div 
          className="center-action"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Link className="text-link" href="/gallery">
            View full gallery
          </Link>
        </motion.div>
      </section>

      {/* Reviews Section */}
      <section className="section reviews-section">
        <div className="section-heading">
          <motion.p 
            className="eyebrow"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Reviews
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Built Around Community Tables
          </motion.h2>
        </div>

        <div className="review-grid">
          <motion.blockquote 
            className="review-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p>
              "A downtown Indian spot should feel vibrant, polished, and full of flavor. This
              direction gives Videsi a premium first impression."
            </p>
            <cite>Project positioning</cite>
          </motion.blockquote>

          <motion.blockquote 
            className="review-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
          >
            <p>
              "The catering path is clear from the first screen, which matters for families,
              offices, and community events planning ahead."
            </p>
            <cite>Lead generation focus</cite>
          </motion.blockquote>
        </div>
      </section>

      {/* The Contact & Location section has been moved to /contact as requested */}
    </main>
  );
}
