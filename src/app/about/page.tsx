import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf, Heart, Sun, Recycle, Instagram } from "lucide-react";

export const metadata = {
  title: "Our Story — Viya T Organic Perfumery",
  description:
    "Discover the story behind Viya T — crafting pure, organic fragrances from India's botanical heritage.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=1920&h=1080&fit=crop&q=80"
          alt="Botanical garden"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-navy/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-maroon-deep/25 to-transparent" />

        <div className="absolute top-24 left-8 md:left-16 w-12 h-12 border-t border-l border-gold-dim/20" />
        <div className="absolute top-24 right-8 md:right-16 w-12 h-12 border-t border-r border-gold-dim/20" />
        <div className="absolute bottom-8 left-8 md:left-16 w-12 h-12 border-b border-l border-gold-dim/20" />
        <div className="absolute bottom-8 right-8 md:right-16 w-12 h-12 border-b border-r border-gold-dim/20" />

        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-2xl px-4">
            <Image
              src="/images/logo-mark.png"
              alt=""
              width={48}
              height={62}
              className="logo-gold mx-auto mb-6 h-12 w-auto"
              priority
            />
            <p className="text-[10px] tracking-[0.5em] uppercase text-gold-metallic/50 mb-6">
              Our Story
            </p>
            <h1 className="font-[var(--font-serif)] text-4xl md:text-6xl lg:text-7xl text-ivory leading-tight">
              Born from the Earth,
              <br />
              <span className="italic gold-text">Made</span> with Soul
            </h1>
            <div className="baroque-divider mt-8">
              <span className="text-gold-dim/30 text-xs">&#9830;</span>
            </div>
          </div>
        </div>
      </section>

      {/* Origin story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-[10px] tracking-[0.4em] uppercase text-gold-dim/45 mb-4">
              How It Began
            </p>
            <h2 className="font-[var(--font-serif)] text-3xl md:text-4xl text-ivory mb-6">
              A Journey Back to Nature
            </h2>
            <div className="space-y-4 text-ivory/35 leading-relaxed">
              <p>
                Viya T was born from a simple yet profound realization: the most
                exquisite fragrances don&apos;t come from a laboratory — they
                bloom in nature&apos;s garden.
              </p>
              <p>
                Founded in 2022, our journey began in the fragrant fields of
                South India, where generations of families have cultivated
                jasmine, rose, and sandalwood using time-honored organic
                practices. We saw an opportunity to bridge ancient wisdom with
                modern sensibility.
              </p>
              <p>
                Today, every Viya T fragrance is a collaboration between
                traditional artisans, organic farmers, and master perfumers —
                united by a shared belief that luxury should never come at
                nature&apos;s expense.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <span className="block w-12 h-px bg-gold-dim/25" />
              <span className="text-gold-dim/25 text-xs">&#9830;</span>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden border border-gold-dim/12">
            <Image
              src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&h=1000&fit=crop&q=80"
              alt="Organic botanical ingredients"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
            <div className="absolute top-3 left-3 w-8 h-8 border-t border-l border-gold-dim/20" />
            <div className="absolute bottom-3 right-3 w-8 h-8 border-b border-r border-gold-dim/20" />
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section id="philosophy" className="bg-navy-light py-24 md:py-32 border-y border-gold-dim/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-[10px] tracking-[0.4em] uppercase text-gold-dim/45 mb-4">
              Our Philosophy
            </p>
            <h2 className="font-[var(--font-serif)] text-3xl md:text-4xl text-ivory mb-6">
              The Four Pillars of Viya T
            </h2>
            <div className="baroque-divider">
              <span className="text-gold-dim/30 text-xs">&#10043;</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Leaf,
                title: "Pure Organic",
                text: "Every ingredient is certified organic, sourced directly from farms that practice regenerative agriculture. No compromises, ever.",
              },
              {
                icon: Heart,
                title: "Cruelty Free",
                text: "We never test on animals. Our fragrances are crafted with compassion — for all living beings and the planet we share.",
              },
              {
                icon: Sun,
                title: "Small Batch",
                text: "Each fragrance is crafted in small batches to ensure uncompromising quality. We believe in depth, not mass production.",
              },
              {
                icon: Recycle,
                title: "Sustainable",
                text: "From recyclable glass bottles to biodegradable packaging, every detail is designed with the earth in mind.",
              },
            ].map((pillar) => (
              <div
                key={pillar.title}
                className="text-center p-8 border border-gold-dim/8 bg-navy/50 hover:border-gold-dim/20 transition-colors duration-500"
              >
                <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center border border-gold-dim/15 rotate-45">
                  <pillar.icon size={22} className="text-gold-metallic/70 -rotate-45" />
                </div>
                <h3 className="font-[var(--font-serif)] text-xl text-ivory mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-ivory/30 leading-relaxed">
                  {pillar.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredients section */}
      <section id="ingredients" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative aspect-square overflow-hidden order-2 lg:order-1 border border-gold-dim/12">
            <Image
              src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=800&fit=crop&q=80"
              alt="Natural ingredients"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-navy/50 to-transparent" />
            <div className="absolute top-3 left-3 w-8 h-8 border-t border-l border-gold-dim/20" />
            <div className="absolute bottom-3 right-3 w-8 h-8 border-b border-r border-gold-dim/20" />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-[10px] tracking-[0.4em] uppercase text-gold-dim/45 mb-4">
              Our Ingredients
            </p>
            <h2 className="font-[var(--font-serif)] text-3xl md:text-4xl text-ivory mb-6">
              Nature&apos;s Finest, Unchanged
            </h2>
            <div className="space-y-4 text-ivory/35 leading-relaxed">
              <p>
                We source our ingredients from the most renowned botanical
                regions: Mysore sandalwood, Kannauj rose attar, Kashmiri
                saffron, and Assam oud — each carrying centuries of aromatic
                heritage.
              </p>
              <p>
                Our extraction methods — steam distillation, cold pressing, and
                enfleurage — are chosen to preserve the full aromatic profile of
                each botanical, resulting in fragrances of extraordinary depth
                and complexity.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { number: "100%", label: "Organic Ingredients" },
                { number: "0", label: "Synthetic Chemicals" },
                { number: "25+", label: "Botanical Sources" },
                { number: "50+", label: "Artisan Partners" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-5 bg-navy-light border border-gold-dim/8"
                >
                  <p className="font-[var(--font-serif)] text-2xl gold-text">
                    {stat.number}
                  </p>
                  <p className="text-xs text-ivory/25 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section id="sustainability" className="relative py-36 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&h=800&fit=crop&q=80"
          alt="Sustainable forest"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy/88" />
        <div className="absolute inset-0 bg-gradient-to-r from-maroon-deep/30 to-navy/30" />
        <div className="absolute top-8 left-8 right-8 bottom-8 border border-gold-dim/6 pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="baroque-divider mb-6">
            <span className="text-gold-dim/40 text-sm">&#10043;</span>
          </div>
          <h2 className="font-[var(--font-serif)] text-3xl md:text-5xl text-ivory mb-6">
            Fragrance Without Footprint
          </h2>
          <p className="text-ivory/35 leading-relaxed mb-10 max-w-xl mx-auto">
            We&apos;re committed to a circular approach: recyclable packaging,
            carbon-neutral shipping, and direct partnerships with organic
            farming communities that prioritize biodiversity.
          </p>
          <Link
            href="/collections"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gold-dim via-gold to-gold-dim text-navy text-sm tracking-[0.2em] uppercase font-semibold hover:from-gold hover:via-gold-light hover:to-gold transition-all"
          >
            Explore Sabae
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Instagram */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className="baroque-divider mb-4">
          <span className="text-gold-dim/25 text-xs">&#9830;</span>
        </div>
        <a
          href="https://instagram.com/viyat.perfumery"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 text-gold-dim/40 hover:text-gold-metallic transition-colors"
        >
          <Instagram size={20} />
          <span className="text-xs tracking-[0.3em] uppercase">
            Follow our journey on Instagram
          </span>
        </a>
      </section>
    </>
  );
}
