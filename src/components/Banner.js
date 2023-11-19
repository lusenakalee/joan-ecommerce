import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
       
        <div>
          <img
            src="/images/banner1.png"
            width={500}
            height={500}
            alt="Banner"
          />
        </div>
        <div>
          <img
            src="/images/banner2.png"
            width={500}
            height={500}
            alt="Banner"
          />
        </div>
        <div>
          <img
            src="/images/banner3.png"
            width={500}
            height={500}
            alt="Banner"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
