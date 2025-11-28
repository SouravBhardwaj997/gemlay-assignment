import { PlayIcon, WheelIcon } from "../icons";

export const SpinButton = () => {
  return (
    <button className="bg-linear-to-b from-primary-dark to-primary flex gap-2 justify-center items-center p-4 text-white rounded-r-md fixed bottom-10 left-0 shadow-lg  cursor-pointer ">
      <PlayIcon className="rotate-180" color="white" />
      <div className="flex flex-col gap-2 justify-center items-center">
        <WheelIcon />
        <p>Spin the wheel!</p>
      </div>
    </button>
  );
};
