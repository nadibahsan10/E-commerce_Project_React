import React from "react";
import Container from "./CSS/Container";
import Flex from "./CSS/Flex";

import Slider from "react-slick";

const Banner = () => {
  return (
    <Container>
      <Flex className="items-center">
        <div>
          <ul>
            <li>Woman’s Fashion</li>
            <li>Men’s Fashion</li>
            <li>Electronics</li>
            <li>Home & Lifestyle</li>
            <li>Medicine</li>
            <li>Sports & Outdoor</li>
            <li>Sports & Outdoor</li>
            <li>Baby’s & Toys</li>
            <li>Groceries & Health & Beauty</li>
          </ul>
        </div>
        <div></div>
      </Flex>
    </Container>
  );
};

export default Banner;
