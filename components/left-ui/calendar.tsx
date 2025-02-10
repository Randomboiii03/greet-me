import React from 'react';


const CalendarComponent: React.FC = () => {
  return (
    <>
      <img
        src="/images/Calender.png"
        alt="Calender"
        className="absolute top-0 right-[2%] w-[58%] h-auto animate-fade-down"
      />

      <img
        src="/images/Flower III.png"
        alt="Flower III"
        className="absolute top-[17%] right-[-9.5%] w-[28%] h-auto"
      />
    </>
  );
};

export default CalendarComponent;