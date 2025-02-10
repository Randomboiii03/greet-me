import React from 'react';

import MainHeartComponent from "./mid-ui/main-heart";
import PlayButtonComponent from "./mid-ui/play-button";
import RMidHeartComponent from "./mid-ui/random-heart/mid-heart";

const LeftComponent: React.FC = () => {
  return (
    <div className="h-full w-full md:w-1/2 relative">

        <MainHeartComponent/>
        <PlayButtonComponent/>
        <RMidHeartComponent/>

        <img
          src="/images/Love You.png"
          alt="Love You"
          className="absolute bottom-[2%] right-[-7%] w-[21%] h-auto animate-wiggle animate-infinite"
        />
        
    </div>
  );
};

export default LeftComponent;
