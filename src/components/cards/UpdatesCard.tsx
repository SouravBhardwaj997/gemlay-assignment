import Image from "next/image";

export const UpdatesCard = ({
  imageSrc,
  title,
}: {
  imageSrc: string;
  title: string;
}) => {
  return (
    <div className="border border-primary rounded-2xl bg-white py-14 px-8 flex justify-center items-center gap-10 flex-col text-pencil ">
      <Image src={imageSrc} alt="company logo" height={100} width={200} />
      <p className="italic text-sm text-center">{title}</p>
      <button className="w-full py-4 rounded-2xl text-sm bg-linear-to-r from-[#F8F8F8] to-[#D9FDF7]">
        Read More
      </button>
    </div>
  );
};
