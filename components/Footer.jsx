import Link from "next/link";
import { navItems } from "@/components/siteData";
import { Instagram, Facebook, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand-section">
        <img src="/images/videsi-mark.png" alt="Videsi Bar and Grill logo" />
        <p className="footer-tagline">Authentic Punjabi & Indo-Chinese. Downtown Kitchener.</p>
        <div className="footer-socials">
          <a href="#" aria-label="Follow Videsi on Instagram" className="social-icon">
            <Instagram size={20} />
          </a>
          <a href="#" aria-label="Follow Videsi on Facebook" className="social-icon">
            <Facebook size={20} />
          </a>
          <a 
            href="https://www.google.com/maps/search/?api=1&query=146+King+St+W+Kitchener+ON+N2G+1A8" 
            aria-label="Find Videsi on Google Maps" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon"
          >
            <MapPin size={20} />
          </a>
        </div>
      </div>
      
      <div className="footer-hours-section">
        <h2>Hours of Operation</h2>
        <div className="hours-grid">
          <div>
            <span>Mon – Thu</span>
            <strong>11:00 AM – 11:00 PM</strong>
          </div>
          <div>
            <span>Fri – Sat</span>
            <strong>11:00 AM – 1:00 AM</strong>
          </div>
          <div>
            <span>Sunday</span>
            <strong>12:00 PM – 10:00 PM</strong>
          </div>
        </div>
      </div>

      <div className="footer-links-section">
        <h2>Navigation</h2>
        <nav aria-label="Footer navigation">
          {navItems.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Videsi Bar & Grill. All rights reserved.</p>
      </div>
    </footer>
  );
}
