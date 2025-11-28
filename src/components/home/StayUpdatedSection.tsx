import { updatesCardData } from "@/constants";
import { UpdatesCard } from "../cards/UpdatesCard";
import { TitleSubtitle } from "../elements/TitleSubtitle";

export const StayUpdatedSection = () => {
  return (
    <div className="w-full bg-linear-to-b from-[#F1FFFD96] to-[#F8F8F887]">
      <div className="w-11/12 mx-auto py-16 flex-col flex gap-14">
        <TitleSubtitle
          title="STAY UPDATE WITH US"
          subtitle="KNOW ABOUT WHAT OTHERS THINK"
        />
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-10">
          {updatesCardData.map((item, i) => (
            <UpdatesCard key={i} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
