import { FooterLinks } from "./FooterLinks";
import { ContactInfo } from "./ContactInfo";

export const Footer = () => {
  return (
    <div className="flex flex-col bg-primary/15">
      <div className="w-full bg-primary/15 pb-4">
        <div className="w-11/12 mx-auto py-10 grid grid-cols-5 place-content-between place-items-start ">
          <FooterLinks />
          <FooterLinks />
          <FooterLinks />
          <FooterLinks />
          <ContactInfo />
        </div>
      </div>
      <div className="w-full  mx-auto py-3 text-sm text-white text-center bg-primary-dark mb-4">
        <p>© 2023 Gemlay. All rights reserved.</p>
      </div>
    </div>
  );
};
