type HotspotProps = {
  /** Percent of image width from the left (image coordinate system). */
  x: number;
  /** Percent of image height from the top (image coordinate system). */
  y: number;
  label: string;
  /** When true, shows the “Click to view in 3D” tip above the dot. */
  viewIn3d?: boolean;
  href?: string;
};

export function Hotspot({
  x,
  y,
  label,
  viewIn3d,
  href = "#see-in-3d",
}: HotspotProps) {
  return (
    <div
      className="pointer-events-auto absolute z-10 -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      {viewIn3d ? (
        <div
          className="
            pointer-events-auto absolute left-1/2 z-20 flex -translate-x-1/2 flex-col items-center
            top-full mt-2
            lg:top-auto lg:bottom-full lg:mt-0 lg:mb-2
          "
        >
          <a
            href={href}
            className="relative block max-w-[9rem] -rotate-[2.5deg] rounded-[2px] bg-[#faf8f5] px-2.5 py-2 text-center font-heading text-[0.625rem] font-medium leading-snug tracking-[0.01em] text-[#2b241e] shadow-[1px_2px_0_rgba(43,36,30,0.04),0_10px_28px_rgba(43,36,30,0.16)] transition-transform duration-300 hover:-translate-y-0.5 hover:-rotate-1 sm:text-[0.6875rem]"
          >
            {/* Washi tape */}
            <span
              aria-hidden
              className="absolute -top-2 left-1/2 h-3 w-9 -translate-x-1/2 rotate-[3deg] rounded-[1px] bg-[#e8e0d8]/80 shadow-[0_1px_2px_rgba(43,36,30,0.08)] ring-1 ring-[#2b241e]/6"
            />
            Click to view in 3D
          </a>
        </div>
      ) : null}

      <button
        type="button"
        aria-label={label}
        className="hotspot relative flex size-10 items-center justify-center border-0 bg-transparent p-0 md:size-11"
      >
        <span className="relative z-[1] size-3 rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.28)] md:size-3.5" />
      </button>
    </div>
  );
}
