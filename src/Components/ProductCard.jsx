import React from "react";
import joystick from "../assets/Joystick.png";
import { CiHeart } from "react-icons/ci";
import { LuEye } from "react-icons/lu";

import { FaStar } from "react-icons/fa";
const ProductCard = ({ img }) => {
  return (
    <div>
      <div className="h-[250px] w-[270px] mb-4 rounded-[4px] bg-[#F5F5F5] relative flex items-center justify-center">
        <h6 className="w-[55px] text-[12px] leading-[26px] text-white text-center h-[26px] bg-[#DB4444] absolute top-3 left-3 rounded-[4px]">
          -40%
        </h6>
        <img src={img} alt="product" />
        <div className="absolute top-3 right-3">
          <div className="h-[34px] mb-2 w-[34px] flex items-center justify-center bg-white rounded-full">
            <CiHeart fontSize={24} />
          </div>{" "}
          <div className="h-[34px] w-[34px] flex items-center justify-center bg-white rounded-full">
            <LuEye fontSize={24} />
          </div>
        </div>
      </div>
      <div>
        <h5 className="text-base font-medium leading-6 mb-2">
          HAVIT HV-G92 Gamepad
        </h5>
        <h5 className="text-base mb-2 text-[#DB4444]">
          $120
          <span className="text-[#00000050] line-through ms-3">$160</span>
        </h5>
        <div className="flex items-center text-[20px] gap-1">
          <FaStar className="text-[#FFAD33]" />
          <FaStar className="text-[#FFAD33]" />
          <FaStar className="text-[#FFAD33]" />
          <FaStar className="text-[#FFAD33]" />
          <FaStar className="text-[#FFAD33]" />
          <h6 className="text-[#00000050] text-sm font-semibold"> (88)</h6>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
