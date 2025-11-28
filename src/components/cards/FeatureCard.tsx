import Image from "next/image";

export const FeatureCard = ({
  title,
  imageSrc,
  direction,
}: {
  title: string;
  imageSrc: string;
  direction: string;
}) => {
  return (
    <div
      className={`${
        direction === "right"
          ? "bg-linear-to-r flex-row"
          : "bg-linear-to-l flex-row-reverse"
      } from-grayish to-white flex justify-center rounded-[250px] items-center gap-10 ps-14 h-56`}
    >
      <p className="font-medium text-wrap flex flex-wrap text-pencil text-4xl uppercase pr-12">
        {title.split(" ")[0]}
        <span className="text-primary">&nbsp;{title.split(" ")[1]}</span>
      </p>
      <Image src={imageSrc} alt={title} width={200} height={200} />
    </div>
  );
};
