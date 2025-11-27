import { PlayIcon } from "../icons";

export const FAQSection = () => {
  return (
    <div className="w-full bg-whitish">
      <div className="w-11/12 mx-auto py-24 flex  gap-10 ">
        <div className="flex flex-col w-[30%]">
          <div className="flex gap-2 border-b items-center  border-[#D9D9D9AD] py-6 pr-10">
            <PlayIcon />
            <p className="font-xs">Buy Gold Jewellery Online in India</p>
          </div>
        </div>
        <div className="flex gap-5 flex-col w-[70%]">
          <p className="font-semibold">Buy Gold Jewellery Online in India</p>
          <p className="text-sm">
            Buying Jewellery Online in India is becoming common these days.
            Though many people are still sceptical of doing so. Yet, the trend
            of shopping online for anything and everything is surging
            exponentially. Garnet Lanee is one among the many reputed brands
            that deliver all kinds of diamond and gold jewellery direct to your
            home – Rings, Necklaces, Bracelets, Pendants, et al. History tells
            the folktales of the importance of jewellery in India. Running down
            through decades, trends and styles may have changed, but emotions
            attached emanates ditto affection and care.
          </p>
        </div>
      </div>
    </div>
  );
};
