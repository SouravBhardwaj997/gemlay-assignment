import { CarouselSection } from "@/components/home/CarouselSection";
import { CategorySection } from "@/components/home/CategorySection";
import { CollectionSection } from "@/components/home/CollectionSection";
import { FeatureSection } from "@/components/home/FeatureSection";
import { HeroSection } from "@/components/home/HeroSection";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { ProductSection } from "@/components/home/ProductSection";
import { ReviewSection } from "@/components/home/ReviewSection";
import { ShopByGenderSection } from "@/components/home/ShopByGenderSection";
import { SocialLinksSection } from "@/components/home/SocialLinksSection";
import { StayUpdatedSection } from "@/components/home/StayUpdatedSection";

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
      <StayUpdatedSection />
      <NewsletterSection />
      <SocialLinksSection />
    </div>
  );
}
