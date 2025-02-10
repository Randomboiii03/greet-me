import React from 'react';


const MailComponent: React.FC = () => {
  return (
    <>
      <img
          src="/images/Mail.png"
          alt="Mail"
          className="absolute h-auto animate-fade-right 
          bottom-[-10%] right-[3%] w-[33%] 
          md:bottom-[16%] md:right-[3%] md:w-[30%] 
          xl:bottom-[16%] xl:right-[-7%] xl:w-[76%]"
        />

      <img
          src="/images/Flower IV.png"
          alt="Flower IV"
          className="absolute h-auto 
          bottom-[-18%] right-[23%] w-[10%]
          md:bottom-[8%] md:right-[22%] md:w-[10%]
          xl:bottom-[10%] xl:right-[37%] xl:w-[29%]"
      />
    </>
  );
};

export default MailComponent;