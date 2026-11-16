export type HeroHotspot = {
  id: string;
  /** Percent of image width from the left. */
  x: number;
  /** Percent of image height from the top. */
  y: number;
  /** Product name shown via hotspot aria-label / card. */
  label: string;
  /** Optional price label for future card UI. */
  price?: string;
  viewIn3d?: boolean;
  href?: string;
};

export type HeroSlide = {
  id: string;
  /** Zero-padded slide label shown in the pager (01, 02, …). */
  label: string;
  src: string;
  alt: string;
  /** Per-slide product hotspots (positions are % of the hero image). */
  hotspots?: readonly HeroHotspot[];
};

/** Intrinsic size of hero-1/2/3.webp — used for cover-frame aspect math. */
export const HERO_IMAGE_SIZE = {
  width: 1920,
  height: 1080,
} as const;

export const HERO_SLIDES: readonly HeroSlide[] = [
  {
    id: "hero-1",
    label: "01",
    src: "/images/hero-1.webp",
    alt: "Modern living room with modular sofa",
    hotspots: [
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
    ],
  },
  {
    id: "hero-2",
    label: "02",
    src: "/images/hero-2.webp",
    alt: "Contemporary furniture scene",
    hotspots: [
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
    ],
  },
  {
    id: "hero-3",
    label: "03",
    src: "/images/hero-3.webp",
    alt: "Styled interior with furniture accents",
    hotspots: [
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
    ],
  },
] as const;
