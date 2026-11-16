export type Product = {
  slug: string;
  name: string;
  price: string;
  rating: number;
  reviewCount: number;
  imageSrc: string;
};

export const products: Product[] = [
  {
    slug: "modular-sofa",
    name: "Modular Sofa",
    price: "$1,690",
    rating: 4.8,
    reviewCount: 128,
    imageSrc: "/images/products/modular-sofa.webp",
  },
  {
    slug: "lounge-chair",
    name: "Lounge Chair",
    price: "$590",
    rating: 4.7,
    reviewCount: 86,
    imageSrc: "/images/products/lounge-chair.webp",
  },
  {
    slug: "coffee-table",
    name: "Coffee Table",
    price: "$390",
    rating: 4.8,
    reviewCount: 74,
    imageSrc: "/images/products/coffee-table.webp",
  },
  {
    slug: "arc-floor-lamp",
    name: "Arc Floor Lamp",
    price: "$290",
    rating: 4.7,
    reviewCount: 52,
    imageSrc: "/images/products/arc-floor-lamp.webp",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return products.map((product) => product.slug);
}
