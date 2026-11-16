import { BestSellers } from "@/components/home/BestSellers";
import { FeatureBenefits } from "@/components/home/FeatureBenefits";
import { FeaturedCollections } from "@/components/home/FeaturedCollections";
import { Hero } from "@/components/home/Hero";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <main className="flex flex-1 flex-col">
        <Hero />
        <FeatureBenefits />
        <FeaturedCollections />
        <BestSellers />
      </main>
    </div>
  );
}
