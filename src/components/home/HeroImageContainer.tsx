import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";

import { HERO_IMAGE_SIZE, type HeroSlide } from "@/config/hero";

import { Hotspot } from "./Hotspot";

const { width: HERO_W, height: HERO_H } = HERO_IMAGE_SIZE;

/** Shared image-aspect cover frame — crops with the hero image. */
function HeroCoverFrame({ children }: { children: ReactNode }) {
  return (
    <div
      className="
        absolute top-1/2 right-0
        h-[max(100%,calc(100vw*var(--hero-h)/var(--hero-w)))]
        w-[max(100%,calc(100vh*var(--hero-w)/var(--hero-h)))]
        -translate-y-1/2
        lg:right-auto lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2
      "
      style={
        {
          "--hero-w": HERO_W,
          "--hero-h": HERO_H,
        } as CSSProperties
      }
    >
      <div className="relative h-full w-full">{children}</div>
    </div>
  );
}

type HeroImageContainerProps = {
  slide: HeroSlide;
  priority?: boolean;
};

export function HeroImageContainer({
  slide,
  priority = false,
}: HeroImageContainerProps) {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-primary">
      <HeroCoverFrame>
        <Image
          src={slide.src}
          alt={slide.alt}
          fill
          priority={priority}
          sizes="100vw"
          className="object-fill"
          quality={95}
          draggable={false}
        />
      </HeroCoverFrame>
    </div>
  );
}

type HeroHotspotsProps = {
  slide: HeroSlide;
};

/** Same coordinate system as the hero image; sits above overlays so cards stay crisp. */
export function HeroHotspots({ slide }: HeroHotspotsProps) {
  const hotspots = slide.hotspots ?? [];

  if (hotspots.length === 0) return null;

  return (
    <div className="pointer-events-none absolute inset-0 z-[5] overflow-hidden">
      <HeroCoverFrame>
        <div className="absolute inset-0">
          {hotspots.map((hotspot) => (
            <Hotspot
              key={hotspot.id}
              x={hotspot.x}
              y={hotspot.y}
              label={hotspot.label}
              viewIn3d={hotspot.viewIn3d}
              href={hotspot.href}
            />
          ))}
        </div>
      </HeroCoverFrame>
    </div>
  );
}
