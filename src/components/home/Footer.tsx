import { ArrowRight } from "lucide-react";
import Image from "next/image";
import type { SVGProps } from "react";

import { Logo } from "@/components/Logo";

type IconProps = SVGProps<SVGSVGElement>;

function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function PinterestIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5c-2.2 0-3.5 1.4-3.5 3.2 0 1.5.7 2.5 2.2 2.5.4 0 .8-.1 1-.4l.4-1.5.3-1.1c.1-.4.4-.6.8-.6.6 0 1 .5 1 1.4 0 1.6-1 2.9-2.5 2.9-.5 0-1-.1-1.4-.3" />
      <path d="M11.2 14.2 10 18.5" />
    </svg>
  );
}

function XIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path d="M6 6h2.4L18 18h-2.4L6 6Z" />
      <path d="M18 6h-2.2L6 18h2.2L18 6Z" />
    </svg>
  );
}

function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v6h3v-6h2.5l.5-3H13v-1.5c0-.3.2-.5.5-.5Z" />
      <circle cx="12" cy="12" r="9" />
    </svg>
  );
}

function YouTubeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <rect x="3" y="6" width="18" height="12" rx="3" />
      <path d="m10 9.5 5 2.5-5 2.5v-5Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

const socialLinks = [
  { label: "Instagram", href: "#", icon: InstagramIcon },
  { label: "Pinterest", href: "#", icon: PinterestIcon },
  { label: "X", href: "#", icon: XIcon },
  { label: "Facebook", href: "#", icon: FacebookIcon },
  { label: "YouTube", href: "#", icon: YouTubeIcon },
] as const;

const linkColumns = [
  {
    title: "Shop",
    links: [
      { label: "Sofas", href: "#collections-sofas" },
      { label: "Chairs", href: "#collections-chairs" },
      { label: "Tables", href: "#collections-tables" },
      { label: "Lighting", href: "#collections-lighting" },
      { label: "Collections", href: "#collections" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Inspiration", href: "#inspiration" },
      { label: "3D & AR", href: "#see-in-3d" },
      { label: "About", href: "#about" },
      { label: "Journal", href: "#journal" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact", href: "#contact" },
      { label: "Shipping", href: "#shipping" },
      { label: "Returns", href: "#returns" },
      { label: "FAQ", href: "#faq" },
    ],
  },
] as const;

const legalLinks = [
  { label: "Privacy Policy", href: "#privacy" },
  { label: "Terms of Service", href: "#terms" },
  { label: "Shipping & Returns", href: "#shipping" },
] as const;

export function Footer() {
  return (
    <footer className="w-full border-t border-border/70 bg-background px-4 pt-12 pb-8 md:px-8 md:pt-16 md:pb-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,2fr)_minmax(12rem,0.9fr)] lg:gap-12 xl:gap-16">
          <div>
            <Logo className="text-foreground" />
            <p className="mt-3 max-w-xs font-sans text-sm leading-relaxed text-muted-foreground">
              Modern furniture for a more inspired living.
            </p>
            <ul className="mt-6 flex flex-wrap items-center gap-2.5">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    className="inline-flex size-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-foreground/50 hover:bg-muted"
                  >
                    <Icon className="size-4" aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-8 border-border/70 sm:grid-cols-3 sm:gap-6 lg:border-l lg:pl-10 xl:pl-14">
            {linkColumns.map((column) => (
              <div key={column.title}>
                <h3 className="font-sans text-sm font-semibold tracking-tight text-foreground">
                  {column.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="font-sans text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <a
            href="#inspiration"
            className="group relative block aspect-[5/4] overflow-hidden rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <Image
              src="/images/footer-cta.webp"
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 280px"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent"
            />
            <span className="absolute bottom-4 left-4 max-w-[9rem] font-sans text-sm font-medium leading-snug text-white">
              Explore Our Design World
            </span>
            <span className="absolute right-4 bottom-4 inline-flex size-9 items-center justify-center rounded-full bg-white/90 text-foreground transition-transform duration-300 group-hover:translate-x-0.5">
              <ArrowRight className="size-4" strokeWidth={1.75} aria-hidden />
            </span>
          </a>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border/70 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-sans text-xs text-muted-foreground">
            © 2026 Luma. All rights reserved.
          </p>
          <nav
            aria-label="Legal"
            className="flex flex-wrap items-center gap-x-3 gap-y-1 font-sans text-xs text-muted-foreground"
          >
            {legalLinks.map((link, index) => (
              <span key={link.label} className="inline-flex items-center gap-3">
                {index > 0 ? (
                  <span aria-hidden className="text-border">
                    |
                  </span>
                ) : null}
                <a
                  href={link.href}
                  className="transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </span>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
