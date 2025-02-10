import React from 'react';


const FrameComponent: React.FC = () => {
  return (
    <>
        <img
          src="/images/Frame.png"
          alt="Frame"
          className="absolute bottom-[17%] left-[-14%] w-[79%] h-auto animate-fade-left"
        />

        <img
          src="/images/Love Button.png"
          alt="Love Button"
          className="absolute bottom-[41%] right-[18%] w-[33%] h-auto"
        />
    </>
  );
};

export default FrameComponent;