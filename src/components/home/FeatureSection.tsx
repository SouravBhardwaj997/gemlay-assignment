import React from "react";
import { FeatureCard } from "../cards/FeatureCard";
import { featureData } from "@/constants";

export const FeatureSection = () => {
  return (
    <div className="flex gap-20 w-11/12 mx-auto py-14 ">
      {featureData.map((item) => (
        <FeatureCard key={item.title} {...item} />
      ))}
    </div>
  );
};
