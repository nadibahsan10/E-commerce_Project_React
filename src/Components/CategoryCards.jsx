import React from "react";

const CategoryCards = ({ Icon, title }) => {
  return (
    <div className="rounded-[4px] category hover:bg-[#DB4444] hover:text-white hover:border-[#DB4444] border-1 flex flex-col items-center justify-center p-[25px] border-black">
      <Icon fontSize={56} className="category-icon" />
      <h6 className="text-base leading-6">{title}</h6>
    </div>
  );
};

export default CategoryCards;
