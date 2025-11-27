import {
  HeroSection,
  CarouselSection,
  CategorySection,
  CollectionSection,
  FeatureSection,
  ProductSection,
  ShopByGenderSection,
  ReviewSection,
  StayUpdatedSection,
  SocialLinksSection,
  NewsletterSection,
  FAQSection,
} from "@/components/home";

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
      <FAQSection />
      <SocialLinksSection />
    </div>
  );
}
