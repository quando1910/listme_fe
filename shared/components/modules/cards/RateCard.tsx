import React from "react";
import Rating from "@/shared/components/common/Rating";

const RateCard = () => {
  return (
    <div className="rounded-xl overflow-hidden">
      <div className="flex items-center justify-between bg-secondary p-3">
        <p className="text-xs font-semibold text-gray-400">Garcia Marcia</p>
        <Rating />
      </div>
      <div className="px-3 pt-3 pb-3.5 font-semibold bg-white">
        “Got my dream job only in 2 weeks”
      </div>
    </div>
  );
};

export default RateCard;
