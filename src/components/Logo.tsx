import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  href?: string;
};

export function Logo({ className, href = "/" }: LogoProps) {
  return (
    <a
      href={href}
      className={cn(
        "font-heading text-3xl font-bold transition-colors duration-300",
        className
      )}
    >
      Luma
    </a>
  );
}
