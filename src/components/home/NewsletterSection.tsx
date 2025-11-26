export const NewsletterSection = () => {
  return (
    <div className="w-full bg-linear-to-right from-[#F8F8F8] to-[#D9FDF7]">
      <div className="w-11/12 mx-auto py-10 flex justify-between">
        <div className="flex flex-col gap-3">
          <p className="uppercase font-semibold text-primary-dark text-xl">
            SIGN UP TO BE A GARNET LANEE INSIDER
          </p>
          <p className="text-xs text-pencil">
            Get Promotions, inspirations and the latest news about brands and
            jewellery items directly in your inbox
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex gap-2">
            <input
              className="border w-96 rounded-xl px-4 py-2"
              placeholder="Email Address"
            />
            <button className="bg-linear-to-r from-primary-dark to-primary   rounded-xl px-8 py-3 text-sm text-white">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
