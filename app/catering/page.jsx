import LeadForm from "@/components/LeadForm";
import { Briefcase, Sparkles, Users } from "lucide-react";

export const metadata = {
  title: "Catering",
  description: "Request catering from Videsi Bar & Grill for events in Kitchener-Waterloo."
};

export default function CateringPage() {
  return (
    <main>
      <header className="subpage-header">
        <p className="eyebrow">Premium Services</p>
        <h1>Catering & Private Events</h1>
        <p className="subpage-desc">
          Bring the signature flavor and style of Videsi to your next gathering. We provide complete catering services for corporate events, weddings, and family celebrations in Kitchener-Waterloo.
        </p>
      </header>

      {/* Package Cards Section */}
      <section className="section catering-packages-section">
        <div className="section-heading reveal">
          <p className="eyebrow">Our Packages</p>
          <h2>Tailored for any gathering</h2>
        </div>

        <div className="packages-grid">
          <article className="package-card reveal">
            <div className="package-icon">
              <Briefcase size={28} />
            </div>
            <h2>Corporate Lunch</h2>
            <p className="package-price">$28 / person</p>
            <p className="package-desc">
              Indo-Chinese bites, hot wraps, and classic Punjabi curries designed for seamless office setups and quick cleanups.
            </p>
            <a href="#catering-form" className="btn btn-secondary">Select Package</a>
          </article>

          <article className="package-card reveal delay-1">
            <div className="package-icon">
              <Sparkles size={28} />
            </div>
            <h2>Wedding & Events</h2>
            <p className="package-price">Custom Quote</p>
            <p className="package-desc">
              Premium tandoor grills, live food counter stations, and customized multi-course menus crafted for your special day.
            </p>
            <a href="#catering-form" className="btn btn-secondary">Inquire Now</a>
          </article>

          <article className="package-card reveal delay-2">
            <div className="package-icon">
              <Users size={28} />
            </div>
            <h2>Community & Cultural</h2>
            <p className="package-price">$22 / person</p>
            <p className="package-desc">
              Hearty Punjabi staples, family-sized biryanis, and traditional desserts tailored for warm community gatherings.
            </p>
            <a href="#catering-form" className="btn btn-secondary">Select Package</a>
          </article>
        </div>
      </section>

      {/* Steps Section */}
      <section className="section catering-steps-section reveal">
        <div className="section-heading">
          <p className="eyebrow">How It Works</p>
          <h2>Our Catering Process</h2>
        </div>
        <div className="steps-grid">
          <article className="step-card">
            <span className="step-num">01</span>
            <h3>Consult & Design</h3>
            <p>Share your event details, guest count, and service preferences. We'll design a customized menu draft that perfectly fits your budget and vibe.</p>
          </article>
          <article className="step-card">
            <span className="step-num">02</span>
            <h3>Tasting & Refinement</h3>
            <p>Schedule a private tasting session to sample menu highlights, adjust seasoning or spice levels, and refine details with our culinary team.</p>
          </article>
          <article className="step-card">
            <span className="step-num">03</span>
            <h3>Professional Setup</h3>
            <p>On event day, our staff handles full setup, styling, and service, ensuring a seamless, high-end experience for you and your guests.</p>
          </article>
        </div>
      </section>

      <section id="catering-form" className="section contact-strip">
        <div className="section-copy reveal">
          <p className="eyebrow">Request a Quote</p>
          <h2>A direct path from event idea to catering lead.</h2>
          <p>
            Provide your event date, estimated guest count, phone number, and service style.
            Our coordinator will connect with you within 24 hours to finalize your custom menu.
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

      {/* FAQs Section */}
      <section className="section catering-faqs-section reveal">
        <div className="section-heading">
          <p className="eyebrow">Got Questions?</p>
          <h2>Catering FAQs</h2>
        </div>
        <div className="faq-grid">
          <article className="faq-item">
            <h3 className="faq-question">What is the minimum guest count?</h3>
            <p className="faq-answer">Our corporate packages start at a minimum of 15 guests. For large events and customized wedding packages, we cater for up to 500 guests.</p>
          </article>
          <article className="faq-item">
            <h3 className="faq-question">Do you offer live cooking counters?</h3>
            <p className="faq-answer">Yes, we can set up live tandoori grills and wok stations for fresh street bites like Hakka noodles or seekh kebabs on-site.</p>
          </article>
          <article className="faq-item">
            <h3 className="faq-question">Can you accommodate dietary restrictions?</h3>
            <p className="faq-answer">Absolutely. We offer a wide range of vegetarian, vegan, gluten-free, and nut-free dishes. All meats are Halal.</p>
          </article>
          <article className="faq-item">
            <h3 className="faq-question">Do you provide staffing and tableware?</h3>
            <p className="faq-answer">Yes, we can provide professional servers, bartenders, chafing dishes, premium plates, and complete buffet tablescapes upon request.</p>
          </article>
        </div>
      </section>
    </main>
  );
}
