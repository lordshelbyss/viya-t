import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Viya T — Botanical Parfums",
  description:
    "Pure, organic fragrances crafted from India's finest botanicals. 100% chemical-free luxury perfumes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased bg-navy text-ivory">
        <Navbar />
        <main className="min-h-screen pt-20 md:pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
