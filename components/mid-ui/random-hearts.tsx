/* eslint-disable @next/next/no-img-element */

import React from 'react';

const RandomHeartsComponent: React.FC = () => {
  return (
    <>
      {/* Top Left */}
      <img 
        src="/images/Heart I_1.png"  
        alt="Heart I_1" 
        className="absolute top-[13%] left-[2.5%] w-[14%] h-auto" 
      />

      {/* Bottom Right */}
      <img 
          src="/images/Heart IV.png"  
          alt="Heart IV" 
          className="absolute bottom-[28%] right-[7%] w-[16%] h-auto" 
        />

        {/* Bottom Left */}
        <img 
          src="/images/Heart II.png"  
          alt="Heart II" 
          className="absolute bottom-[12%] left-[4.5%] w-[20%] h-auto" 
        />
    </>
  );
};

export default RandomHeartsComponent;
