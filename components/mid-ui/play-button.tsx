import React from 'react';

const PlayButtonComponent: React.FC = () => {
  return (
    <>
      <button
        // onClick={onClick}
        className="absolute bottom-[3%] left-[26%] w-[48%] h-[20%] bg-center bg-contain bg-no-repeat active:bottom-[4%] active:left-[27%] active:w-[46%] active:h-[18%] animate-fade-up animate-once"
        style={{ backgroundImage: "url('/images/Play Button.png')" }}
        >
      </button>

      <img 
        src="/images/Flower V.png"  
        alt="Flower V" 
        className="absolute bottom-[12.5%] right-[23.5%] w-[12%] h-auto" 
      />
    </>
  );
};

export default PlayButtonComponent;
