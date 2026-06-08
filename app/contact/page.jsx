import LeadForm from "@/components/LeadForm";

export const metadata = {
  title: "Contact",
  description: "Contact Videsi Bar & Grill in Downtown Kitchener."
};

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero contact-hero">
        <p className="eyebrow">Contact</p>
        <h1>Find Videsi on King Street.</h1>
        <p>
          146 King St, Kitchener, ON N2G 1A6. Call Kush at 519-221-7262 for the current project
          contact.
        </p>
      </section>
      <section className="section contact-layout">
        <div className="contact-card reveal">
          <p className="eyebrow">Details</p>
          <h2>Videsi Bar & Grill</h2>
          <p>146 King St, Kitchener, ON N2G 1A6</p>
          <p>
            <a href="tel:+15192217262">519-221-7262</a>
          </p>
          <p>Hours to be confirmed by client.</p>
          <a
            className="btn btn-secondary"
            href="https://www.google.com/maps/search/?api=1&query=146+King+St+Kitchener+ON+N2G+1A6"
          >
            Open Map
          </a>
        </div>
        <LeadForm className="reveal delay-1" contact />
      </section>
    </main>
  );
}
