import { Suspense } from "react";
import { notFound } from "next/navigation";

import { Product3DViewer } from "@/components/product/Product3DViewer";
import {
  getAllProductSlugs,
  getProductBySlug,
} from "@/data/products";

export function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

async function ProductSlugGuard({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return null;
}

export default function ProductDetailPage({
  params,
}: PageProps<"/products/[slug]">) {
  return (
    <div className="flex min-h-full w-full flex-col">
      {/* Header */}
      <header className="h-16 w-full shrink-0 bg-red-500 md:h-20" />

      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-4 px-4 py-4 md:gap-6 md:px-8 md:py-6">
        {/* Breadcrumb */}
        <div className="h-8 w-full bg-blue-500 md:h-10" />

        {/* Main Product Section */}
        <section className="grid gap-4 md:gap-6 lg:grid-cols-2">
          {/* Product Media Area */}
          <div className="flex flex-col gap-3 bg-yellow-400 p-3 md:gap-4 md:p-4">
            {/* Product visual / 3D viewer */}
            <Product3DViewer />
            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-2 md:gap-3">
              <div className="aspect-square bg-cyan-300" />
              <div className="aspect-square bg-cyan-300" />
              <div className="aspect-square bg-cyan-300" />
              <div className="aspect-square bg-cyan-300" />
            </div>
          </div>

          {/* Product Information Area */}
          <div className="flex flex-col gap-3 bg-green-500 p-3 md:gap-4 md:p-4">
            {/* Product information */}
            <div className="min-h-24 flex-1 bg-green-300 md:min-h-32" />
            {/* Product configuration */}
            <div className="min-h-28 bg-green-400 md:min-h-36" />
            {/* Purchase / action */}
            <div className="min-h-16 bg-green-600 md:min-h-20" />
          </div>
        </section>

        {/* Product Benefits / Service Information */}
        <section className="grid grid-cols-2 gap-3 bg-purple-500 p-3 sm:grid-cols-4 md:gap-4 md:p-4">
          <div className="min-h-16 bg-purple-300 md:min-h-20" />
          <div className="min-h-16 bg-purple-300 md:min-h-20" />
          <div className="min-h-16 bg-purple-300 md:min-h-20" />
          <div className="min-h-16 bg-purple-300 md:min-h-20" />
        </section>

        {/* Product Detail Tabs */}
        <section className="flex h-12 w-full gap-2 bg-orange-500 p-2 md:h-14 md:gap-3 md:p-3">
          <div className="h-full flex-1 bg-orange-300" />
          <div className="h-full flex-1 bg-orange-300" />
          <div className="h-full flex-1 bg-orange-300" />
          <div className="h-full flex-1 bg-orange-300" />
        </section>

        {/* Product Overview Section */}
        <section className="grid gap-4 bg-pink-500 p-3 md:gap-6 md:p-4 lg:grid-cols-2">
          {/* Left content */}
          <div className="min-h-48 bg-pink-300 md:min-h-64" />
          {/* Right large image/content */}
          <div className="min-h-48 bg-cyan-400 md:min-h-64" />
        </section>
      </div>

      <Suspense fallback={null}>
        <ProductSlugGuard params={params} />
      </Suspense>
    </div>
  );
}
