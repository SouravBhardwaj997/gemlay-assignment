import Image from "next/image";

export const HeroSection = () => {
  return (
    <div className="w-full">
      <Image
        src={"/images/hero.png"}
        width={1000}
        height={1000}
        className="w-full"
        alt="Hero Image"
      />
    </div>
  );
};
