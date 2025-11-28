import { FeatureCard } from "../cards/FeatureCard";
import { featureData } from "@/constants";

export const FeatureSection = () => {
  return (
    <div className="flex gap-10 md:gap-20 w-11/12 mx-auto py-14 flex-wrap lg:flex-nowrap justify-center">
      {featureData.map((item) => (
        <FeatureCard key={item.title} {...item} />
      ))}
    </div>
  );
};
