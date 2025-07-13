import Container from "./CSS/Container";
import Flex from "./CSS/Flex";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import banner from "../assets/Banner.png";

const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",

          bottom: "11px",
        }}
      >
        <ul className="m-0 gap-3"> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-3 h-3 rounded-full bg-[#808080]"></div>
    ),
  };
  return (
    <Container>
      <Flex className="items-start!">
        <div className="pt-10 pr-4 border-r-[0.5px] border-[#00000030]">
          <ul className="w-[217px]  text-base leading-[24px] flex flex-col gap-4 ">
            <li>Woman’s Fashion</li>
            <li>Men’s Fashion</li>
            <li>Electronics</li>
            <li>Home & Lifestyle</li>
            <li>Medicine</li>
            <li>Sports & Outdoor</li>

            <li>Baby’s & Toys</li>
            <li>Groceries & </li>
            <li>Health & Beauty</li>
          </ul>
        </div>
        <div className="w-full pl-10 mt-10 overflow-hidden">
          <Slider {...settings} className="w-full ">
            <div>
              <img src={banner} alt="asdsa" />
            </div>
            <div>
              <img src={banner} alt="asdsa" />
            </div>{" "}
            <div>
              <img src={banner} alt="asdsa" />
            </div>{" "}
            <div>
              <img src={banner} alt="asdsa" />
            </div>{" "}
            <div>
              <img src={banner} alt="asdsa" />
            </div>
          </Slider>
        </div>
      </Flex>
    </Container>
  );
};

export default Banner;
