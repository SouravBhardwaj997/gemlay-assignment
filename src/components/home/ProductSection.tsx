import { ProductCard } from "../cards/ProductCard";
import { TitleSubtitle } from "../elements/TitleSubtitle";
import { TrapezoidButton } from "../elements/TrapezoidButton";

export const ProductSection = ({ className }: { className?: string }) => {
  return (
    <div
      className={`w-full bg-linear-to-b from-[#F8F8F896] to-[#F8F8F887] ${className}`}
    >
      <div className="w-11/12 mx-auto py-14 flex flex-col gap-14 items-center justify-center">
        <TitleSubtitle
          title="Trending Products"
          subtitle="DISCOVER YOUR WORLD OF JEWELLERY"
        />
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-10 xl:gap-6 ">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <TrapezoidButton className="bg-white" />
      </div>
    </div>
  );
};
