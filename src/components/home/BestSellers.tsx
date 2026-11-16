import { ArrowRight } from "lucide-react";

import { products } from "@/data/products";

import { ProductCard } from "./ProductCard";

export function BestSellers() {
  return (
    <section
      id="products"
      className="w-full scroll-mt-24 bg-background px-4 pb-14 pt-6 md:px-8 md:pb-20 md:pt-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-5 md:mb-10 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <p className="font-sans text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">
              Best Sellers
            </p>
            <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Our Most Loved Pieces
            </h2>
            <p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground md:text-[0.9375rem]">
              A curated selection of customer favorites, chosen for style,
              comfort, and quality.
            </p>
          </div>

          <a
            href="#products"
            className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-foreground/85 px-5 py-2.5 font-sans text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-primary-foreground"
          >
            View All Best Sellers
            <ArrowRight className="size-4" strokeWidth={1.75} aria-hidden />
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {products.map((product) => (
            <ProductCard
              key={product.slug}
              name={product.name}
              price={product.price}
              rating={product.rating}
              reviewCount={product.reviewCount}
              imageSrc={product.imageSrc}
              href={`/products/${product.slug}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
