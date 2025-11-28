import { ReviewCard } from "../cards/ReviewCard";
import { TitleSubtitle } from "../elements/TitleSubtitle";
import { TrapezoidButton } from "../elements/TrapezoidButton";

export const ReviewSection = () => {
  return (
    <div className="w-full bg-linear-to-b from-[#FFD58800] to-[#FFFFFF87]">
      <div className="w-11/12 mx-auto py-16 flex-col flex gap-14">
        <TitleSubtitle
          title="CUSTOMER REVIEWS"
          subtitle="KNOW ABOUT WHAT OTHERS THINK"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <TrapezoidButton className="bg-white" />
      </div>
    </div>
  );
};
