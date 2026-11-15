import { FeatureBenefits } from "@/components/home/FeatureBenefits";
import { FeaturedCollections } from "@/components/home/FeaturedCollections";
import { Header } from "@/components/home/Header";
import { Hero } from "@/components/home/Hero";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <Header />
      <main className="flex flex-1 flex-col">
        <Hero />
        <FeatureBenefits />
        <FeaturedCollections />
      </main>
    </div>
  );
}
