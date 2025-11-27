import Image from "next/image";

export const CarouselCard = ({
  imageSrc,
  title,
}: {
  imageSrc: string;
  title: string;
}) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="p-2 rounded-full bg-linear-to-b from-primary to-primary-dark">
        <Image
          src={imageSrc}
          alt="ring"
          width={200}
          height={200}
          className="bg-white rounded-full h-40 w-40"
        />
      </div>
      <div className="text-center flex flex-col items-center justify-center gap-3 text-black ">
        <h1>{title}</h1>
        <div className="w-10 h-2 rounded-2xl bg-linear-to-r from-primary to-primary-dark" />
      </div>
    </div>
  );
};
