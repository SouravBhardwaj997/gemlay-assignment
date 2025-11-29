import { ChatIcon } from "../icons";

export const ChatButton = () => {
  return (
    <button className="bg-linear-to-b from-primary-dark to-primary flex justify-center items-center rounded-full w-[50px] h-[50px] fixed bottom-6 right-12 shadow-lg p-4 cursor-pointer">
      <ChatIcon />
    </button>
  );
};
