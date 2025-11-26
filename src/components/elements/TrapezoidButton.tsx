import { PlayIcon } from "../icons";

export const TrapezoidButton = () => {
  return (
    <button className="flex gap-3 text-primary text-sm justify-center items-baseline px-16 py-3 cursor-pointer trapezoid ">
      DISCOVER ALL <PlayIcon />
    </button>
  );
};
