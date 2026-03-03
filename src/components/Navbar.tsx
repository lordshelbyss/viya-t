"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Instagram } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/collections", label: "Collections" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/92 backdrop-blur-md border-b border-gold-dim/12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-ivory/60 hover:text-gold-metallic transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.slice(0, 2).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[11px] tracking-[0.25em] uppercase text-ivory/40 hover:text-gold-metallic transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Logo: mark + wordmark */}
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/images/logo-mark.png"
                alt="Viya T"
                width={28}
                height={36}
                className="logo-gold h-7 md:h-9 w-auto"
                priority
              />
              <div className="flex flex-col items-start">
                <span className="font-[var(--font-serif)] text-lg md:text-xl tracking-[0.2em] gold-text leading-none">
                  VIYA T
                </span>
                <span className="text-[7px] tracking-[0.35em] uppercase text-gold-dim/30 leading-none mt-0.5">
                  Organic Perfumery
                </span>
              </div>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.slice(2).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[11px] tracking-[0.25em] uppercase text-ivory/40 hover:text-gold-metallic transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://instagram.com/viyat.perfumery"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-ivory/30 hover:text-gold-metallic transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={17} />
              </a>
            </div>

            <a
              href="https://instagram.com/viyat.perfumery"
              target="_blank"
              rel="noopener noreferrer"
              className="md:hidden p-2 text-ivory/30 hover:text-gold-metallic transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-gold-dim/20 to-transparent" />
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-navy/98 backdrop-blur-sm md:hidden">
          <div className="pt-24 px-8 flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-[var(--font-serif)] tracking-wider text-ivory/70 hover:text-gold-metallic transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-8 pt-8 border-t border-gold-dim/12 flex flex-col gap-5">
              <a
                href="https://instagram.com/viyat.perfumery"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-sm text-ivory/30 hover:text-gold-metallic transition-colors"
              >
                <Instagram size={16} />
                @viyat.perfumery
              </a>
              <p className="text-[10px] text-gold-dim/25 tracking-[0.3em] uppercase">
                100% Organic &middot; Chemical Free
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
