import React from "react";
import { FeatureCard } from "../cards/FeatureCard";

export const FeatureSection = () => {
  return (
    <div className="flex gap-20 w-11/12 mx-auto py-14 ">
      <FeatureCard />
      <FeatureCard />
    </div>
  );
};
