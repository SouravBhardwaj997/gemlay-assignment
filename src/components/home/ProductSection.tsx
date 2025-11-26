import { ProductCard } from "../cards/ProductCard";
import { TitleSubtitle } from "../elements/TitleSubtitle";
import { TrapezoidButton } from "../elements/TrapezoidButton";

export const ProductSection = () => {
  return (
    <div className="w-full bg-whitish">
      <div className="w-11/12 mx-auto py-14 flex flex-col gap-14 items-center justify-center">
        <TitleSubtitle
          title="Trending Products"
          subtitle="DISCOVER YOUR WORLD OF JEWELLERY"
        />
        <div className="grid grid-cols-5 gap-6">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <TrapezoidButton />
      </div>
    </div>
  );
};
