import { LocationIcon } from "@/components/icons";
import Image from "next/image";

export const TopBar = () => {
  return (
    <div className="w-full flex items-center py-2 bg-primary text-white text-xs">
      <div className="w-11/12 mx-auto flex">
        {/* Center content */}
        <p className="mx-auto flex items-center">
          Refer and earn extra discount&nbsp;&nbsp;
          <span className="text-blue-900 cursor-pointer">Click here...</span>
        </p>

        {/* Right aligned pincode */}
        <div className="flex gap-4 items-center pr-3">
          <p>Pincode</p>
          <LocationIcon />
          <Image src={"/images/india.png"} alt="India" width={24} height={24} />
        </div>
      </div>
    </div>
  );
};
