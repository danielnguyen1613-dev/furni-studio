import Image from "next/image";

type CollectionCardProps = {
  title: string;
  imageSrc: string;
  href?: string;
};

export function CollectionCard({
  title,
  imageSrc,
  href = "#",
}: CollectionCardProps) {
  return (
    <a
      href={href}
      className="group relative block aspect-[5/4] overflow-hidden rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <Image
        src={imageSrc}
        alt={title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/45 via-black/15 to-transparent"
      />
      <span className="absolute bottom-4 left-4 font-sans text-base font-medium tracking-wide text-white md:bottom-5 md:left-5">
        {title}
      </span>
    </a>
  );
}
