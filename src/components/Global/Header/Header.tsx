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
            className="border-2 border-primary-dark w-96 rounded-3xl px-4 py-2"
            placeholder="Search Products..."
          />
        </div>
        <div className="flex gap-3">
          <IconText Icon={<GspIcon />} text="GSP" />
          <IconText Icon={<OfferIcon />} text="offer" />
          <IconText Icon={<HeartIcon />} text="wishlist" />
          <IconText Icon={<BagIcon />} text="Cart" />
          <IconText Icon={<QrIcon />} text="verify Report" />
        </div>
      </div>
      <BottomBar />
    </div>
  );
};
