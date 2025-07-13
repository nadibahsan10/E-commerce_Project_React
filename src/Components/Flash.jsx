import React from "react";
import SectionHeader from "./SectionHeader";
import ProductCard from "./ProductCard";
import Button from "./Button";
import jacket from "../assets/jacket.png";

const Flash = () => {
  return (
    <section className="pb-15 border-b-[0.5px] container border-[#00000030]">
      <SectionHeader heading="Today's" timer />
      <div>
        <div className="grid grid-cols-4 gap-x-[30px] mb-[37px]">
          <ProductCard img={jacket} />
          <ProductCard img={jacket} />
          <ProductCard img={jacket} />
          <ProductCard img={jacket} />
        </div>
        <Button>View All Products</Button>
      </div>
    </section>
  );
};

export default Flash;
