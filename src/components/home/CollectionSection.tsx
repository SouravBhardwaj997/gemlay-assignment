import { ImageCard } from "../cards/ImageCard";

export const CollectionSection = () => {
  return (
    <div className="w-full bg-whitish">
      <div className="w-11/12 mx-auto py-24 grid grid-cols-3 gap-10 ">
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
      </div>
    </div>
  );
};
