"use client";

import { useState } from "react";

export default function LeadForm({ catering = false, contact = false, compact = false, className = "" }) {
  const [note, setNote] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setNote(
      "Thanks. This demo captured the inquiry flow; connect this form to the final backend before launch."
    );
    event.currentTarget.reset();
  }

  return (
    <form className={`lead-form ${className}`} onSubmit={handleSubmit}>
      <label>
        Full name
        <input type="text" name="name" placeholder="Your name" required />
      </label>
      <label>
        Phone number
        <input type="tel" name="phone" placeholder="(519) 000-0000" required />
      </label>
      {!compact && (
        <label>
          Email
          <input type="email" name="email" placeholder="you@example.com" />
        </label>
      )}
      {catering ? (
        <>
          <label>
            Event date
            <input type="date" name="date" />
          </label>
          <label>
            Guest count
            <input type="number" min="1" name="guests" placeholder="Approx. guests" />
          </label>
          <label>
            Event type
            <select name="type">
              <option value="">Select one</option>
              <option>Birthday</option>
              <option>Corporate</option>
              <option>Wedding</option>
              <option>Family gathering</option>
              <option>Other</option>
            </select>
          </label>
        </>
      ) : (
        <label>
          {contact ? "Topic" : "Inquiry type"}
          <select name="type" required={compact}>
            <option value="">Select one</option>
            <option>Catering</option>
            <option>Dine-in</option>
            <option>Takeout</option>
            <option>General question</option>
          </select>
        </label>
      )}
      <label className="span-2">
        Message
        <textarea name="message" placeholder={catering ? "Tell us about your event" : "How can we help?"} />
      </label>
      <button className="btn btn-primary span-2" type="submit">
        {catering ? "Request Catering Quote" : "Submit Inquiry"}
      </button>
      <p className="form-note span-2">{note}</p>
    </form>
  );
}
