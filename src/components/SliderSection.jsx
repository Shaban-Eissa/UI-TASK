import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { cardData } from "../data";
import "../index.css";

import Card from "./Card";

import LeftArrow from "./Icons/LeftArrow";
import RightArrow from "./Icons/RightArrow";

const ButtonGroup = ({ next, previous }) => {
  return (
    <div className="absolute w-full flex justify-between px-4 md:px-8 lg:px-16 xl:px-32">
      <button onClick={previous} className="carousel-arrow-left">
        <LeftArrow />
      </button>
      <button onClick={next} className="carousel-arrow-right">
        <RightArrow />
      </button>
    </div>
  );
};

const SliderSection = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="bg-white flex flex-col px-6 py-12 max-md:px-5">
      <div className="text-neutral-800 text-center text-4xl font-bold self-center mt-8 max-md:max-w-full">
        <span className="text-violet-600">+20,000</span> Cook & Family
        Enterprise,
      </div>
      <div className="text-gray-500 text-center text-lg self-center max-w-[600px] mt-4 max-md:max-w-full">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut leo
        et ligula auctor sodales in non orci.
      </div>
      <div className="mt-14 mb-8 max-md:mt-10">
        <Carousel
          responsive={responsive}
          arrows={false}
          itemClass="carousel-item-padding"
          customButtonGroup={<ButtonGroup />}
        >
          {cardData.map((card, index) => (
            <div key={index}>
              <Card
                color={card.color}
                rating={card.rating}
                category={card.category}
                businessName={card.businessName}
                description={card.description}
                location={card.location}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default SliderSection;
