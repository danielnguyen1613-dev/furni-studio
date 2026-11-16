import { ArExperience } from "@/components/home/ArExperience";
import { BestSellers } from "@/components/home/BestSellers";
import { CustomerReviews } from "@/components/home/CustomerReviews";
import { FeatureBenefits } from "@/components/home/FeatureBenefits";
import { FeaturedCollections } from "@/components/home/FeaturedCollections";
import { Footer } from "@/components/home/Footer";
import { Hero } from "@/components/home/Hero";
import { Newsletter } from "@/components/home/Newsletter";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <main className="flex flex-1 flex-col">
        <Hero />
        <FeatureBenefits />
        <FeaturedCollections />
        <BestSellers />
        <ArExperience />
        <CustomerReviews />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
