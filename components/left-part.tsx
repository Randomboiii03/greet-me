import React from 'react';

import CalendarComponent from './left-ui/calendar';
import MailComponent from './left-ui/mail';

const LeftComponent: React.FC = () => {
  return (
    <div className="h-full w-full md:w-1/4 relative">

      <CalendarComponent/>

      <img
        src="/images/Heart I.png"
        alt="Heart I"
        className="absolute top-[21%] left-[18%] w-[20%] h-auto"
      />

      <img
        src="/images/Forever.png"
        alt="Forever"
        className="absolute top-[31%] right-[20%] w-[40%] h-auto animate-wiggle animate-infinite"
      />


      <img
        src="/images/Heart III.png"
        alt="Heart III"
        className="absolute top-[37%] right-[-9%] w-[32%] h-auto"
      />

      <button
        // onClick={onClick}
        className="absolute top-[42%] left-[23%] w-[35%] h-[17%] bg-center bg-contain bg-no-repeat active:top-[42.5%] active:left-[23%] active:w-[33%] active:h-[16%]"
        style={{ backgroundImage: "url('/images/WAV Button.png')" }}
        >
      </button>

      <MailComponent />

    </div>
  );
};

export default LeftComponent;