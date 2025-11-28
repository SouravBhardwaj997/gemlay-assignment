import { BagIcon, HeartIcon, MenuIcon, SearchIcon } from "@/components/icons";
import Image from "next/image";

export const MobileNavbar = () => {
  return (
    <div className="w-11/12 mx-auto flex justify-between py-6">
      <button>
        <MenuIcon />
      </button>
      <Image src={"/images/logo.png"} alt="logo" width={140} height={80} />
      <div className="flex gap-2 justify-center items-center">
        <SearchIcon />
        <HeartIcon />
        <BagIcon />
      </div>
    </div>
  );
};
