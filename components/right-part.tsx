import React from 'react';

import FrameComponent from './right-ui/frame';

const RightComponent: React.FC = () => {
  return (
    <div className="h-full w-full md:w-1/4 relative">

        <img
          src="/images/Location.png"
          alt="Location"
          className="absolute top-[6%] left-[31.5%] w-[32%] h-auto"
        />

        <img
          src="/images/Heart VI.png"
          alt="Heart VI"
          className="absolute top-[22.5%] left-[2%] w-[82%] h-auto"
        />

        <img
          src="/images/Heart Word.png"
          alt="Heart Word"
          className="absolute top-[29.5%] left-[25%] w-[32%] h-auto animate-wiggle animate-infinite"
        />

        <FrameComponent />

        <img
          src="/images/Heart V.png"
          alt="Heart V"
          className="absolute bottom-[6%] right-[25%] w-[33%] h-auto"
        />
    </div>
  );
};

export default RightComponent;