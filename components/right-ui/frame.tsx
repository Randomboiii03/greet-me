import React from 'react';

import { CarouselPlugin } from '../carousel-auto';

const FrameComponent: React.FC = () => {
  return (
    <>
        <img
          src="/images/Love Button.png"
          alt="Love Button"
          className="absolute h-auto z-10 
          md:bottom-[58%] md:right-[8%] md:w-[13%]
          xl:bottom-[43%] xl:right-[18%] xl:w-[33%]"
        />

        <div className="absolute transform rotate-[22deg] h-auto rounded-2xl 
          bottom-[50%] right-[15%] w-[35%]
          md:bottom-[25%] md:right-[15%] md:w-[35%]
          xl:bottom-[32%] xl:right-[35%] xl:w-[80%]"
        >
          <CarouselPlugin />
        </div>
    </>
  );
};

export default FrameComponent;