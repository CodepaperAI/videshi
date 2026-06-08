export const metadata = {
  title: "About",
  description: "Learn about Videsi Bar & Grill, an Indian restaurant and bar in Downtown Kitchener."
};

export default function AboutPage() {
  return (
    <main>
      <header className="subpage-header">
        <p className="eyebrow">Our Story</p>
        <h1>Indian Flavor, Modern Pulse</h1>
        <p className="subpage-desc">
          Videsi Bar & Grill is downtown Kitchener's premium resto-bar, serving bold Punjabi classics, smoky tandoor grills, and vibrant Indo-Chinese food.
        </p>
      </header>

      <section className="section split-section">
        <div className="section-copy reveal">
          <p className="eyebrow">The Story Behind Videsi</p>
          <h2>Two cultures on one plate.</h2>
          <p>
            Videsi — meaning "foreign" in Punjabi — is the story of two cultures on one plate. We bring the
            bold, butter-rich kitchens of Punjab and the wok-fire of Indo-Chinese cooking to downtown
            Kitchener.
          </p>
          <p>
            Every dish is made from scratch, every spice is sourced with intent. Come for the food, stay for the room.
          </p>
          <p className="team-highlight">
            Founded by Harpreet and the Videsi family, rooted in Kitchener-Waterloo since 2024.
          </p>
        </div>
        <div className="framed-media reveal delay-1 logo-frame">
          <img src="/images/videsi-full-logo.png" alt="Videsi Bar and Grill brand mark" />
        </div>
      </section>

      {/* Highlight Stats Section */}
      <section className="section stats-grid reveal">
        <div className="stat-card">
          <span className="stat-number">4</span>
          <span className="stat-label">Menu Categories</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">40+</span>
          <span className="stat-label">Authentic Dishes</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">20–500</span>
          <span className="stat-label">Guest Catering Capacity</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">7 Days</span>
          <span className="stat-label">Open Weekly</span>
        </div>
      </section>

      {/* Kitchen Philosophy Section */}
      <section className="section about-philosophy-section reveal">
        <div className="framed-media about-philosophy-image">
          <img src="https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=900&q=80" alt="Indian spices being prepared by hand" />
        </div>
        <div className="section-copy">
          <p className="eyebrow">Our Kitchen Philosophy</p>
          <h2>Crafted without shortcuts.</h2>
          <p>
            We believe that true Indian cooking relies on the integrity of its spices. That's why we source our single-origin whole spices directly and hand-grind them in our kitchen weekly.
          </p>
          <p>
            From our 24-hour slow-cooked Dal Makhani to our house-infused cardamom and star anise syrups for the bar, every flavor component is treated with respect and culinary precision.
          </p>
        </div>
      </section>

      <section className="section values-grid">
        <article className="value-card reveal">
          <span>01</span>
          <h2>Punjabi Comfort</h2>
          <p>Rich gravies, tandoor-baked breads, aromatic basmati rice, and slow-simmered classics built for sharing.</p>
        </article>
        <article className="value-card reveal delay-1">
          <span>02</span>
          <h2>Indo-Chinese Heat</h2>
          <p>Fast-moving street bites, dry chilli chicken, saucy manchurian plates, and bold wok-tossed noodles.</p>
        </article>
        <article className="value-card reveal delay-2">
          <span>03</span>
          <h2>Bar Specials</h2>
          <p>Carefully crafted cocktails, spiced mocktails, local draft beers, and late-night pairings.</p>
        </article>
      </section>

      {/* Reservations CTA Banner */}
      <section className="section reveal">
        <div className="reservations-cta-banner">
          <p className="eyebrow">Experience Videsi</p>
          <h2>Ready to taste the fusion of cultures?</h2>
          <p>
            Book a table for a special dinner, plan a family gathering, or inquire about our custom catering services.
          </p>
          <div className="button-row">
            <a href="/contact" className="btn btn-primary">Book a Table</a>
            <a href="/menu" className="btn btn-secondary">View Menu</a>
          </div>
        </div>
      </section>
    </main>
  );
}
