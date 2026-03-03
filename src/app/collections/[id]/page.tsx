import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import SectionHeader from "@/components/SectionHeader";
import { collections, getCollection, getCollectionProducts } from "@/lib/data";

export function generateStaticParams() {
  return collections.map((c) => ({ id: c.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const col = getCollection(id);
  if (!col) return {};
  return {
    title: `${col.name} — Viya T`,
    description: col.description,
  };
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const col = getCollection(id);
  if (!col) notFound();

  const products = getCollectionProducts(id);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh] md:h-[65vh] overflow-hidden">
        <Image
          src={col.image}
          alt={col.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-navy/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-maroon-deep/25 to-transparent" />

        <div className="absolute top-24 left-8 w-12 h-12 border-t border-l border-gold-dim/20" />
        <div className="absolute top-24 right-8 w-12 h-12 border-t border-r border-gold-dim/20" />
        <div className="absolute bottom-8 left-8 w-12 h-12 border-b border-l border-gold-dim/20" />
        <div className="absolute bottom-8 right-8 w-12 h-12 border-b border-r border-gold-dim/20" />

        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-2xl px-4">
            <Image
              src="/images/logo-mark.png"
              alt=""
              width={120}
              height={154}
              className="logo-gold mx-auto mb-5 h-24 md:h-32 w-auto"
              priority
            />
            <p className="text-[10px] tracking-[0.5em] uppercase text-gold-metallic/45 mb-4">
              {col.tagline}
            </p>
            <h1 className="font-[var(--font-serif)] text-4xl md:text-6xl lg:text-7xl text-ivory">
              {col.name}
            </h1>
            <p className="mt-5 text-ivory/35 max-w-lg mx-auto leading-relaxed">
              {col.description}
            </p>
            <div className="baroque-divider mt-8">
              <span className="text-gold-dim/25 text-xs">&#10043;</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-gold-dim/40 hover:text-gold-metallic transition-colors"
          >
            <ArrowLeft size={14} />
            Home
          </Link>
        </div>

        <SectionHeader
          eyebrow={`${products.length} Fragrances`}
          title="The Complete Collection"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {products.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              priority={i < 4}
            />
          ))}
        </div>
      </section>
    </>
  );
}
