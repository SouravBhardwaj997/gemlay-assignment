import { ProductCard } from "../cards/ProductCard";

export const ProductSection = () => {
  return (
    <div className="w-full bg-whitish">
      <div className="w-11/12 mx-auto py-14 flex flex-col gap-14 items-center justify-center">
        <div className="flex flex-col gap-1 font-medium items-center justify-center uppercase">
          <p className="text-pencil text-xl font-bold">TRENDING PRODUCTS</p>
          <p className="text-primary">DISCOVER YOUR WORLD OF JEWELLERY</p>
        </div>
        <div className="grid grid-cols-5 gap-6">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};
