import { CarouselSection } from "@/components/home/CarouselSection";
import { CategorySection } from "@/components/home/CategorySection";
import { CollectionSection } from "@/components/home/CollectionSection";
import { FeatureSection } from "@/components/home/FeatureSection";
import { HeroSection } from "@/components/home/HeroSection";
import { ProductSection } from "@/components/home/ProductSection";
import { ReviewSection } from "@/components/home/ReviewSection";
import { ShopByGenderSection } from "@/components/home/ShopByGenderSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CarouselSection />
      <FeatureSection />
      <CollectionSection />
      <ProductSection />
      <ProductSection />
      <CategorySection />
      <ShopByGenderSection />
      <ReviewSection />
    </div>
  );
}
