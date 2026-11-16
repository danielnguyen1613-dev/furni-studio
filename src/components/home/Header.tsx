"use client";

import { Heart, Menu, Search, ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

const SCROLL_THRESHOLD = 8;

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 w-full px-4 py-4 transition-[background-color,backdrop-filter,box-shadow] duration-300 ease-out md:px-8",
        scrolled
          ? "bg-neutral-100/80 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <a
          href="/"
          className={cn(
            "font-heading text-base font-bold transition-colors duration-300 md:text-3xl",
            scrolled ? "text-neutral-900" : "text-white"
          )}
        >
          Luma
        </a>

        <nav
          className={cn(
            "hidden items-center gap-8 transition-colors duration-300 lg:flex",
            scrolled ? "text-neutral-900" : "text-white"
          )}
        >
          <a
            href="#products"
            className="font-sans text-sm font-medium tracking-wide"
          >
            Products
          </a>
          <a
            href="#collections"
            className="font-sans text-sm font-medium tracking-wide"
          >
            Collections
          </a>
          <a
            href="#inspiration"
            className="font-sans text-sm font-medium tracking-wide"
          >
            Inspiration
          </a>
          <a
            href="#about"
            className="font-sans text-sm font-medium tracking-wide"
          >
            About
          </a>
        </nav>

        <div
          className={cn(
            "hidden items-center gap-2 transition-colors duration-300 lg:flex",
            scrolled ? "text-neutral-900" : "text-white"
          )}
        >
          <button
            type="button"
            aria-label="Search"
            className="inline-flex size-10 items-center justify-center"
          >
            <Search className="size-5" strokeWidth={1.75} aria-hidden />
          </button>
          <button
            type="button"
            aria-label="Wishlist"
            className="inline-flex size-10 items-center justify-center"
          >
            <Heart className="size-5" strokeWidth={1.75} aria-hidden />
          </button>
          <button
            type="button"
            aria-label="Cart"
            className="inline-flex size-10 items-center justify-center"
          >
            <ShoppingBag className="size-5" strokeWidth={1.75} aria-hidden />
          </button>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          className="inline-flex size-10 items-center justify-center text-neutral-900 lg:hidden"
        >
          <Menu className="size-6" strokeWidth={1.75} aria-hidden />
        </button>
      </div>
    </header>
  );
}
