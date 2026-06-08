"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main>
      <header className="subpage-header">
        <p className="eyebrow">Find Us</p>
        <h1>Contact & Location</h1>
        <p className="subpage-desc">
          We are located at 146 King St W, Kitchener, Ontario. Join us today or drop us a line below for table reservations, events, or inquiries.
        </p>
      </header>

      {/* Contact & Location Section */}
      <section className="section">
        <div className="contact-layout">
          <motion.div 
            className="section-copy"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="eyebrow">Contact & Location</p>
            <h2>Visit Videsi</h2>
            <p>
              Whether you're looking for a quick bite or planning a large event, we are here to serve you.
            </p>
            <div style={{ marginTop: "2rem", display: "grid", gap: "0.5rem" }}>
              <p><strong>Hours:</strong> Mon–Sun 12pm – 10pm</p>
              <p><strong>Address:</strong> 146 King St W, Kitchener, ON N2G 1A8</p>
              <p><strong>Phone:</strong> <a href="tel:+15192217262" className="text-link" style={{margin:0}}>519-221-7262</a></p>
              <p><strong>Email:</strong> <a href="mailto:hello@videsibar.ca" className="text-link" style={{margin:0}}>hello@videsibar.ca</a></p>
            </div>
            <div style={{ display: "flex", gap: "1rem", marginTop: "1.5rem" }}>
              <a href="#" className="text-link" style={{margin:0}}>Instagram</a>
              <span style={{color: "var(--gold)"}}>·</span>
              <a href="#" className="text-link" style={{margin:0}}>Facebook</a>
              <span style={{color: "var(--gold)"}}>·</span>
              <a href="#" className="text-link" style={{margin:0}}>Google Maps</a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
          >
            <form className="lead-form" onSubmit={(e) => e.preventDefault()}>
              <label className="span-2">
                Name
                <input type="text" placeholder="Your Name" required />
              </label>
              <label className="span-2">
                Email
                <input type="email" placeholder="Your Email" required />
              </label>
              <label className="span-2">
                Message
                <textarea placeholder="Event details or inquiry..." required></textarea>
              </label>
              <button type="submit" className="btn span-2" style={{ background: "var(--gold)", color: "#000", border: "none" }}>SEND MESSAGE</button>
            </form>
          </motion.div>
        </div>

        <motion.div 
          style={{ marginTop: "4rem" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <iframe 
            src="https://maps.google.com/maps?q=146+King+St+W,+Kitchener,+ON&output=embed"
            className="contact-map-iframe"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location for Videsi Bar & Grill"
          />
        </motion.div>
      </section>
    </main>
  );
}
