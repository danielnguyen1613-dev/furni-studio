import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  getAllProductSlugs,
  getProductBySlug,
} from "@/data/products";

export function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/products/[slug]">) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Product not found" };
  }

  return {
    title: `${product.name} | Luma`,
    description: `${product.name} — ${product.price}`,
  };
}

export default async function ProductDetailPage({
  params,
}: PageProps<"/products/[slug]">) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-10 md:px-8 md:py-14">
      <Link
        href="/#products"
        className="font-sans text-sm text-muted-foreground transition-opacity hover:opacity-70"
      >
        ← Back to products
      </Link>

      <div className="mt-8 grid gap-8 md:grid-cols-2 md:gap-12">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
          <Image
            src={product.imageSrc}
            alt={product.name}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div>
          <h1 className="font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {product.name}
          </h1>
          <p className="mt-3 font-sans text-lg text-foreground">{product.price}</p>
          <p className="mt-2 font-sans text-sm text-muted-foreground">
            {product.rating.toFixed(1)} ({product.reviewCount})
          </p>
        </div>
      </div>
    </main>
  );
}
