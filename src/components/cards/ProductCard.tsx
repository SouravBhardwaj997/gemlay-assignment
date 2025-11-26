import Image from "next/image";
import { ShinyHeart, TwoCircle } from "../icons";

export const ProductCard = () => {
  return (
    <div className="flex flex-col relative bg-white shadow-xl rounded-3xl">
      <div className="flex justify-center">
        <Image
          src={"/images/product1.png"}
          alt="Product1"
          height={250}
          width={250}
        />
      </div>
      <div className="flex justify-between py-4 px-3 gap-4">
        <div className="flex flex-col gap-2  ">
          <div className="flex gap-2">
            <p className="text-xl font-semibold">₹22,323</p>
            <p className="text-lg font-semibold line-through">₹22,323</p>
          </div>
          <p className="text-pencil line-clamp-1 text-sm">
            Yemeraly Wings Diamond...
          </p>
          <p className="text-primary font-bold text-xs py-2">
            10 % on off Making Charges
          </p>
          <p className="text-pencil font-bold text-xs flex gap-1">
            <TwoCircle />
            <span>View Similar</span>
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="w-6 h-6 rounded-full bg-linear-to-b from-[#F7DBAFB0] via-[#F6D6A4A5] to-[#F6D6A4A5]" />
          <div className="w-6 h-6 rounded-full bg-linear-to-b from-[#F7DBAFB0] via-[#F6D6A4A5] to-[#F6D6A4A5]" />
          <div className="w-6 h-6 rounded-full bg-linear-to-b from-[#F7DBAFB0] via-[#F6D6A4A5] to-[#F6D6A4A5]" />
        </div>
      </div>
      <div className="w-full flex justify-between py-2 px-3 absolute top-2">
        <p className="uppercase rounded-2xl text-black text-[10px] py-1 px-3 bg-linear-to-r from-red-100 to-green-100">
          Trending
        </p>
        <ShinyHeart />
      </div>
      <button className="bg-linear-to-r to-primary  text-white from-primary-dark px-8 py-2 rounded-tl-2xl rounded-br-2xl text-[13px] absolute bottom-0 right-0 -skew-x-12 cursor-pointer">
        Buy Now
      </button>
    </div>
  );
};
