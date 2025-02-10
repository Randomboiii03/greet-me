import React from 'react';

import FrameComponent from './right-ui/frame';

const RightComponent: React.FC = () => {
  return (
    <div className="relative h-1/4 xl:h-full w-full xl:w-1/4">

        {/* <img
          src="/images/Location.png"
          alt="Location"
          className="absolute h-auto 
          top-[15%] left-[31.5%] w-[32%]
          md:top-[15%] md:left-[31.5%] md:w-[32%]
          xl:top-[15%] xl:left-[31.5%] xl:w-[32%]"
        />

        <img
          src="/images/Heart VI.png"
          alt="Heart VI"
          className="absolute top-[28%] left-[2%] w-[82%] h-auto"
        />

        <img
          src="/images/Heart Word.png"
          alt="Heart Word"
          className="absolute top-[34%] left-[25%] w-[32%] h-auto animate-wiggle animate-infinite"
        /> */}

        <FrameComponent />

        {/* <img
          src="/images/Heart V.png"
          alt="Heart V"
          className="absolute h-auto 
          bottom-[15%] right-[25%] w-[33%]"
        /> */}
    </div>
  );
};

export default RightComponent;