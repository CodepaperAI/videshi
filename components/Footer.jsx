import Link from "next/link";
import { navItems } from "@/components/siteData";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <img src="/images/videsi-mark.png" alt="Videsi logo" />
        <p>Authentic Punjabi & Indo-Chinese. Dine-in, takeout, catering.</p>
      </div>
      <div>
        <h2>Find Us</h2>
        <p>146 King St, Kitchener, ON N2G 1A6</p>
        <p>
          <a href="tel:+15192217262">519-221-7262</a>
        </p>
      </div>
      <nav aria-label="Footer navigation">
        {navItems.map((item) => (
          <Link href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </footer>
  );
}
