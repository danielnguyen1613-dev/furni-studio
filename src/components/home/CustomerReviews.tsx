"use client";

import { ArrowRight, BadgeCheck, Star } from "lucide-react";
import Image from "next/image";
import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const reviews = [
  {
    quote: "Beautiful quality and exactly what we expected from the photos.",
    name: "Sarah M.",
    imageSrc: "/images/reviews/sarah-sofa.webp",
    avatarSrc: "/images/reviews/avatar-sarah.webp",
  },
  {
    quote:
      "The chair is super comfortable and the craftsmanship is excellent. It really elevates the room.",
    name: "David L.",
    imageSrc: "/images/reviews/david-chair.webp",
    avatarSrc: "/images/reviews/avatar-david.webp",
  },
  {
    quote:
      "Delivery was seamless, assembly was easy, and the piece looks amazing in our dining space.",
    name: "Emma T.",
    imageSrc: "/images/reviews/emma-table.webp",
    avatarSrc: "/images/reviews/avatar-emma.webp",
  },
  {
    quote:
      "The lighting transformed our living room. Soft, warm, and exactly the scale we needed.",
    name: "James K.",
    imageSrc: "/images/collections/lighting.webp",
    avatarSrc: "/images/reviews/avatar-james.webp",
  },
  {
    quote:
      "From browsing in 3D to delivery day, the whole experience felt thoughtful and polished.",
    name: "Olivia R.",
    imageSrc: "/images/collections/sofas.webp",
    avatarSrc: "/images/reviews/avatar-olivia.webp",
  },
] as const;

function StarRow({
  className,
  starClassName,
}: {
  className?: string;
  starClassName?: string;
}) {
  return (
    <div className={cn("flex items-center gap-0.5", className)} aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn("size-3.5 fill-[#e0a04a] text-[#e0a04a]", starClassName)}
          strokeWidth={0}
        />
      ))}
    </div>
  );
}

function ReviewCard({
  quote,
  name,
  imageSrc,
  avatarSrc,
}: (typeof reviews)[number]) {
  return (
    <article className="flex h-full gap-3 rounded-2xl bg-surface p-3 shadow-[0_1px_3px_rgb(31_28_25_/_0.06)] ring-1 ring-border/50 sm:gap-4 sm:p-4">
      <div className="relative aspect-square w-[38%] max-w-[9.5rem] shrink-0 overflow-hidden rounded-xl sm:max-w-[10.5rem]">
        <Image
          src={imageSrc}
          alt=""
          fill
          sizes="168px"
          className="object-cover"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col py-0.5">
        <StarRow />
        <p className="mt-2 font-sans text-sm leading-snug font-semibold tracking-tight text-foreground sm:text-[0.9375rem] sm:leading-snug">
          {quote}
        </p>

        <div className="mt-auto flex items-center gap-2.5 pt-4">
          <Image
            src={avatarSrc}
            alt=""
            width={36}
            height={36}
            className="size-9 rounded-full object-cover"
          />
          <div className="min-w-0">
            <p className="font-sans text-sm font-semibold text-foreground">
              {name}
            </p>
            <p className="mt-0.5 flex items-center gap-1 font-sans text-xs text-muted-foreground">
              <BadgeCheck
                className="size-3.5 shrink-0 text-muted-foreground"
                strokeWidth={1.75}
                aria-hidden
              />
              Verified Buyer
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export function CustomerReviews() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [selected, setSelected] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

  React.useEffect(() => {
    if (!api) return;

    const onSelect = () => setSelected(api.selectedScrollSnap());
    const onReInit = () => {
      setScrollSnaps(api.scrollSnapList());
      onSelect();
    };

    onReInit();
    api.on("select", onSelect);
    api.on("reInit", onReInit);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onReInit);
    };
  }, [api]);

  return (
    <section
      id="reviews"
      className="w-full scroll-mt-24 bg-background px-4 py-14 md:px-8 md:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-6 md:mb-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="font-sans text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">
              Customer Reviews
            </p>
            <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              What Our Customers Say
            </h2>
            <p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground md:text-[0.9375rem]">
              Real stories from people who bring Luma into their homes.
            </p>
          </div>

          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-5">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading text-3xl font-semibold tracking-tight text-foreground">
                  4.8
                </span>
                <StarRow starClassName="size-4" />
              </div>
              <p className="mt-1 font-sans text-xs text-muted-foreground">
                from 1,452 reviews
              </p>
            </div>

            <a
              href="#reviews"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/85 px-5 py-2.5 font-sans text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-primary-foreground"
            >
              Write a Review
              <ArrowRight className="size-4" strokeWidth={1.75} aria-hidden />
            </a>
          </div>
        </div>

        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: false,
            containScroll: "trimSnaps",
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4 md:-ml-5">
            {reviews.map((review) => (
              <CarouselItem
                key={review.name}
                className="pl-4 basis-[85%] sm:basis-[55%] md:basis-[45%] lg:basis-1/3 md:pl-5"
              >
                <ReviewCard {...review} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {scrollSnaps.length > 1 ? (
          <div
            className="mt-8 flex items-center justify-center gap-2"
            role="tablist"
            aria-label="Review slides"
          >
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                type="button"
                role="tab"
                aria-selected={selected === index}
                aria-label={`Go to review group ${index + 1}`}
                onClick={() => api?.scrollTo(index)}
                className={cn(
                  "size-2 rounded-full transition-colors",
                  selected === index
                    ? "bg-foreground"
                    : "bg-foreground/25 hover:bg-foreground/40"
                )}
              />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
