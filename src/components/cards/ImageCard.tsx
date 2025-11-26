import Image from "next/image";

export const ImageCard = () => {
  return (
    <div>
      <Image
        height={300}
        width={450}
        src="/images/collection1.png"
        alt="image"
      />
    </div>
  );
};
