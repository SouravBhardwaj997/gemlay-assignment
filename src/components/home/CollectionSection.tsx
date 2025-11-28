import { collectionData } from "@/constants";
import { ImageCard } from "../cards/ImageCard";
import { TitleSubtitle } from "../elements/TitleSubtitle";
import { TrapezoidButton } from "../elements/TrapezoidButton";

export const CollectionSection = () => {
  return (
    <div className="w-full relative bg-linear-to-b from-[#FAFAFA] via-[#FAFAFA80] to-[#ECFFF780]">
      <TitleSubtitle
        subtitle="DISCOVER YOUR WORLD OF JEWELLERY"
        title="COLLECTIONS"
        className="reversed-trapezoid px-20 pb-3 left-1/2 -translate-x-1/2 bg-white absolute -top-3"
      />
      <div className="w-11/12 mx-auto py-24 flex flex-col ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
          {collectionData.map((item, i) => (
            <ImageCard key={i} {...item} />
          ))}
        </div>
      </div>
      {/* <TrapezoidButton className="bg-white! absolute bottom-0 right-1/2 -translate-x-1/2" /> */}
      <div className="absolute bottom-0 w-full flex justify-center">
        <TrapezoidButton className="bg-white!" />
      </div>
    </div>
  );
};
