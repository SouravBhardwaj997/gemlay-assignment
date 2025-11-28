import {
  FacebookIcon,
  LocationIcon,
  MailIcon,
  WhatsAppIcon,
} from "@/components/icons";
import Image from "next/image";
import Link from "next/link";

export const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-5 pl-10">
      <div className="flex flex-col gap-2">
        <p className="font-bold text-lg">Get In Touch</p>
        <p className="text-sm">
          Toll Free: <span className="font-semibold">+84 376 200 123</span>
        </p>
        <p className="text-sm">Monday to Saturday (9am to 6pm)</p>
      </div>
      <ul className="flex flex-col gap-2">
        <li>
          <Link href="/" className="flex gap-2 items-center">
            <WhatsAppIcon />
            99888-98866
          </Link>
        </li>
        <li>
          <Link href="/" className="flex gap-2 items-center">
            <MailIcon />
            info@garnetlanee.com
          </Link>
        </li>
        <li>
          <Link href="/" className="flex gap-2 items-center">
            <span className="self-start pt-1">
              <LocationIcon />
            </span>
            Sco.19,Sector 82 JLPL Mohali Airport Road,160055.
          </Link>
        </li>
      </ul>
      <div className="flex gap-3">
        <div className="size-10 rounded-full flex justify-center items-center bg-white border-2">
          <FacebookIcon />
        </div>
        <div className="size-10 rounded-full flex justify-center items-center bg-white border-2">
          <FacebookIcon />
        </div>
        <div className="size-10 rounded-full flex justify-center items-center bg-white border-2">
          <FacebookIcon />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-sm">Download Our Application</p>
        <div className="flex gap-2">
          <Image
            src={"/images/play-store.png"}
            alt="Play Store"
            width={100}
            height={5}
          />
          <Image
            src={"/images/app-store.png"}
            alt="Play Store"
            width={100}
            height={5}
          />
        </div>
      </div>
    </div>
  );
};
