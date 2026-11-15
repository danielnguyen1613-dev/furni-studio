type HotspotProps = {
  x: number;
  y: number;
  label: string;
};

export function Hotspot({ x, y, label }: HotspotProps) {
  return (
    <button
      type="button"
      aria-label={label}
      className="absolute z-10 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.15),0_2px_8px_rgba(0,0,0,0.28)] md:size-3.5"
      style={{ left: `${x}%`, top: `${y}%` }}
    />
  );
}
