import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Button from "./Button";
import Timer from "./Timer";
const SectionHeader = ({ heading, timer, button }) => {
  return (
    <div className="container mt-[140px] mb-10">
      <div className="flex items-center mb-5 gap-4">
        <div className="h-10 w-5 bg-[#DB4444] rounded-[4px] "></div>
        <h6 className="font-semibold text-base leading-5 text-[#DB4444]">
          {heading}
        </h6>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-[87px] ">
          <h4 className="text-4xl font-semibold">Flash Sales</h4>
          {timer && <Timer />}
        </div>
        {button ? (
          <div>
            <Button>{button}</Button>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <button className="bg-[#F5F5F5] flex items-center justify-center rounded-full w-[46px] h-[46px]">
              <FaArrowLeft />
            </button>
            <button className="bg-[#F5F5F5] flex items-center justify-center rounded-full w-[46px] h-[46px]">
              <FaArrowRight />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionHeader;
