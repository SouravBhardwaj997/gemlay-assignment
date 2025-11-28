import { IconText } from "@/components/elements/IconText";

import Image from "next/image";
import { TopBar } from "./TopBar";
import { BottomBar } from "./BottomBar";
import {
  GspIcon,
  OfferIcon,
  BagIcon,
  HeartIcon,
  QrIcon,
  PersonIcon,
} from "@/components/icons";

export const Header = () => {
  return (
    <div className="flex flex-col">
      <TopBar />
      <div className="w-11/12 flex justify-between items-center mx-auto py-4">
        <div>
          <Image src="/images/logo.png" alt="" width={180} height={120} />
        </div>
        <div>
          <input
            className="border-2 border-primary-dark w-72 ml-2 xl:w-80 rounded-3xl px-4 py-2"
            placeholder="Search Products..."
          />
        </div>
        <div className="flex gap-3">
          <IconText Icon={<GspIcon />} text="GSP" />
          <IconText Icon={<OfferIcon />} text="offer" />
          <IconText Icon={<HeartIcon />} text="wishlist" />
          <IconText Icon={<BagIcon />} text="Cart" />
          <IconText
            Icon={<QrIcon />}
            text="verify Report"
            className="border-none"
          />
          <div className="flex flex-col justify-center gap-2">
            <div className="flex just-center items-center gap-2">
              <div className="flex justify-center items-center p-2 bg-gray-100 rounded-full">
                <PersonIcon />
              </div>
              <p className="text-xs xl:block hidden">Hi, Ashish Sood </p>
            </div>
            <div className="w-3/4 rounded-2xl h-1 bg-primary-dark mx-auto xl:block hidden" />
          </div>
        </div>
      </div>
      <BottomBar />
    </div>
  );
};
