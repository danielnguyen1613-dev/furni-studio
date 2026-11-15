export function Hero() {
  return (
    <section className="w-full bg-sky-400 px-4 py-6 md:px-8 md:py-8">
      <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-[minmax(240px,1fr)_minmax(0,2fr)] lg:gap-6">
        {/* Left content block */}
        <div className="flex flex-col justify-center gap-3 bg-sky-700 p-6 text-white md:p-8">
          <div className="bg-sky-800 px-3 py-2 text-xs uppercase tracking-wide">
            Eyebrow / Category
          </div>
          <div className="bg-sky-800 px-3 py-4 text-lg font-semibold md:text-2xl">
            Main Headline
          </div>
          <div className="bg-sky-800 px-3 py-3 text-sm">
            Supporting description placeholder
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            <div className="bg-sky-900 px-4 py-2 text-sm">Primary CTA</div>
            <div className="bg-sky-800 px-4 py-2 text-sm">Secondary CTA</div>
          </div>
        </div>

        {/* Main visual / image area */}
        <div className="relative flex min-h-[280px] flex-col bg-violet-500 md:min-h-[420px]">
          <div className="flex flex-1 items-center justify-center p-4 text-sm text-white">
            Hero Visual / Image Placeholder
          </div>

          {/* Product hotspot / card area */}
          <div className="absolute right-4 top-1/3 w-[min(100%-2rem,220px)] bg-violet-800 p-3 text-white shadow-sm md:right-8">
            <div className="mb-2 h-16 bg-violet-600 text-center text-xs leading-[4rem]">
              Product Thumb
            </div>
            <div className="bg-violet-700 px-2 py-1 text-sm">Product Name</div>
            <div className="mt-1 bg-violet-700 px-2 py-1 text-xs">Price</div>
            <div className="mt-2 bg-violet-900 px-2 py-1 text-xs">View Product</div>
          </div>

          {/* Hotspot markers (structural only) */}
          <div className="absolute left-1/3 top-1/2 size-4 rounded-full bg-white" />
          <div className="absolute bottom-1/3 left-1/2 size-4 rounded-full bg-white" />
          <div className="absolute right-1/3 top-1/4 size-4 rounded-full bg-white" />

          {/* Hero navigation indicators */}
          <div className="mt-auto flex items-center justify-between gap-4 bg-violet-700/80 px-4 py-3 text-white">
            <div className="flex gap-2 text-sm">
              <span className="bg-violet-900 px-2 py-1 underline">01</span>
              <span className="bg-violet-800 px-2 py-1">02</span>
              <span className="bg-violet-800 px-2 py-1">03</span>
            </div>
            <div className="flex gap-2">
              <div className="bg-violet-900 px-3 py-1 text-sm">Prev</div>
              <div className="bg-violet-900 px-3 py-1 text-sm">Next</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
