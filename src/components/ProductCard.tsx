import Image from "next/image";
import { Star } from "lucide-react";
import { type Product, formatPrice } from "@/lib/data";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export default function ProductCard({
  product,
  priority = false,
}: ProductCardProps) {
  return (
    <div className="group block">
      <div className="relative overflow-hidden bg-navy-mid aspect-[3/4] border border-gold-dim/8 group-hover:border-gold-dim/20 transition-colors duration-500">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          priority={priority}
        />
        {product.hoverImage && (
          <Image
            src={product.hoverImage}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent pointer-events-none" />

        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isBestseller && (
            <span className="px-3 py-1 bg-gradient-to-r from-gold-dim via-gold to-gold-dim text-navy text-[10px] tracking-widest uppercase font-semibold">
              Bestseller
            </span>
          )}
          {product.isNew && (
            <span className="px-3 py-1 bg-maroon text-gold-metallic text-[10px] tracking-widest uppercase font-semibold">
              New
            </span>
          )}
        </div>

        <div className="absolute top-2.5 right-2.5 w-5 h-5 border-t border-r border-gold-dim/12 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-2.5 left-2.5 w-5 h-5 border-b border-l border-gold-dim/12 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="mt-4 space-y-1.5">
        <p className="text-[10px] tracking-[0.25em] uppercase text-gold-dim/40">
          {product.subtitle}
        </p>
        <h3 className="font-[var(--font-serif)] text-lg text-ivory group-hover:text-gold-metallic transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={11}
                className={
                  i < Math.floor(product.rating)
                    ? "fill-gold-dim text-gold-dim"
                    : "text-ivory/10"
                }
              />
            ))}
          </div>
          <span className="text-[10px] text-ivory/20">
            ({product.reviewCount})
          </span>
        </div>
        <p className="text-sm font-medium text-gold-metallic">
          {formatPrice(product.price)}
          {product.sizes.length > 1 && (
            <span className="text-xs font-normal text-ivory/20 ml-2">
              {product.sizes.length} sizes
            </span>
          )}
        </p>
      </div>
    </div>
  );
}
