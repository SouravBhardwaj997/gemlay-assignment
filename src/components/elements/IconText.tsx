export const IconText = ({
  Icon,
  text,
  className = "",
}: {
  Icon: React.JSX.Element;
  text: string;
  className?: string;
}) => {
  return (
    <div
      className={`flex flex-col gap-2 justify-center items-center px-6 border-r border-grayish font-semibold text-xs uppercase ${className}`}
    >
      {Icon}
      {text}
    </div>
  );
};
