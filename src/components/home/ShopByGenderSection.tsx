import { ImageCard } from "../cards/ImageCard";
import { TitleSubtitle } from "../elements/TitleSubtitle";

export const ShopByGenderSection = () => {
  return (
    <div className="w-full bg-linear-to-b from-[#F1FFFD96] to-[#F8F8F887]">
      <div className="w-11/12 mx-auto py-16 flex-col flex gap-14">
        <TitleSubtitle
          title="SHOP BY GENDER"
          subtitle="DISCOVER YOUR WORLD OF JEWELLERY"
        />
        <div className="grid grid-cols-4 gap-10">
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
        </div>
      </div>
    </div>
  );
};
