import Image from "next/image";

import { Header } from "./Header";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-violet-500">
      {/* Hero image — covers entire hero */}
      <Image
        src="/images/hero.jpg"
        alt="Modern living room with modular sofa"
        fill
        priority
        sizes="100vw"
        className="z-0 object-cover"
      />

      {/* Header overlays the image — no extra vertical space */}
      <Header />

      {/* Wireframe content overlays */}
      <div className="relative z-10 flex h-full flex-col justify-between px-4 pb-6 pt-24 md:px-8 md:pb-8 md:pt-28">
        <div className="mx-auto grid h-full w-full max-w-7xl gap-4 lg:grid-cols-[minmax(220px,1fr)_minmax(0,2fr)] lg:gap-6">
          <div className="flex max-h-full flex-col justify-center gap-3 self-center bg-sky-700/95 p-4 text-white sm:p-6 md:p-8">
            <div className="bg-sky-800 px-3 py-2 text-xs uppercase tracking-wide">
              Eyebrow / Category
            </div>
            <div className="bg-sky-800 px-3 py-3 text-base font-semibold sm:py-4 sm:text-lg md:text-2xl">
              Main Headline
            </div>
            <div className="bg-sky-800 px-3 py-2 text-xs sm:py-3 sm:text-sm">
              Supporting description placeholder
            </div>
            <div className="mt-1 flex flex-wrap gap-2 sm:mt-2">
              <div className="bg-sky-900 px-3 py-2 text-sm sm:px-4">Primary CTA</div>
              <div className="bg-sky-800 px-3 py-2 text-sm sm:px-4">Secondary CTA</div>
            </div>
          </div>

          <div className="relative min-h-0 flex-1">
            <div className="absolute right-2 top-[20%] w-[min(100%-1rem,200px)] bg-violet-800/95 p-3 text-white sm:right-4 md:right-8 md:w-[220px]">
              <div className="mb-2 h-12 bg-violet-600 text-center text-xs leading-[3rem] sm:h-16 sm:leading-[4rem]">
                Product Thumb
              </div>
              <div className="bg-violet-700 px-2 py-1 text-sm">Product Name</div>
              <div className="mt-1 bg-violet-700 px-2 py-1 text-xs">Price</div>
              <div className="mt-2 bg-violet-900 px-2 py-1 text-xs">View Product</div>
            </div>

            <div className="absolute left-1/3 top-1/2 size-3 rounded-full bg-white sm:size-4" />
            <div className="absolute bottom-1/3 left-1/2 size-3 rounded-full bg-white sm:size-4" />
            <div className="absolute right-1/3 top-1/4 size-3 rounded-full bg-white sm:size-4" />
          </div>
        </div>

        <div className="mx-auto mt-4 flex w-full max-w-7xl items-center justify-between gap-4 bg-violet-700/80 px-4 py-3 text-white">
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
    </section>
  );
}
