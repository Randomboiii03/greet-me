import React from 'react';

import CalendarComponent from './left-ui/calendar';
import MailComponent from './left-ui/mail';
import CenterRulerComponent from './center-ruler';
import PlayAudioComponent from './left-ui/play-audio';

interface LeftComponentProps {
  audio: string;
  number: number;
  word: string;
  message: string;
}

const LeftComponent: React.FC<LeftComponentProps> = ({ audio, number, word, message }) => {
  return (
    <div className="h-1/4 xl:h-full w-full xl:w-1/4 relative">

      <CenterRulerComponent/>

      <CalendarComponent number={ number } word={ word }/>

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

      <PlayAudioComponent audio={ audio }/>

      <MailComponent message={ message }/> 

    </div>
  );
};

export default LeftComponent;