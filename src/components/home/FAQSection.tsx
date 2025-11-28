import { FAQsData } from "@/constants";
import { PlayIcon } from "../icons";

export const FAQSection = () => {
  return (
    <div className="w-full bg-whitish">
      <div className="w-11/12 mx-auto py-24 flex gap-10 ">
        <div className="flex flex-col w-full md:w-[30%]">
          {FAQsData.map((faq, i) => {
            return (
              <div
                className={`flex gap-2  items-center  ${
                  FAQsData.length - 1 === i ? "" : "border-b border-[#D9D9D9AD]"
                } py-6 pr-10`}
                key={i}
              >
                <PlayIcon />
                <p className="font-xs">{faq.title}</p>
              </div>
            );
          })}
        </div>
        <div className=" gap-5 flex-col md:flex hidden w-[70%]">
          <p className="font-semibold">Buy Gold Jewellery Online in India</p>
          <div className="flex flex-col gap-6  text-sm">
            <p>
              Buying Jewellery Online in India is becoming common these days.
              Though many people are still sceptical of doing so. Yet, the trend
              of shopping online for anything and everything is surging
              exponentially. Garnet Lanee is one among the many reputed brands
              that deliver all kinds of diamond and gold jewellery direct to
              your
            </p>

            <p>
              home – Rings, Necklaces, Bracelets, Pendants, et al. History tells
              the folktales of the importance of jewellery in India. Running
              down
            </p>
            <p>
              through decades, trends and styles may have changed, but emotions
              attached emanates ditto affection and care.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
