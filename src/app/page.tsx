import { CarouselSection } from "@/components/home/CarouselSection";
import { CollectionSection } from "@/components/home/CollectionSection";
import { FeatureSection } from "@/components/home/FeatureSection";
import { HeroSection } from "@/components/home/HeroSection";
import { ProductSection } from "@/components/home/ProductSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CarouselSection />
      <FeatureSection />
      <CollectionSection />
      <ProductSection />
      <ProductSection />
    </div>
  );
}
