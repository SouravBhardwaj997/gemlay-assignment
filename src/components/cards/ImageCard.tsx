import Image from "next/image";

export const ImageCard = ({
  className,
  imageSrc,
}: {
  className?: string;
  imageSrc: string;
}) => {
  return (
    <div className={className}>
      <Image
        height={300}
        width={450}
        src={imageSrc}
        alt="image"
        className="w-full"
      />
    </div>
  );
};
