import { Line } from "../icons";

export const TitleSubtitle = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="flex flex-col gap-1 font-medium items-center justify-center uppercase">
      <p className="text-pencil flex justify-center items-center gap-2 text-base md:text-xl font-bold uppercase text-center">
        <Line />
        <span> {title}</span>
        <Line />
      </p>
      <p className="text-primary text-sm md:text-base">{subtitle}</p>
    </div>
  );
};
