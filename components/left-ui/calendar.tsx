import React, { useEffect, useState } from 'react';

interface CalendarComponentProps {
  number: number;
  word: string;
}

const CalendarComponent: React.FC<CalendarComponentProps> = ({ number, word }) => {

  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    // Increment number from 0 to the set number
    if (currentNumber < number) {
      const interval = setInterval(() => {
        setCurrentNumber((prev) => {
          if (prev < number) return prev + 1;
          clearInterval(interval);
          return prev;
        });
      }, 500); // Speed of increment, adjust as needed
    }
  }, [currentNumber, number]);

  return (
    <>
      <div className="absolute h-auto animate-fade-down 
          top-[47%] left-[3%] w-[30%]
          md:top-[10%] md:left-[3%] md:w-[27%]
          xl:top-[10%] xl:left-[39%] xl:w-[58%]">
        <img
          src="/images/Calender.png"
          alt="Calender"
          className=""
        />
        <div className="absolute top-[20%] left-[13%] w-[80%] h-[80%] flex flex-col items-center justify-center transform -rotate-[14deg]">
          <span className="text-gray-500 text-[3rem] md:text-[4rem] xl:text-[5rem] leading-none">{currentNumber}</span>
          <span className="text-gray-500 text-[1rem] md:text-[2rem] xl:text-[2.5rem] leading-none">{word}</span>
        </div>
      </div>

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