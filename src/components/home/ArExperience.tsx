import { ArrowRight, Box } from "lucide-react";
import Image from "next/image";
import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { strokeWidth?: number };

function ArScanIcon({ className, strokeWidth = 1.5, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
      {...props}
    >
      <path d="M7 3H5a2 2 0 0 0-2 2v2" />
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
      <path d="M17 21h2a2 2 0 0 0 2-2v-2" />
      <text
        x="12"
        y="15.5"
        textAnchor="middle"
        fill="currentColor"
        stroke="none"
        fontSize="8.5"
        fontWeight="600"
        fontFamily="var(--font-plus-jakarta), sans-serif"
      >
        AR
      </text>
    </svg>
  );
}

function ScanFrameIcon({ className, strokeWidth = 1.75, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
      {...props}
    >
      <path d="M7 3H5a2 2 0 0 0-2 2v2" />
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
      <path d="M17 21h2a2 2 0 0 0 2-2v-2" />
      <rect x="8" y="8" width="8" height="8" rx="1" />
    </svg>
  );
}

const highlights = [
  {
    title: "Explore in 3D",
    description: "Rotate, zoom, and view every detail.",
    icon: Box,
  },
  {
    title: "Try in Your Space",
    description: "Use AR to see it in your home.",
    icon: ArScanIcon,
  },
] as const;

export function ArExperience() {
  return (
    <section
      id="see-in-3d"
      className="relative w-full scroll-mt-24 overflow-hidden bg-background px-4 py-14 md:px-8 md:py-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgb(107_142_90_/_0.14)_0%,transparent_68%)] md:h-80 md:w-80"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-16 -right-10 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgb(168_149_130_/_0.16)_0%,transparent_70%)] md:h-72 md:w-72"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)] lg:gap-12 xl:gap-16">
        <div className="max-w-lg">
          <p className="font-sans text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">
            3D / AR Experience
          </p>
          <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            See It Before You Buy
          </h2>
          <p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground md:text-[0.9375rem]">
            Explore furniture in interactive 3D and place it in your space with
            AR to find the perfect fit.
          </p>

          <ul className="mt-8 space-y-5">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.title} className="flex items-start gap-3.5">
                  <Icon
                    className="mt-0.5 size-6 shrink-0 text-foreground"
                    strokeWidth={1.5}
                  />
                  <div className="min-w-0">
                    <h3 className="font-sans text-sm font-semibold tracking-tight text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-0.5 font-sans text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-sans text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              View in 3D
              <ArrowRight className="size-4" strokeWidth={1.75} aria-hidden />
            </a>
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/85 px-5 py-2.5 font-sans text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-primary-foreground"
            >
              <ScanFrameIcon className="size-4" />
              Try AR
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <Image
            src="/images/ar-experience-devices.webp"
            alt="Luma AR and 3D furniture viewer on phone and laptop"
            width={1400}
            height={1010}
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="h-auto w-full object-contain"
            priority={false}
          />
        </div>
      </div>
    </section>
  );
}
