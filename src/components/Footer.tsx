import Link from "next/link";
import Image from "next/image";
import { Instagram } from "lucide-react";

const footerLinks = {
  Explore: [
    { label: "Home", href: "/" },
    { label: "Sabae Collection", href: "/collections/sabae" },
  ],
  "The Brand": [
    { label: "Our Story", href: "/about" },
    { label: "Our Philosophy", href: "/about#philosophy" },
    { label: "Sustainability", href: "/about#sustainability" },
    { label: "Our Ingredients", href: "/about#ingredients" },
  ],
  Connect: [
    { label: "Contact Us", href: "#" },
    { label: "Press & Media", href: "#" },
    { label: "Collaborations", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy-light border-t border-gold-dim/8">
      {/* Newsletter */}
      <div className="border-b border-gold-dim/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <Image
            src="/images/logo-mark.png"
            alt="Viya T"
            width={96}
            height={124}
            className="logo-gold mx-auto mb-6 h-24 w-auto"
          />
          <h3 className="font-[var(--font-serif)] text-2xl md:text-3xl gold-text mb-3">
            Stay in the World of Viya T
          </h3>
          <p className="text-sm text-ivory/25 mb-8 max-w-md mx-auto">
            Be the first to discover new fragrances, behind-the-scenes stories,
            and exclusive invitations.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-5 py-3 bg-navy/60 border border-gold-dim/15 rounded-none text-sm text-ivory placeholder:text-ivory/15 focus:outline-none focus:border-gold-dim/40 transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-gold-dim via-gold to-gold-dim text-navy text-sm tracking-[0.2em] uppercase font-semibold hover:from-gold hover:via-gold-light hover:to-gold transition-all"
            >
              Subscribe
            </button>
          </form>
          <div className="mt-10 flex items-center justify-center gap-5">
            <a
              href="https://instagram.com/viyat.perfumery"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-ivory/25 hover:text-gold-metallic transition-colors group"
            >
              <Instagram size={18} className="group-hover:scale-110 transition-transform" />
              <span className="text-xs tracking-[0.15em]">@viyat.perfumery</span>
            </a>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <Image
                src="/images/logo-mark.png"
                alt="Viya T"
                width={48}
                height={62}
                className="logo-gold h-14 w-auto"
              />
              <span className="font-[var(--font-serif)] text-lg tracking-[0.2em] gold-text">
                VIYA T
              </span>
            </Link>
            <p className="text-xs leading-relaxed text-ivory/20">
              Crafting pure, organic fragrances inspired by India&apos;s
              botanical heritage. Every scent tells a story of nature,
              tradition, and conscious luxury.
            </p>
            <a
              href="https://instagram.com/viyat.perfumery"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-ivory/20 hover:text-gold-metallic transition-colors"
            >
              <Instagram size={15} />
              <span className="text-[11px]">Instagram</span>
            </a>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-[10px] tracking-[0.25em] uppercase text-gold-dim/40 mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-ivory/25 hover:text-gold-metallic transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gold-dim/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ivory/15">
            &copy; {new Date().getFullYear()} Viya T Botanical Parfums. All
            rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-xs text-ivory/15 hover:text-gold-dim/50 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-xs text-ivory/15 hover:text-gold-dim/50 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
