"use client";

import { Heart, Menu, Search, ShoppingBag, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Logo } from "@/components/Logo";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { cn } from "@/lib/utils";

const SCROLL_THRESHOLD = 8;

const NAV_LINKS = [
  { href: "#products", label: "Products" },
  { href: "#collections", label: "Collections" },
  { href: "#inspiration", label: "Inspiration" },
  { href: "#about", label: "About" },
] as const;

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
        <Logo className={scrolled ? "text-neutral-900" : "text-white"} />

        <nav
          className={cn(
            "hidden items-center gap-8 transition-colors duration-300 lg:flex",
            scrolled ? "text-neutral-900" : "text-white"
          )}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-sm font-medium tracking-wide"
            >
              {link.label}
            </a>
          ))}
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

        <Drawer swipeDirection="right">
          <DrawerTrigger
            render={
              <button
                type="button"
                aria-label="Open menu"
                className={cn(
                  "inline-flex size-10 items-center justify-center transition-colors duration-300 lg:hidden",
                  scrolled ? "text-neutral-900" : "text-white"
                )}
              />
            }
          >
            <Menu className="size-6" strokeWidth={1.75} aria-hidden />
          </DrawerTrigger>

          <DrawerContent className="h-dvh w-[min(100%,20rem)] rounded-none border-0 bg-background data-[swipe-direction=right]:rounded-none sm:w-80">
            <DrawerHeader className="flex flex-row items-center justify-between gap-4 p-6 text-left">
              <div>
                <DrawerTitle className="sr-only">Luma</DrawerTitle>
                <Logo className="text-foreground" />
                <DrawerDescription className="sr-only">
                  Mobile navigation
                </DrawerDescription>
              </div>
              <DrawerClose
                render={
                  <button
                    type="button"
                    aria-label="Close menu"
                    className="inline-flex size-10 items-center justify-center text-neutral-900"
                  />
                }
              >
                <X className="size-5" strokeWidth={1.75} aria-hidden />
              </DrawerClose>
            </DrawerHeader>

            <nav className="flex flex-1 flex-col gap-1 px-6 py-10">
              {NAV_LINKS.map((link) => (
                <DrawerClose
                  key={link.href}
                  nativeButton={false}
                  render={
                    <a
                      href={link.href}
                      className="font-heading py-4 text-base font-light tracking-wide text-foreground transition-opacity hover:opacity-60"
                    />
                  }
                >
                  {link.label}
                </DrawerClose>
              ))}
            </nav>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  );
}
