"use client";

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
      <div className="mx-auto flex max-w-7xl flex-col gap-3 md:flex-row md:items-center md:justify-between md:gap-4">
        <div className="bg-neutral-400 px-4 py-2 text-sm font-medium">Logo</div>

        <nav className="flex flex-wrap items-center gap-2 md:gap-4">
          <div className="bg-neutral-400 px-3 py-2 text-sm">Products</div>
          <div className="bg-neutral-400 px-3 py-2 text-sm">Collections</div>
          <div className="bg-neutral-400 px-3 py-2 text-sm">Inspiration</div>
          <div className="bg-neutral-400 px-3 py-2 text-sm">About</div>
        </nav>

        <div className="flex items-center gap-2">
          <div className="bg-neutral-400 px-3 py-2 text-sm">Search</div>
          <div className="bg-neutral-400 px-3 py-2 text-sm">Wishlist</div>
          <div className="bg-neutral-400 px-3 py-2 text-sm">Cart</div>
        </div>
      </div>
    </header>
  );
}
