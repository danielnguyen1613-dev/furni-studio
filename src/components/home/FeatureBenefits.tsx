const features = [
  { title: "Interactive 3D", description: "Benefit description" },
  { title: "View in Your Space", description: "Benefit description" },
  { title: "Customize", description: "Benefit description" },
  { title: "Delivered to You", description: "Benefit description" },
] as const;

export function FeatureBenefits() {
  return (
    <section className="w-full bg-emerald-400 px-4 py-8 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col gap-2 bg-emerald-600 p-4 text-white"
          >
            <div className="size-10 bg-emerald-800" aria-hidden />
            <div className="bg-emerald-700 px-2 py-1 text-sm font-medium">
              {feature.title}
            </div>
            <div className="bg-emerald-700 px-2 py-1 text-xs">
              {feature.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
