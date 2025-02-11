import React from 'react';

import MainHeartComponent from "./mid-ui/main-heart";
import PlayButtonComponent from "./mid-ui/play-button";
import RandomHeartsComponent from "./mid-ui/random-heart/random-hearts";

interface PlayButtonComponentProps {
  videoUrl?: string; // Optional video URL parameter
}


const LeftComponent: React.FC<PlayButtonComponentProps> = ({ videoUrl }) => {
  return (
    <div className="h-1/2 xl:h-full w-full xl:w-1/2 relative">

        <MainHeartComponent/>
        <PlayButtonComponent videoUrl={ videoUrl } />
        <RandomHeartsComponent/>

        <img
          src="/images/Love You.png"
          alt="Love You"
          className="absolute h-auto animate-wiggle animate-infinite 
          bottom-[10%] right-[10%] w-[16%]
          md:bottom-[10%] md:right-[10%] md:w-[16%]
          xl:bottom-[12%] xl:right-[-7%] xl:w-[21%]"
        />
        
    </div>
  );
};

export default LeftComponent;
