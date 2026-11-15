import { CollectionCard } from "./CollectionCard";

const collections = ["Sofas", "Chairs", "Tables", "Lighting"] as const;

export function FeaturedCollections() {
  return (
    <section className="w-full bg-orange-400 px-4 py-8 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="bg-orange-600 px-3 py-2 text-lg font-semibold text-white md:text-xl">
            Featured Collections
          </div>
          <div className="bg-orange-600 px-3 py-2 text-sm text-white">
            View All Collections
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {collections.map((title) => (
            <CollectionCard key={title} title={title} />
          ))}
        </div>
      </div>
    </section>
  );
}
