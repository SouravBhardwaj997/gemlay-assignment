import Link from "next/link";

export const FooterLinks = ({
  title,
  links,
}: {
  title: string;
  links: {
    icon: React.ReactNode;
    name: string;
    link: string;
  }[];
}) => {
  return (
    <div className="flex w-full justify-between pl-10">
      <div className="flex flex-col gap-5">
        <p className="font-bold text-lg">{title}</p>
        <ul className="flex flex-col gap-2">
          {links.map((link) => (
            <li key={link.name}>
              <Link href={link.link} className="flex gap-2 items-center">
                {link.icon}
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-42 w-px bg-gray-400 self-end" />
    </div>
  );
};
