"use client";
import Image from "next/image";

import { useMediaQuery } from "react-responsive";

export const HeroSection = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });
  return (
    <div className="w-full">
      <Image
        src={isMobile ? "/images/hero-sm.png" : "/images/hero.png"}
        width={1000}
        height={1000}
        className="w-full"
        alt="Hero Image"
      />
    </div>
  );
};
