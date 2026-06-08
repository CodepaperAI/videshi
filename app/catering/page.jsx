import LeadForm from "@/components/LeadForm";

export const metadata = {
  title: "Catering",
  description: "Request catering from Videsi Bar & Grill for events in Kitchener-Waterloo."
};

export default function CateringPage() {
  return (
    <main>
      <section className="page-hero catering-hero">
        <p className="eyebrow">Catering</p>
        <h1>Bring Videsi to birthdays, offices, weddings, and community events.</h1>
        <p>
          Designed as the main lead collection page for catering inquiries across the
          Kitchener-Waterloo area.
        </p>
      </section>
      <section className="section contact-strip">
        <div className="section-copy reveal">
          <p className="eyebrow">Request a Quote</p>
          <h2>A direct path from event idea to catering lead.</h2>
          <p>
            Capture the event date, guest count, phone number, and preferred service style. Once the
            kitchen confirms packages, this page can include buffet, tray, and custom menu options.
          </p>
          <div className="mini-list">
            <span>Corporate lunches</span>
            <span>Family celebrations</span>
            <span>Wedding events</span>
            <span>Community gatherings</span>
          </div>
        </div>
        <LeadForm className="reveal delay-1" catering />
      </section>
    </main>
  );
}
