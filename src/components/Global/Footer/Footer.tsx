import { FooterLinks } from "./FooterLinks";
import { ContactInfo } from "./ContactInfo";
import { FooterLinksData } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="flex flex-col bg-primary/15">
      <div className="w-full bg-primary/15 pb-4">
        <div className="w-11/12 mx-auto py-10 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 place-content-between place-items-start gap-y-3 md:gap-y-10">
          {FooterLinksData.map((el, i) => (
            <FooterLinks {...el} key={i} />
          ))}

          <ContactInfo />
        </div>

        <div className="flex w-11/12 mx-auto flex-col md:flex-row  justify-between">
          <ul className="flex gap-2 self-end uppercase text-xs md:text-sm">
            <li>
              <Link href="/" className="border-r pr-1">
                SITE MAP
              </Link>
            </li>
            <li>
              <Link href="/" className="border-r pr-1">
                PRIVACY POLICY
              </Link>
            </li>
            <li>
              <Link href="/" className="border-r pr-1">
                TERMS AND CONDITIONS
              </Link>
            </li>
            <li>
              <Link href="/" className=" pr-1">
                FAQs
              </Link>
            </li>
          </ul>
          <div className="flex flex-col gap-3">
            <p className="text-sm">Download Our Application</p>
            <div className="flex gap-2">
              <Image
                src={"/images/app-store.png"}
                alt="Play Store"
                width={100}
                height={5}
                className="h-8"
              />
              <Image
                src={"/images/app-store.png"}
                alt="Play Store"
                width={100}
                height={5}
                className="h-8"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full  mx-auto py-3 text-sm text-white text-center bg-primary-dark mb-4">
        <p>© 2025 Gemlay. All rights reserved.</p>
      </div>
    </div>
  );
};
