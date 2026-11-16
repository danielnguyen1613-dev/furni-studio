import { ArrowRight } from "lucide-react";

import { CollectionCard } from "./CollectionCard";

const collections = [
  {
    title: "Sofas",
    imageSrc: "/images/collections/sofas.webp",
    href: "#collections-sofas",
  },
  {
    title: "Chairs",
    imageSrc: "/images/collections/chairs.webp",
    href: "#collections-chairs",
  },
  {
    title: "Tables",
    imageSrc: "/images/collections/tables.webp",
    href: "#collections-tables",
  },
  {
    title: "Lighting",
    imageSrc: "/images/collections/lighting.webp",
    href: "#collections-lighting",
  },
] as const;

export function FeaturedCollections() {
  return (
    <section className="w-full bg-background px-4 pb-10 md:px-8 md:pb-14">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex items-end justify-between gap-4 md:mb-8">
          <h2 className="font-sans text-2xl font-semibold tracking-tight text-foreground md:text-2xl">
            Featured Collections
          </h2>
          <a
            href="#collections"
            className="inline-flex items-center gap-1.5 font-sans text-sm font-medium text-foreground transition-opacity hover:opacity-70"
          >
            View All Collections
            <ArrowRight className="size-4" strokeWidth={1.75} aria-hidden />
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {collections.map((collection) => (
            <CollectionCard
              key={collection.title}
              title={collection.title}
              imageSrc={collection.imageSrc}
              href={collection.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
