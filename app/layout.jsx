import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevealProvider from "@/components/RevealProvider";

export const metadata = {
  title: {
    default: "Videsi Bar & Grill | Indian Restaurant in Kitchener",
    template: "%s | Videsi Bar & Grill"
  },
  description:
    "Videsi Bar & Grill serves authentic Punjabi and Indo-Chinese food in Downtown Kitchener, with dine-in, takeout, and catering.",
  metadataBase: new URL("https://videsibarandgrill.com")
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <RevealProvider />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
