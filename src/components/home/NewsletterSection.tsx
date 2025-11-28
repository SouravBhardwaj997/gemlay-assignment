import { FemaleIcon, MaleIcon } from "../icons";

export const NewsletterSection = () => {
  return (
    <div className="w-full bg-linear-to-right from-[#F8F8F8] to-[#FFD58829]">
      <div className="w-11/12 mx-auto py-10 md:gap-0 gap-4 flex md:flex-row flex-col justify-between">
        <div className="flex flex-col gap-3">
          <p className="uppercase font-semibold text-primary-dark text-base md:text-xl">
            SIGN UP TO BE A GARNET LANEE INSIDER
          </p>
          <p className="text-xs text-pencil md:block hidden">
            Get Promotions, inspirations and the latest news about brands and
            jewellery items directly in your inbox
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex gap-2">
            <div className="flex flex-col gap-6">
              <input
                className="border w-64 md:w-96 rounded-xl px-4 py-2"
                placeholder="Email Address"
              />
              <div className="flex justify-center gap-4 items-center">
                <div className="flex gap-6">
                  <div className="flex gap-2">
                    <p>Female</p>
                    <FemaleIcon />
                  </div>
                  <input type="radio" name="gender" value="female" />
                </div>
                <div className="flex gap-6">
                  <div className="flex gap-2">
                    <p>Male</p>
                    <MaleIcon />
                  </div>
                  <input type="radio" name="gender" value="male" />
                </div>
              </div>
            </div>
            <button className="bg-linear-to-r from-primary-dark to-primary   rounded-xl px-8 py-3 h-fit text-sm text-white">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
