import React from "react";
import logo from "../assets/logo.png";
import Container from "./CSS/Container";
import Flex from "./CSS/Flex";
import { IoIosArrowDown } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
const Header = () => {
  return (
    <>
      <div className="bg-black py-3">
        <Container>
          <Flex className="justify-between ">
            <div>{/* empty div for alignment */}</div>

            <h6 className="text-white text-sm mx-auto leading-[21px]  flex gap-2">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
              <a
                href="#"
                className="text-white font-semibold text-sm  leading-[24px] underline"
              >
                ShopNow
              </a>
            </h6>

            <button className="text-sm flex items-center gap-[11px] text-white leading-[24px] ">
              English
              <IoIosArrowDown className="text-white" />
            </button>
          </Flex>
        </Container>
      </div>{" "}
      <div className="h-[94px] border-b border-[0.5px] border-[#00000030]">
        <Container>
          <Flex className="justify-between mt-10">
            <img src={logo} alt="logo" />
            <ul className="flex gap-12">
              <li>Home</li>
              <li>Contact</li>
              <li>About</li>
              <li>Sign Up</li>
            </ul>
            <Flex className="gap-6">
              <div className="relative ">
                <input
                  type="text"
                  className="bg-[#F5F5F5] py-[7px] ps-[20px] w-[243px] e placeholder:text-xs placeholder:leading-[18px] placeholder:text-[#00000050] focus:outline-none "
                  placeholder="What are you looking for?"
                />
                <CiSearch
                  fontSize={24}
                  className="absolute right-3 top-[8px]"
                />
              </div>
              <Flex className="gap-4 ms-auto">
                <CiHeart fontSize={32} />
                <BsCart3 fontSize={32} />
              </Flex>
            </Flex>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Header;
