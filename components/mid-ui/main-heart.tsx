import React from 'react';

const MainHeartComponent: React.FC = () => {
  return (
    <>
      <img
        src="/images/Valentine_s Day Heart.png"
        alt="Valentine's Day Heart"
        className="absolute top-[10%] left-[12.5%] w-[76%] h-auto animate-jump-in animate-duration-[1200ms]"
      />

      <img
        src="/images/Flower I.png"
        alt="Flower I"
        className="absolute top-[0.25%] right-[-2%] w-[31%] h-auto"
      />

      <img
        src="/images/Flower II.png"
        alt="Flower II"
        className="absolute bottom-[32%] left-[6.5%] w-[25%] h-auto"
      />
    </>
  );
};

export default MainHeartComponent;
