import HeroCarousel from "@/components/HeroCarousel";
import LeadForm from "@/components/LeadForm";
import Link from "next/link";

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
  return (
    <main>
      <HeroCarousel />

      <section className="section split-section">
        <div className="section-copy reveal">
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
        </div>
        <div className="framed-media reveal delay-1">
          <img
            src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&w=1100&q=80"
            alt="Elegant restaurant dining room with warm lighting"
          />
        </div>
      </section>

      <section className="section menu-preview">
        <div className="section-heading reveal">
          <p className="eyebrow">Our Menu</p>
          <h2>Explore the Deliciousness</h2>
        </div>
        <div className="dish-grid">
          {dishes.map((dish, index) => (
            <article className={`dish-card reveal delay-${index}`} key={dish.title}>
              <img src={dish.image} alt={dish.alt} />
              <div>
                <h3>{dish.title}</h3>
                <p>{dish.copy}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="center-action reveal">
          <Link className="text-link" href="/menu">
            View full menu plan
          </Link>
        </div>
      </section>

      <section className="section gallery-band">
        <div className="section-heading reveal">
          <p className="eyebrow">Gallery</p>
          <h2>Food, Fire & Ambience</h2>
        </div>
        <div className="gallery-ribbon reveal">
          <img
            src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=700&q=80"
            alt="Indian dish closeup"
          />
          <img
            src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=700&q=80"
            alt="Indian curry and rice"
          />
          <img src="/images/videsi-mark-circle.png" alt="Videsi circular logo" />
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=700&q=80"
            alt="Restaurant interior"
          />
          <img
            src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=700&q=80"
            alt="Cocktail with garnish"
          />
        </div>
        <div className="center-action reveal">
          <Link className="text-link" href="/gallery">
            View full gallery
          </Link>
        </div>
      </section>

      <section className="section reviews-section">
        <div className="section-heading reveal">
          <p className="eyebrow">Reviews</p>
          <h2>Built Around Community Tables</h2>
        </div>
        <div className="review-grid">
          <blockquote className="review-card reveal">
            <p>
              "A downtown Indian spot should feel vibrant, polished, and full of flavor. This
              direction gives Videsi a premium first impression."
            </p>
            <cite>Project positioning</cite>
          </blockquote>
          <blockquote className="review-card reveal delay-1">
            <p>
              "The catering path is clear from the first screen, which matters for families,
              offices, and community events planning ahead."
            </p>
            <cite>Lead generation focus</cite>
          </blockquote>
        </div>
      </section>

      <section className="section contact-strip">
        <div className="section-copy reveal">
          <p className="eyebrow">Catering & Contact</p>
          <h2>Planning an event in Kitchener-Waterloo?</h2>
          <p>
            Send the guest count, date, and event style. The catering page is designed to turn
            interest into a clear lead without making guests hunt through the site.
          </p>
        </div>
        <LeadForm className="reveal delay-1" compact />
      </section>
    </main>
  );
}
