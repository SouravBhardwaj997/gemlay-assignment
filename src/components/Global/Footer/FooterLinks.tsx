import { RateIcon } from "@/components/icons";
import Link from "next/link";

export const FooterLinks = () => {
  return (
    <div className="flex w-full justify-between pl-10">
      <div className="flex flex-col gap-5">
        <p className="font-bold text-lg">Our Services</p>
        <ul className="flex flex-col gap-2">
          <li>
            <Link href="/" className="flex gap-2 items-center">
              <RateIcon />
              About
            </Link>
          </li>
          <li>
            <Link href="/" className="flex gap-2 items-center">
              <RateIcon />
              About
            </Link>
          </li>
        </ul>
      </div>
      <div className="h-42 w-px bg-gray-400 self-end" />
    </div>
  );
};
