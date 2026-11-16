export function HeroLightStreaks() {
  return (
    <div
      aria-hidden
      className="hero-light-streaks pointer-events-none absolute inset-0 z-[2] overflow-hidden"
    >
      <div className="hero-sunbeam">
        <span className="hero-sunbeam__streak hero-sunbeam__streak--wide" />
        <span className="hero-sunbeam__streak hero-sunbeam__streak--thin" />
      </div>
    </div>
  );
}
