import Image from "next/image";

export const FeatureCard = () => {
  return (
    <div className="bg-linear-to-r from-grayish to-white flex justify-center rounded-[250px] items-center gap-10 ps-14">
      <p className="font-medium  text-pencil text-4xl uppercase">
        EXPRESS <span className="text-primary">DELIVERY</span>
      </p>
      <Image src="/images/feature1.png" alt="" width={200} height={200} />
    </div>
  );
};
