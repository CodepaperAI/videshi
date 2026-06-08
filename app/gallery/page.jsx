const photos = [
  [
    "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=80",
    "Indian curry and rice"
  ],
  [
    "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80",
    "Indian appetizer"
  ],
  ["/images/videsi-mark-circle.png", "Videsi logo on black"],
  [
    "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=900&q=80",
    "Indian meal served in a bowl"
  ],
  [
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
    "Restaurant interior"
  ],
  [
    "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=900&q=80",
    "Cocktail drink"
  ]
];

export const metadata = {
  title: "Gallery",
  description: "A visual gallery direction for Videsi Bar & Grill."
};

export default function GalleryPage() {
  return (
    <main>
      <section className="page-hero gallery-hero">
        <p className="eyebrow">Gallery</p>
        <h1>Food, fire, cocktails, and black-gold ambience.</h1>
        <p>
          Use real restaurant photography here once available. The current gallery sets the
          composition and mood.
        </p>
      </section>
      <section className="section photo-grid">
        {photos.map(([src, alt], index) => (
          <img className={`reveal delay-${index % 3}`} src={src} alt={alt} key={src} />
        ))}
      </section>
    </main>
  );
}
