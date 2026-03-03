import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { type Collection } from "@/lib/data";

interface CollectionCardProps {
  collection: Collection;
  priority?: boolean;
}

export default function CollectionCard({
  collection,
  priority = false,
}: CollectionCardProps) {
  return (
    <Link
      href={`/collections/${collection.id}`}
      className="group relative block overflow-hidden aspect-[16/9] md:aspect-[3/2] border border-gold/10 hover:border-gold/30 transition-colors duration-500"
    >
      <Image
        src={collection.image}
        alt={collection.name}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-transform duration-[1.2s] group-hover:scale-110"
        priority={priority}
      />
      {/* Rich baroque overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-maroon-deep/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/50 to-transparent" />

      {/* Decorative corner accents */}
      <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-gold/30" />
      <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-gold/30" />
      <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-gold/30" />
      <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-gold/30" />

      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
        <p className="text-[10px] tracking-[0.35em] uppercase text-gold/50 mb-2">
          {collection.tagline}
        </p>
        <h3 className="font-[var(--font-serif)] text-2xl md:text-3xl text-ivory mb-3">
          {collection.name}
        </h3>
        <span className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-gold/60 group-hover:text-gold transition-colors duration-300">
          Explore Collection
          <ArrowRight
            size={14}
            className="group-hover:translate-x-1 transition-transform"
          />
        </span>
      </div>
    </Link>
  );
}
