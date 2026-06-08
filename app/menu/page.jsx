"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { menuData } from "@/components/menuData";

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState("punjabi-classics");

  // Track scroll position to update active tab based on what category is in viewport
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Trigger when section is in upper-middle viewport
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll(".menu-section");
    sections.forEach((sec) => observer.observe(sec));

    return () => {
      sections.forEach((sec) => observer.unobserve(sec));
    };
  }, []);

  const handleTabClick = (id) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      // Calculate offset for sticky header + sticky tabs
      const headerOffset = 150; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <main className="menu-page-wrapper">
      <header className="subpage-header">
        <p className="eyebrow">Our Offerings</p>
        <h1>The Menu</h1>
        <p className="subpage-desc">
          Explore a rich tapestry of authentic Punjabi classics, smoky tandoor grills, fiery Indo-Chinese street staples, and signature resto-bar drinks.
        </p>
      </header>

      {/* Sticky Category Tab Bar */}
      <nav className="menu-tabs">
        <div className="tabs-container">
          {menuData.map((category) => (
            <button
              key={category.id}
              className={`tab-btn ${activeTab === category.id ? "active" : ""}`}
              onClick={() => handleTabClick(category.id)}
            >
              {category.title}
              {activeTab === category.id && (
                <motion.span 
                  layoutId="activeTabUnderline" 
                  className="tab-underline"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </nav>

      {/* Menu Sections */}
      <section className="section menu-grid-section">
        {menuData.map((category, catIndex) => (
          <div 
            id={category.id} 
            className="menu-section menu-section-container menu-section-visible" 
            key={category.id}
          >
            <motion.div 
              className="menu-section-header"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <p className="eyebrow">{category.eyebrow}</p>
              <h2 className="menu-section-title">{category.title}</h2>
            </motion.div>

            <div className="menu-items-grid">
              {category.items.map((item, itemIndex) => (
                <motion.div 
                  className="menu-item-card" 
                  key={item.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: itemIndex * 0.05, duration: 0.4, ease: "easeOut" }}
                  whileHover={{ y: -4 }}
                >
                  <div className="menu-item-header-row">
                    <h3 className="menu-item-name">
                      {item.name}
                      {item.isVegetarian && (
                        <span className="veg-badge" title="Vegetarian">V</span>
                      )}
                    </h3>
                    <div className="menu-item-price-wrapper">
                      {item.price !== null && item.price !== undefined ? (
                        <span className="menu-item-price">${item.price}</span>
                      ) : (
                        <div className="tooltip-container">
                          <span className="menu-item-price">—</span>
                          <span className="tooltip-text">Price coming soon</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <p className="menu-item-desc">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Sticky Bottom Download CTA */}
      <div className="menu-download-sticky">
        <button 
          className="btn btn-primary" 
          onClick={() => alert("Downloading PDF Menu... This feature is visual-only for this deployment.")}
        >
          Download Menu PDF
        </button>
      </div>
    </main>
  );
}
