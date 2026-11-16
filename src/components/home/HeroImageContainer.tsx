import Image from "next/image";

import { Hotspot } from "./Hotspot";

const HOTSPOTS = [
  { id: "sofa", x: 40, y: 56, label: "Modular sofa" },
  { id: "table", x: 49, y: 76, label: "Coffee table" },
  { id: "chair", x: 77, y: 60, label: "Accent chair" },
  { id: "lamp", x: 83, y: 40, label: "Floor lamp" },
] as const;

export function HeroImageContainer() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-primary">
      {/*
        Composition frame keeps the image's 16:9 ratio while always covering
        the hero. Parent overflow crops the left side on smaller viewports.
        Mobile/tablet: right-anchored. Desktop: centered.
      */}
      <div
        className="
          absolute top-1/2 right-0
          h-[max(100%,calc(100vw*9/16))]
          w-[max(100%,calc(100vh*16/9))]
          -translate-y-1/2
          lg:right-auto lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2
        "
      >
        <Image
          src="/images/hero.webp"
          alt="Modern living room with modular sofa"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right lg:object-center"
          draggable={false}
        />

        {HOTSPOTS.map((hotspot) => (
          <Hotspot
            key={hotspot.id}
            x={hotspot.x}
            y={hotspot.y}
            label={hotspot.label}
          />
        ))}
      </div>
    </div>
  );
}
