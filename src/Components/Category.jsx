import React from "react";
import SectionHeader from "./SectionHeader";
import { CiMobile1 } from "react-icons/ci";
import CategoryCards from "./CategoryCards";
const Category = () => {
  return (
    <section className="pb-15 border-b-[0.5px] container border-[#00000030]">
      <SectionHeader heading="Browse By Category" />
      <div className="grid grid-cols-6 gap-x-[30px]">
        <CategoryCards Icon={CiMobile1} title="Phones" />
        <CategoryCards Icon={CiMobile1} title="Phones" />
        <CategoryCards Icon={CiMobile1} title="Phones" />
        <CategoryCards Icon={CiMobile1} title="Phones" />
        <CategoryCards Icon={CiMobile1} title="Phones" />
        <CategoryCards Icon={CiMobile1} title="Phones" />
      </div>
    </section>
  );
};

export default Category;
