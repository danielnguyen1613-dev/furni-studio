"use client";

import { Heart, ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { cn } from "@/lib/utils";

export type ProductCardProps = {
  name: string;
  price: string;
  rating: number;
  reviewCount: number;
  imageSrc: string;
  href?: string;
};

export function ProductCard({
  name,
  price,
  rating,
  reviewCount,
  imageSrc,
  href = "#",
}: ProductCardProps) {
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl bg-surface shadow-[0_1px_3px_rgb(31_28_25_/_0.06)] ring-1 ring-border/60">
      <Link
        href={href}
        className="absolute inset-0 z-[1]"
        aria-label={`View ${name}`}
      />

      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={imageSrc}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
        <button
          type="button"
          aria-label={wishlisted ? `Remove ${name} from wishlist` : `Add ${name} to wishlist`}
          aria-pressed={wishlisted}
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            setWishlisted((prev) => !prev);
          }}
          className="absolute top-3 right-3 z-[2] inline-flex size-9 items-center justify-center rounded-full bg-white/95 text-foreground shadow-sm transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40"
        >
          <Heart
            className="size-4"
            strokeWidth={1.75}
            fill={wishlisted ? "currentColor" : "none"}
            aria-hidden
          />
        </button>
      </div>

      <div className="pointer-events-none relative z-[2] flex items-end justify-between gap-3 px-4 py-4 md:px-5 md:py-5">
        <div className="min-w-0">
          <p className="font-sans text-base font-semibold tracking-tight text-foreground transition-opacity group-hover:opacity-70">
            {name}
          </p>
          <p className="mt-1 font-sans text-sm text-foreground">{price}</p>
          <p className="mt-1.5 flex items-center gap-1 font-sans text-xs text-muted-foreground">
            <Star
              className="size-3.5 shrink-0 text-foreground"
              strokeWidth={1.5}
              fill="currentColor"
              aria-hidden
            />
            <span>
              {rating.toFixed(1)}{" "}
              <span className="text-muted-foreground/80">({reviewCount})</span>
            </span>
          </p>
        </div>

        <button
          type="button"
          aria-label={`Add ${name} to cart`}
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
          }}
          className={cn(
            "pointer-events-auto inline-flex size-10 shrink-0 items-center justify-center rounded-xl",
            "bg-muted text-foreground transition-colors hover:bg-border",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40"
          )}
        >
          <ShoppingCart className="size-4" strokeWidth={1.75} aria-hidden />
        </button>
      </div>
    </article>
  );
}
