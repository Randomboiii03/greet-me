import React from 'react';


const CalendarComponent: React.FC = () => {
  return (
    <>
      <img
        src="/images/Calender.png"
        alt="Calender"
        className="absolute h-auto animate-fade-down 
        top-[47%] left-[3%] w-[30%]
        md:top-[10%] md:left-[3%] md:w-[27%]
        xl:top-[10%] xl:left-[39%] xl:w-[58%]"
      />

      <img
        src="/images/Flower III.png"
        alt="Flower III"
        className="absolute h-auto 
        top-[83%] left-[28%] w-[10%]
        md:top-[60%] md:left-[25%] md:w-[10%]
        xl:top-[24%] xl:left-[82%] xl:w-[28%]"
      />
    </>
  );
};

export default CalendarComponent;