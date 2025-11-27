import Image from "next/image";

export const SocialLinksSection = () => {
  return (
    <div className="w-full bg-white">
      <div className="w-11/12 mx-auto py-16 flex-col flex justify-center items-center gap-6">
        <p className="font-semibold uppercase">
          WE WOULD LOVE TO MEET YOU ON OUR HANDLES
        </p>
        <div className="flex gap-2">
          <Image
            src={"/images/facebook.png"}
            alt="facebook"
            height={30}
            width={30}
          />
          <Image
            src={"/images/insta.png"}
            alt="facebook"
            height={30}
            width={30}
          />
          <Image
            src={"/images/youtube.png"}
            alt="facebook"
            height={30}
            width={30}
          />
        </div>
      </div>
    </div>
  );
};
