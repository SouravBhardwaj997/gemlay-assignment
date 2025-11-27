import { carouselData } from "@/constants";
import { CarouselCard } from "../cards/CarouselCard";

export const CarouselSection = () => {
  return (
    <div className="w-11/12 mx-auto py-12">
      <div className="flex gap-16">
        {carouselData.map((item, i) => (
          <CarouselCard key={item.title + i} {...item} />
        ))}
      </div>
    </div>
  );
};
