import { genderCategoryData } from "@/constants";
import { ImageCard } from "../cards/ImageCard";
import { TitleSubtitle } from "../elements/TitleSubtitle";
import { TrapezoidButton } from "../elements/TrapezoidButton";

export const ShopByGenderSection = () => {
  return (
    <div className="w-full bg-linear-to-b from-[#fae8e887] to-[#F8F8F887]">
      <div className="w-11/12 mx-auto py-16 flex-col flex gap-14">
        <TitleSubtitle
          title="SHOP BY GENDER"
          subtitle="DISCOVER YOUR WORLD OF JEWELLERY"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {genderCategoryData.map((item, i) => (
            <ImageCard key={i} imageSrc={item.imageSrc} />
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <TrapezoidButton className="bg-white" />
      </div>
    </div>
  );
};
