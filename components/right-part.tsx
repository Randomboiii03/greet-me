/* eslint-disable @next/next/no-img-element */

import React from 'react';

import FrameComponent from './right-ui/frame';

interface CarouselPluginProps {
  images: string[];
}

const RightComponent: React.FC<CarouselPluginProps> = ({ images }) => {
  return (
    <div className="relative h-1/4 xl:h-full w-full xl:w-1/4">

        <img
          src="/images/Location.png"
          alt="Location"
          className="absolute h-auto transform scale-x-[-1] xl:scale-x-[1] z-10
          top-[9%] left-[8%] w-[16%]
          md:top-[10%] md:left-[10%] md:w-[16%]
          xl:top-[15%] xl:left-[31.5%] xl:w-[32%]"
        />

        <img
          src="/images/Heart VI.png"
          alt="Heart VI"
          className="absolute h-auto 
          top-[40%] left-[30%] w-[60%]
          md:top-[45%] md:left-[30%] md:w-[60%]
          xl:top-[28%] xl:left-[2%] xl:w-[82%]"
        />

        <img
          src="/images/Heart Word.png"
          alt="Heart Word"
          className="absolute h-auto animate-wiggle animate-infinite
          top-[10%] left-[30%] w-[20%]
          md:top-[18%] md:left-[30%] md:w-[20%]
          xl:top-[34%] xl:left-[25%] xl:w-[32%]"
        />

        <FrameComponent images={ images } />

        <img
          src="/images/Heart V.png"
          alt="Heart V"
          className="absolute h-auto 
          bottom-[79%] right-[83%] w-[15%]
          md:bottom-[60%] md:right-[83%] md:w-[15%]
          xl:bottom-[15%] xl:right-[25%] xl:w-[33%]"
        />
    </div>
  );
};

export default RightComponent;