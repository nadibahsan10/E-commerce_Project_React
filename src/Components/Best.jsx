import React from "react";
import SectionHeader from "./SectionHeader";
import ProductCard from "./ProductCard";
import jacket from "../assets/jacket.png";
const Best = () => {
  return (
    <section className="pb-15 border-b-[0.5px] container border-[#00000030]">
      <SectionHeader heading="Best Selling Products" button="View All" />
      <div className="grid grid-cols-4 gap-x-[30px] pt-[60px]">
        <ProductCard img={jacket} /> <ProductCard img={jacket} />
        <ProductCard img={jacket} /> <ProductCard img={jacket} />
      </div>
    </section>
  );
};

export default Best;
