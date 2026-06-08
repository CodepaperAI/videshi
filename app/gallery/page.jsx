"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=80",
    alt: "Fragrant Butter Chicken served with basmati rice",
    category: "food"
  },
  {
    src: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80",
    alt: "Crispy Samosa Chaat with mint and tamarind chutneys",
    category: "food"
  },
  {
    src: "/images/videsi-mark-circle.png",
    alt: "Videsi Signature Diamond Logo",
    category: "vibe"
  },
  {
    src: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=900&q=80",
    alt: "Slow-simmered Dal Makhani in a traditional bowl",
    category: "food"
  },
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
    alt: "Premium black-and-gold dining room styling",
    category: "vibe"
  },
  {
    src: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=900&q=80",
    alt: "Spiced Mango Cardamom cocktail with star anise",
    category: "drinks"
  },
  {
    src: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80",
    alt: "Sizzling Tandoori Platter straight from the clay oven",
    category: "food"
  },
  {
    src: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=900&q=80",
    alt: "Indo-Chinese Chilli Chicken with green onions and bell peppers",
    category: "food"
  },
  {
    src: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=900&q=80",
    alt: "Craft beer selections and regional drafts on tap",
    category: "drinks"
  },
  {
    src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=900&q=80",
    alt: "Bartender crafting a signature smoked old fashioned",
    category: "drinks"
  },
  {
    src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=80",
    alt: "Warm hospitality and dining tables ready for guests",
    category: "vibe"
  },
  {
    src: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=900&q=80",
    alt: "Wok-fried Hakka Noodles with fresh vegetables",
    category: "food"
  }
];

export default function GalleryPage() {
  const [filter, setFilter] = useState("all");
  const [activePhoto, setActivePhoto] = useState(null);

  // Close lightbox on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActivePhoto(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredPhotos = filter === "all" 
    ? photos 
    : photos.filter((p) => p.category === filter);

  return (
    <main>
      <header className="subpage-header">
        <p className="eyebrow">Visual Journey</p>
        <h1>Our Gallery</h1>
        <p className="subpage-desc">
          Take a look at the vibrant dishes, custom cocktails, and the elegant black-and-gold dining experience of Videsi Bar & Grill.
        </p>
      </header>

      <section className="section">
        {/* Category Filter Tabs */}
        <div className="gallery-filters reveal">
          {["all", "food", "drinks", "vibe"].map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? "active" : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dynamic Photo Grid */}
        <div className="photo-grid">
          {filteredPhotos.map((photo, index) => (
            <img
              key={photo.src}
              className={`reveal delay-${index % 4}`}
              src={photo.src}
              alt={photo.alt}
              style={{ cursor: "pointer" }}
              onClick={() => setActivePhoto(photo)}
            />
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div 
          className="lightbox-modal" 
          onClick={() => setActivePhoto(null)}
        >
          <div 
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
          >
            <button 
              className="lightbox-close" 
              onClick={() => setActivePhoto(null)}
            >
              <X size={20} /> Close
            </button>
            <img 
              className="lightbox-img" 
              src={activePhoto.src} 
              alt={activePhoto.alt} 
            />
            <p className="lightbox-caption">{activePhoto.alt}</p>
          </div>
        </div>
      )}
    </main>
  );
}
