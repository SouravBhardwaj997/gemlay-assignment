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
    <div className="flex w-full justify-between md:pl-10">
      <div className="flex flex-col gap-5">
        <p className="font-bold text-base">{title}</p>
        <ul className="flex flex-col gap-2">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.link}
                className="flex text-sm gap-2 items-center"
              >
                <span className="self-start pt-1">{link.icon}</span>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-64 w-px bg-gray-400 self-center ml-4 md:block hidden" />
    </div>
  );
};
