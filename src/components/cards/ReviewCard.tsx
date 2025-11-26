import React from "react";
import { EmptyStar, FilledStar, QuoteIcon } from "../icons";
import Image from "next/image";

export const ReviewCard = () => {
  return (
    <div className="px-8 py-10 flex flex-col gap-16 bg-[#EFEFEF87] border border-[#EFEFEF] rounded-xl relative">
      <div className="triangle bg-white absolute w-10 h-6 rotate-90 -left-3" />
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <p className="text-pencil font-bold">Himesh</p>
          <p className="text-[#5AD8C2] text-sm">May 25 ,2022</p>
        </div>
        <QuoteIcon />
      </div>
      <p className="text-pencil text-sm italic">
        Talk about a range of elements, including customer service. Be detailed,
        specific, and honest. Leave outlinks and personal information.
      </p>
      <div className="flex items-center justify-between">
        <Image
          src={"/images/google.png"}
          width={20}
          height={20}
          alt="Google Image"
        />
        <div className="flex gap-2 items-center">
          <FilledStar />
          <EmptyStar />
          <EmptyStar />
          <EmptyStar />
          <EmptyStar />
        </div>
      </div>
    </div>
  );
};
