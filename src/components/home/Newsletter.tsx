"use client";

import { ArrowRight, Mail } from "lucide-react";
import Image from "next/image";
import { useState, type FormEvent } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  }

  return (
    <section
      id="newsletter"
      className="w-full scroll-mt-24 bg-background px-4 py-14 md:px-8 md:py-16"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-14">
        <div className="max-w-md">
          <p className="font-sans text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">
            Stay in the Loop
          </p>
          <h2 className="mt-2 font-heading text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            Get New Collections & Inspiration
          </h2>
          <p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground">
            Be the first to know about new arrivals, design ideas and exclusive
            offers.
          </p>

          {submitted ? (
            <p
              className="mt-6 font-sans text-sm font-medium text-foreground"
              role="status"
            >
              Thanks — you&apos;re on the list.
            </p>
          ) : (
            <form
              onSubmit={onSubmit}
              className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <label className="relative block min-w-0 flex-1">
                <span className="sr-only">Email address</span>
                <Mail
                  className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted-foreground"
                  strokeWidth={1.75}
                  aria-hidden
                />
                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-11 w-full rounded-full border border-border bg-surface pr-4 pl-11 font-sans text-sm text-foreground outline-none placeholder:text-muted-foreground focus-visible:border-foreground/40 focus-visible:ring-2 focus-visible:ring-foreground/15"
                />
              </label>
              <button
                type="submit"
                className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-5 font-sans text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Subscribe
                <ArrowRight className="size-4" strokeWidth={1.75} aria-hidden />
              </button>
            </form>
          )}
        </div>

        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl md:aspect-[5/3]">
          <Image
            src="/images/newsletter.webp"
            alt="Sunlit living room with wooden coffee table and cream sofa"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
