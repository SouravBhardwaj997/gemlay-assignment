import Image from "next/image";

export const ImageCard = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <Image
        height={300}
        width={450}
        src="/images/collection1.png"
        alt="image"
        className="w-full"
      />
    </div>
  );
};
