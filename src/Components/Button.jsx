import React from "react";

const Button = ({ children, className }) => {
  return (
    <button className="text-base rounded-[4px] block  mx-auto font-medium text-white leading-6 bg-[#DB4444] px-12 py-4">
      {children}
    </button>
  );
};

export default Button;
