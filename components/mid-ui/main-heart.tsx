import React from 'react';

const MainHeartComponent: React.FC = () => {
  return (
    <>
    {/* Main Heart */}
      <img
        src="/images/Valentine_s Day Heart.png"
        alt="Valentine's Day Heart"
        className="absolute 
        top-[25%] left-[23%] w-[55%]
        md:top-[14%] md:left-[25.5%] md:w-[50%]
        xl:top-[19%] xl:left-[13%] xl:w-[75%]
        h-auto animate-jump-in animate-duration-[1200ms]"
      />

      {/* Flower Top Right */}
      <img
        src="/images/Flower I.png"
        alt="Flower I"
        className="absolute 
        top-[20%] right-[17%] w-[18%] 
        md:top-[8%] md:right-[20%] md:w-[16%] 
        xl:top-[10%] xl:right-[-3%] xl:w-[32%] 
        h-auto"
      />

      {/* Flower Bottom Left */}
      <img
        src="/images/Flower II.png"
        alt="Flower II"
        className="absolute 
        bottom-[34%] left-[24%] w-[15%] 
        md:bottom-[30%] md:left-[24%] md:w-[15%] 
        xl:bottom-[35.5%] xl:left-[6.5%] xl:w-[25%] 
        h-auto"
      />
    </>
  );
};

export default MainHeartComponent;
{/* <img
        src="/images/Valentine_s Day Heart.png"
        alt="Valentine's Day Heart"
        className="absolute 
        top-[24%] left-[12.9%] w-[20%]
        sm:top-[24%] sm:left-[12.9%] sm:w-[10%]
        md:top-[29%] md:left-[12%] md:w-[76%]
        lg:top-[23%] lg:left-[12%] lg:w-[76%]
        xl:top-[18%] xl:left-[12%] xl:w-[76%]
        2xl:top-[15%] 2xl:left-[16%] 2xl:w-[69%]
        h-auto animate-jump-in animate-duration-[1200ms]"
      />

      <img
        src="/images/Flower I.png"
        alt="Flower I"
        className="absolute 
        top-[10%] right-[-3%] w-[32%] 
        sm:top-[10%] sm:right-[-3%] sm:w-[32%] 
        md:top-[23%] md:right-[-3%] md:w-[32%] 
        lg:top-[16.5%] lg:right-[-3%] lg:w-[32%] 
        xl:top-[10%] xl:right-[-3%] xl:w-[32%] 
        2xl:top-[6%] 2xl:right-[3.5%] 2xl:w-[28%] 
        h-auto"
      />

      <img
        src="/images/Flower II.png"
        alt="Flower II"
        className="absolute 
        bottom-[35.5%] left-[6.5%] w-[25%] 
        sm:bottom-[35.5%] sm:left-[6.5%] sm:w-[25%] 
        md:bottom-[40%] md:left-[6.5%] md:w-[25%] 
        lg:bottom-[37.5%] lg:left-[6.5%] lg:w-[25%] 
        xl:bottom-[35.5%] xl:left-[6.5%] xl:w-[25%] 
        2xl:bottom-[33%] 2xl:left-[10%] 2xl:w-[25%]
        h-auto"
      /> */}