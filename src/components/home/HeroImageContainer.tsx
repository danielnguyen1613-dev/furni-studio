import Image from "next/image";
import type { ReactNode } from "react";

import { Hotspot } from "./Hotspot";

/**
 * Percentage coordinates relative to the original hero image (1672×941).
 * x/y are % of image width/height from the top-left — not the viewport.
 */
const HOTSPOTS = [
  {
    id: "sofa",
    x: 44.0,
    y: 46.0,
    label: "Modular sofa",
    viewIn3d: true,
    href: "#see-in-3d",
  },
  { id: "table", x: 51.0, y: 76.0, label: "Coffee table" },
  { id: "chair", x: 87.5, y: 62.2, label: "Accent chair" },
  { id: "lamp", x: 80.0, y: 24.0, label: "Floor lamp" },
] as const;

/** Shared image-aspect cover frame — crops with the hero image. */
function HeroCoverFrame({ children }: { children: ReactNode }) {
  return (
    <div
      className="
        absolute top-1/2 right-0
        h-[max(100%,calc(100vw*941/1672))]
        w-[max(100%,calc(100vh*1672/941))]
        -translate-y-1/2
        lg:right-auto lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2
      "
    >
      <div className="relative h-full w-full">{children}</div>
    </div>
  );
}

export function HeroImageContainer() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-primary">
      <HeroCoverFrame>
        <Image
          src="/images/hero.webp"
          alt="Modern living room with modular sofa"
          fill
          priority
          sizes="100vw"
          className="object-fill"
          draggable={false}
        />
      </HeroCoverFrame>
    </div>
  );
}

/** Same coordinate system as the hero image; sits above overlays so cards stay crisp. */
export function HeroHotspots() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[5] overflow-hidden">
      <HeroCoverFrame>
        <div className="absolute inset-0">
            {HOTSPOTS.map((hotspot) => (
              <Hotspot
                key={hotspot.id}
                x={hotspot.x}
                y={hotspot.y}
                label={hotspot.label}
                viewIn3d={"viewIn3d" in hotspot ? hotspot.viewIn3d : undefined}
                href={"href" in hotspot ? hotspot.href : undefined}
              />
            ))}
        </div>
      </HeroCoverFrame>
    </div>
  );
}
