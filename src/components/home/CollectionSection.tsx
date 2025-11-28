import { collectionData } from "@/constants";
import { ImageCard } from "../cards/ImageCard";

export const CollectionSection = () => {
  return (
    <div className="w-full bg-whitish">
      <div className="w-11/12 mx-auto py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {collectionData.map((item, i) => (
          <ImageCard key={i} {...item} />
        ))}
      </div>
    </div>
  );
};
