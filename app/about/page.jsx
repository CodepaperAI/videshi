export const metadata = {
  title: "About",
  description: "Learn about Videsi Bar & Grill, an Indian restaurant and bar in Downtown Kitchener."
};

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">Our Story</p>
        <h1>Indian flavor with a downtown Kitchener pulse.</h1>
        <p>
          Videsi Bar & Grill is planned as a premium Indian resto-bar for Punjabi classics,
          Indo-Chinese favorites, late-night plates, and catering.
        </p>
      </section>
      <section className="section split-section">
        <div className="section-copy reveal">
          <p className="eyebrow">Brand Experience</p>
          <h2>Warm hospitality, polished nightlife, serious flavor.</h2>
          <p>
            The website should make the guest feel the room before they arrive: black walls,
            golden brand details, aromatic food, shareable plates, and a confident bar-and-grill
            mood.
          </p>
          <p>
            Unlike a basic restaurant brochure, the content directs users quickly to menu viewing,
            catering inquiries, phone contact, and location details.
          </p>
        </div>
        <div className="framed-media reveal delay-1 logo-frame">
          <img src="/images/videsi-full-logo.png" alt="Videsi Bar and Grill brand mark" />
        </div>
      </section>
      <section className="section values-grid">
        <article className="value-card reveal">
          <span>01</span>
          <h2>Punjabi Comfort</h2>
          <p>Rich gravies, breads, rice, and familiar dishes for families and groups.</p>
        </article>
        <article className="value-card reveal delay-1">
          <span>02</span>
          <h2>Indo-Chinese Heat</h2>
          <p>Fast, bold, saucy plates that fit the bar-and-grill rhythm.</p>
        </article>
        <article className="value-card reveal delay-2">
          <span>03</span>
          <h2>Catering Ready</h2>
          <p>A dedicated lead path for local events, offices, celebrations, and community gatherings.</p>
        </article>
      </section>
    </main>
  );
}
