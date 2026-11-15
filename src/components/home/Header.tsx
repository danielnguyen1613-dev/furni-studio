export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 w-full bg-neutral-300/90 px-4 py-4 md:px-8">
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
