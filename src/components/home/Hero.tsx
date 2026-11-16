"use client";

import { ArrowRight, MoveLeft, MoveRight, Play } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { HERO_SLIDES } from "@/config/hero";

import { Header } from "./Header";
import { HeroHotspots, HeroImageContainer } from "./HeroImageContainer";
import { HeroLightStreaks } from "./HeroLightStreaks";

export function Hero() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    api.on("reInit", onSelect);
    const frame = requestAnimationFrame(onSelect);

    return () => {
      cancelAnimationFrame(frame);
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
          align: "start",
          duration: 40,
        }}
        className="absolute inset-0 h-full w-full [&_[data-slot=carousel-content]]:absolute [&_[data-slot=carousel-content]]:inset-0 [&_[data-slot=carousel-content]]:h-full [&_[data-slot=carousel-content]>div]:h-full"
      >
        {/* Sliding layer: image + readability gradient + per-slide hotspots */}
        <CarouselContent className="-ml-0 h-full">
          {HERO_SLIDES.map((slide, index) => (
            <CarouselItem
              key={slide.id}
              className="relative h-full min-h-0 basis-full pl-0"
            >
              <HeroImageContainer slide={slide} priority={index === 0} />

              {/* Same gradient as before — per slide so hotspots stay above it */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(0,0,0,0.62)_0%,rgba(0,0,0,0.38)_28%,rgba(0,0,0,0.14)_55%,transparent_78%)] md:bg-[linear-gradient(90deg,rgba(0,0,0,0.58)_0%,rgba(0,0,0,0.34)_30%,rgba(0,0,0,0.1)_60%,transparent_100%)]"
              />

              <HeroHotspots slide={slide} />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Fixed chrome — unchanged visual layer */}
        <HeroLightStreaks />

        <Header />

        {/* Wireframe content overlays */}
        <div className="pointer-events-none absolute inset-0 z-10 flex h-full flex-col justify-between px-4 pb-6 pt-24 md:px-8 md:pb-8 md:pt-28">
          <div className="mx-auto grid w-full max-w-7xl items-start gap-4 lg:grid-cols-[minmax(220px,1fr)_minmax(0,2fr)] lg:gap-6">
            <div className="pointer-events-auto flex flex-col justify-start gap-3 self-start pt-2 text-primary-foreground md:pt-4">
              <p className="font-sans text-xs font-medium uppercase tracking-[0.38em] text-primary-foreground md:text-xs">
                Modern Furniture
              </p>
              <h1 className="font-sans text-2xl font-light uppercase text-primary-foreground sm:text-3xl md:text-6xl">
                Design
                <br />
                Your Space
              </h1>
              <p className="mt-1 max-w-sm text-sm font-normal leading-relaxed text-primary-foreground/80 sm:mt-2 sm:text-base md:max-w-[280px]">
                Contemporary furniture for the way you live, in 3D and in your
                home.
              </p>
              <div className="mt-6 flex flex-col items-start gap-4 sm:mt-8 sm:flex-row sm:items-center sm:gap-8">
                <Button
                  size="lg"
                  nativeButton={false}
                  render={<a href="#products" />}
                  className="h-10 gap-2 rounded-full border-transparent bg-primary-foreground px-6 pr-5 font-sans text-sm font-medium tracking-wide text-primary hover:bg-primary-foreground/90 sm:h-11 sm:px-7 sm:pr-6 sm:text-sm"
                >
                  Explore Products
                  <ArrowRight className="size-4" aria-hidden />
                </Button>
                <a
                  href="#see-in-3d"
                  className="inline-flex items-center gap-3 font-sans text-sm font-medium tracking-wide text-primary-foreground/90 transition-opacity duration-300 hover:opacity-70 sm:text-sm"
                >
                  <span className="inline-flex size-8 items-center justify-center rounded-full bg-primary-foreground/15 ring-1 ring-primary-foreground/40 backdrop-blur-sm sm:size-9">
                    <Play
                      className="size-3 fill-primary-foreground text-primary-foreground sm:size-3.5"
                      aria-hidden
                    />
                  </span>
                  See in Action
                </a>
              </div>
            </div>
          </div>

          <div className="pointer-events-auto mx-auto mt-4 flex w-full max-w-7xl items-center justify-between gap-4 py-3 text-primary-foreground">
            <div className="flex items-center gap-6 font-sans text-sm tracking-wide">
              {HERO_SLIDES.map((slide, index) => {
                const isActive = index === current;
                return (
                  <button
                    key={slide.id}
                    type="button"
                    aria-label={`Slide ${slide.label}`}
                    aria-current={isActive ? "true" : undefined}
                    onClick={() => api?.scrollTo(index)}
                    className={
                      isActive
                        ? "border-b-2 border-primary-foreground px-2 pb-2 font-medium text-primary-foreground"
                        : "border-b-2 border-transparent px-2 pb-2 font-medium text-primary-foreground/50 transition-colors hover:text-primary-foreground/80"
                    }
                  >
                    {slide.label}
                  </button>
                );
              })}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                aria-label="Previous slide"
                onClick={() => api?.scrollPrev()}
                className="inline-flex size-9 items-center justify-center rounded-full bg-primary/55 text-primary-foreground backdrop-blur-md transition-colors hover:bg-primary/70"
              >
                <MoveLeft className="size-4" strokeWidth={1.75} aria-hidden />
              </button>
              <button
                type="button"
                aria-label="Next slide"
                onClick={() => api?.scrollNext()}
                className="inline-flex size-9 items-center justify-center rounded-full bg-primary/55 text-primary-foreground backdrop-blur-md transition-colors hover:bg-primary/70"
              >
                <MoveRight className="size-4" strokeWidth={1.75} aria-hidden />
              </button>
            </div>
          </div>
        </div>
      </Carousel>
    </section>
  );
}
