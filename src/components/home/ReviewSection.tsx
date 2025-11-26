import { ReviewCard } from "../cards/ReviewCard";
import { TitleSubtitle } from "../elements/TitleSubtitle";

export const ReviewSection = () => {
  return (
    <div className="w-full bg-linear-to-b from-[#F1FFFD96] to-[#F8F8F887]">
      <div className="w-11/12 mx-auto py-16 flex-col flex gap-14">
        <TitleSubtitle
          title="CUSTOMER REVIEWS"
          subtitle="KNOW ABOUT WHAT OTHERS THINK"
        />
        <div className="grid grid-cols-3 gap-10">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
      </div>
    </div>
  );
};
