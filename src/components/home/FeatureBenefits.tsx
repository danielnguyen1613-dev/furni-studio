import { Box, SlidersHorizontal, Truck } from "lucide-react";
import type { ComponentType, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { strokeWidth?: number };

function ArIcon({ className, strokeWidth = 1.5, ...props }: IconProps) {
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

const features: {
  title: string;
  description: string;
  icon: ComponentType<IconProps>;
}[] = [
  {
    title: "Interactive 3D",
    description: "Explore every detail in 3D.",
    icon: Box,
  },
  {
    title: "View in Your Space",
    description: "See it at home with AR.",
    icon: ArIcon,
  },
  {
    title: "Customize",
    description: "Materials, colors, and size.",
    icon: SlidersHorizontal,
  },
  {
    title: "Delivered to You",
    description: "From our studio to your home.",
    icon: Truck,
  },
];

export function FeatureBenefits() {
  return (
    <section className="w-full bg-background px-4 py-12 md:px-8 md:py-14">
      <ul className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <li key={feature.title} className="flex items-start gap-4">
              <Icon
                className="mt-0.5 size-8 shrink-0 text-foreground"
                strokeWidth={1.5}
                aria-hidden
              />
              <div className="min-w-0">
                <h3 className="font-sans text-sm font-semibold tracking-tight text-foreground md:text-[0.9375rem]">
                  {feature.title}
                </h3>
                <p className="mt-0.5 font-sans text-xs text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
