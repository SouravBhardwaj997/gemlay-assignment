"use client";

import { carouselData } from "@/constants";
import { CarouselCard } from "../cards/CarouselCard";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

export const CarouselSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const isMobile = useMediaQuery({ maxWidth: 640 });
  const isTablet = useMediaQuery({ minWidth: 641, maxWidth: 1024 });

  const itemsPerSlide = isMobile ? 1 : isTablet ? 2 : 5;

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const handleNext = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
  };

  const handlePrev = () => {
    setIsAutoPlay(false);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + carouselData.length) % carouselData.length
    );
  };

  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < itemsPerSlide; i++) {
      items.push(carouselData[(currentIndex + i) % carouselData.length]);
    }
    return items;
  };

  return (
    <div className="w-11/12 mx-auto py-12">
      <div className="relative">
        <div className="overflow-hidden w-11/12 mx-auto">
          <div className="flex gap-4 md:gap-8 lg:gap-16 transition-transform duration-500">
            {getVisibleItems().map((item, i) => (
              <div
                key={item.title + currentIndex + i}
                className="flex-1 min-w-0 flex justify-center"
              >
                <CarouselCard {...item} />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handlePrev}
          className="absolute left-4 md:left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-primary hover:text-white text-primary rounded-full p-2 md:p-3 transition-colors duration-300 shadow-md hover:shadow-lg"
          aria-label="Previous"
        >
          <svg
            className="w-4 h-4 md:w-6 md:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={handleNext}
          className="absolute right-0 md:right-6 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-primary hover:text-white text-primary rounded-full p-2 md:p-3 transition-colors duration-300 shadow-md hover:shadow-lg"
          aria-label="Next"
        >
          <svg
            className="w-4 h-4 md:w-6 md:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
