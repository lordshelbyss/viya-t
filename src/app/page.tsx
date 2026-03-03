import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf, Droplets, FlaskConical, Instagram } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import SectionHeader from "@/components/SectionHeader";
import { collection, getBestsellers, getNewArrivals } from "@/lib/data";

export default function Home() {
  const bestsellers = getBestsellers();
  const newArrivals = getNewArrivals();

  return (
    <>
      {/* Hero */}
      <section className="relative h-[90vh] md:h-screen overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1541643600914-78b084683601?w=1920&h=1080&fit=crop&q=80"
          alt="Viya T organic perfume"
          fill
          className="object-cover scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/92 via-navy/65 to-maroon-deep/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/30" />

        <div className="absolute top-24 left-8 md:left-16 w-16 h-16 border-t border-l border-gold-dim/25" />
        <div className="absolute top-24 right-8 md:right-16 w-16 h-16 border-t border-r border-gold-dim/25" />
        <div className="absolute bottom-8 left-8 md:left-16 w-16 h-16 border-b border-l border-gold-dim/25" />
        <div className="absolute bottom-8 right-8 md:right-16 w-16 h-16 border-b border-r border-gold-dim/25" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-xl">
              {/* Logo mark as hero accent */}
              <Image
                src="/images/logo-mark.png"
                alt=""
                width={120}
                height={154}
                className="logo-gold h-28 md:h-36 w-auto mb-6 animate-fade-in-up"
                priority
              />
              <p className="text-[11px] tracking-[0.5em] uppercase text-gold-metallic/60 animate-fade-in-up">
                100% Organic &middot; Alcohol Free
              </p>
              <h1 className="mt-6 font-[var(--font-serif)] text-5xl md:text-7xl lg:text-8xl text-ivory leading-[0.95] animate-fade-in-up animation-delay-200">
                The Art of
                <br />
                <span className="italic gold-text">Pure</span> Scent
              </h1>
              <p className="mt-6 text-base md:text-lg text-ivory/35 leading-relaxed max-w-md animate-fade-in-up animation-delay-400">
                Handcrafted organic skin scents inspired by India&apos;s timeless
                botanical heritage. Every drop, a story of nature.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-600">
                <Link
                  href="/collections"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-gold-dim via-gold to-gold-dim text-navy text-sm tracking-[0.2em] uppercase font-semibold hover:from-gold hover:via-gold-light hover:to-gold transition-all"
                >
                  Discover the Collection
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-gold-dim/30 text-gold-metallic text-sm tracking-[0.2em] uppercase hover:bg-gold-dim/10 transition-colors"
                >
                  Our Story
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[9px] tracking-[0.3em] uppercase text-gold-dim/25">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-gold-dim/25 to-transparent" />
        </div>
      </section>

      {/* Promise bar */}
      <section className="bg-navy-light border-y border-gold-dim/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x divide-gold-dim/10">
            {[
              {
                icon: Leaf,
                title: "100% Organic",
                desc: "Every ingredient sourced from certified organic farms across India",
              },
              {
                icon: FlaskConical,
                title: "Alcohol Free",
                desc: "Pure skin scents — no alcohol, no synthetics, no artificial fragrances",
              },
              {
                icon: Droplets,
                title: "Steam Distilled",
                desc: "Ancient techniques preserving nature's purest, most complex essences",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-5 md:justify-center md:px-10"
              >
                <div className="w-12 h-12 flex items-center justify-center border border-gold-dim/20 rotate-45 shrink-0">
                  <item.icon size={20} className="text-gold-metallic/60 -rotate-45" />
                </div>
                <div>
                  <p className="text-sm font-medium text-ivory/75">
                    {item.title}
                  </p>
                  <p className="text-xs text-ivory/25 mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy quote */}
      <section className="relative py-36 md:py-44 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=1920&h=800&fit=crop&q=80"
          alt="Organic botanical garden"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy/88" />
        <div className="absolute inset-0 bg-gradient-to-r from-maroon-deep/25 to-navy/25" />

        <div className="absolute top-10 left-10 right-10 bottom-10 border border-gold-dim/8 pointer-events-none" />
        <div className="absolute top-12 left-12 right-12 bottom-12 border border-gold-dim/4 pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Image
            src="/images/logo-mark.png"
            alt=""
            width={120}
            height={154}
            className="logo-gold mx-auto mb-8 h-28 md:h-36 w-auto"
          />
          <blockquote className="font-[var(--font-serif)] text-2xl md:text-4xl lg:text-[2.75rem] text-ivory leading-snug italic">
            &ldquo;We believe the finest fragrances are born from the earth, not
            a laboratory. Every Viya T creation is a hymn to nature&apos;s
            boundless artistry.&rdquo;
          </blockquote>
          <div className="baroque-divider mt-10 mb-6">
            <span className="text-gold-dim/30 text-xs">&#9830;</span>
          </div>
          <p className="text-xs tracking-[0.3em] uppercase text-gold-dim/35">
            — The House of Viya T
          </p>
        </div>
      </section>

      {/* The Collection — single hero feature */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <SectionHeader
          eyebrow="The Debut Collection"
          title="Sabae"
          description="Meaning 'everything' in Nepali — eight exquisite organic fragrances spanning florals, woods, citruses, and resins. A little bit of everything, distilled into pure, alcohol-free perfumery."
        />
        <Link
          href="/collections/sabae"
          className="group relative block overflow-hidden aspect-[21/9] border border-gold-dim/15 hover:border-gold-dim/30 transition-colors duration-500"
        >
          <Image
            src={collection.image}
            alt={collection.name}
            fill
            className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/35 to-maroon-deep/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/50 to-transparent" />

          <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-gold-dim/25" />
          <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-gold-dim/25" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-gold-dim/25" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-gold-dim/25" />

          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <p className="text-[10px] tracking-[0.4em] uppercase text-gold-metallic/50 mb-3">
              {collection.tagline}
            </p>
            <h3 className="font-[var(--font-serif)] text-3xl md:text-4xl text-ivory mb-4">
              {collection.name}
            </h3>
            <span className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-gold-metallic/50 group-hover:text-gold-metallic transition-colors duration-300">
              Explore the Collection
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </span>
          </div>
        </Link>
      </section>

      {/* Signature Fragrances */}
      <section className="bg-navy-light py-24 md:py-32 border-y border-gold-dim/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Most Loved"
            title="Signature Fragrances"
            description="Our most cherished creations — timeless scents that define the Viya T experience."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {bestsellers.map((product, i) => (
              <ProductCard
                key={product.id}
                product={product}
                priority={i < 3}
              />
            ))}
          </div>
        </div>
      </section>

      {/* New Creations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <SectionHeader
          eyebrow="Just Arrived"
          title="New Creations"
          description="Fresh inspirations from nature's ever-evolving garden — the newest chapters in our story."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* The Experience */}
      <section className="relative py-32 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1920&h=800&fit=crop&q=80"
          alt="Luxury perfume experience"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy/82" />
        <div className="absolute inset-0 bg-gradient-to-b from-maroon-deep/15 to-navy/50" />
        <div className="absolute top-8 left-8 right-8 bottom-8 border border-gold-dim/8 pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[10px] tracking-[0.5em] uppercase text-gold-dim/40 mb-4">
            The Viya T Experience
          </p>
          <h2 className="font-[var(--font-serif)] text-3xl md:text-5xl text-ivory mb-5 leading-tight">
            Where Nature Meets
            <span className="italic gold-text"> Luxury</span>
          </h2>
          <p className="text-ivory/30 leading-relaxed max-w-xl mx-auto mb-10">
            Each Viya T fragrance is a voyage — from organic farms and ancient
            distilleries to a hand-blown amber vessel that holds the very soul
            of nature. Discover the artistry behind every bottle.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gold-dim via-gold to-gold-dim text-navy text-sm tracking-[0.2em] uppercase font-semibold hover:from-gold hover:via-gold-light hover:to-gold transition-all"
          >
            Explore Our World
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Instagram */}
      <section className="bg-navy-light py-24 md:py-28 border-t border-gold-dim/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <a
            href="https://instagram.com/viyat.perfumery"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 text-gold-dim/35 hover:text-gold-metallic transition-colors mb-3"
          >
            <Instagram size={16} />
            <span className="text-[10px] tracking-[0.4em] uppercase">
              @viyat.perfumery
            </span>
          </a>
          <h2 className="font-[var(--font-serif)] text-3xl md:text-4xl text-ivory mb-12">
            Follow the Fragrance
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
            {[
              "photo-1616604426203-3e424ecab44a",
              "photo-1588405748880-12d1d2a59f75",
              "photo-1490750967868-88aa4f44baee",
              "photo-1587017539504-67cfbddac569",
            ].map((id) => (
              <a
                key={id}
                href="https://instagram.com/viyat.perfumery"
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-square overflow-hidden group border border-gold-dim/8 hover:border-gold-dim/25 transition-colors"
              >
                <Image
                  src={`https://images.unsplash.com/${id}?w=500&h=500&fit=crop&q=80`}
                  alt="Viya T on Instagram"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-colors duration-300 flex items-center justify-center">
                  <Instagram
                    size={28}
                    className="text-gold-metallic opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
