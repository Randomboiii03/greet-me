import React from 'react';

import CalendarComponent from './left-ui/calendar';
import MailComponent from './left-ui/mail';
import CenterRulerComponent from './center-ruler';

const LeftComponent: React.FC = () => {
  return (
    <div className="h-1/4 xl:h-full w-full xl:w-1/4 relative">

      <CenterRulerComponent/>

      <CalendarComponent/>

      {/* Top Left Heart */}
      <img
        src="/images/Heart I.png"
        alt="Heart I"
        className="absolute h-auto 
        top-[35%] left-[33%] w-[12%]
        md:top-[15%] md:left-[31%] md:w-[10%]
        xl:top-[27%] xl:left-[18%] xl:w-[20%]"
      />

      <img
        src="/images/Forever.png"
        alt="Forever"
        className="absolute h-auto animate-wiggle animate-infinite 
        top-[105%] right-[37%] w-[26%]
        md:top-[75%] md:right-[39%] md:w-[23%]
        xl:top-[35%] xl:right-[20%] xl:w-[40%]"
      />

      {/* Top Right Heart */}
      <img
        src="/images/Heart III.png"
        alt="Heart III"
        className="absolute h-auto 
        top-[20%] right-[25%] w-[12%]
        md:top-[5%] md:right-[30%] md:w-[12%]
        xl:top-[40%] xl:right-[-9%] xl:w-[32%]"
      />

      <button
        // onClick={onClick}
        className="absolute bg-center bg-contain bg-no-repeat 
        top-[69%] left-[27%] w-[45%] h-[33%] active:top-[69.5%] active:left-[27%] active:w-[45%] active:h-[32%] 
        md:top-[34%] md:left-[27%] md:w-[45%] md:h-[33%] md:active:top-[34.5%] md:active:left-[27%] md:active:w-[45%] md:active:h-[32%] 
        xl:top-[42%] xl:left-[23%] xl:w-[35%] xl:h-[17%] xl:active:top-[42.5%] xl:active:left-[23%] xl:active:w-[34%] xl:active:h-[16%]"
        style={{ backgroundImage: "url('/images/WAV Button.png')" }}
        >
      </button>

      <MailComponent />

    </div>
  );
};

export default LeftComponent;