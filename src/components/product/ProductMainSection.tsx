import { Product3DViewer } from "@/components/product/Product3DViewer";

export function ProductMainSection() {
  return (
    <section className="grid gap-4 md:gap-6 lg:grid-cols-2">
      {/* Product Media Area */}
      <div className="flex flex-col gap-3 bg-yellow-400 p-3 md:gap-4 md:p-4">
        <Product3DViewer />
        <div className="grid grid-cols-4 gap-2 md:gap-3">
          <div className="aspect-square bg-cyan-300" />
          <div className="aspect-square bg-cyan-300" />
          <div className="aspect-square bg-cyan-300" />
          <div className="aspect-square bg-cyan-300" />
        </div>
      </div>

      {/* Product Information Area */}
      <div className="flex flex-col gap-3 bg-green-500 p-3 md:gap-4 md:p-4">
        <div className="min-h-24 flex-1 bg-green-300 md:min-h-32" />
        <div className="min-h-28 bg-green-400 md:min-h-36" />
        <div className="min-h-16 bg-green-600 md:min-h-20" />
      </div>
    </section>
  );
}
