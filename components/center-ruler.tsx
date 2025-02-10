import React from 'react';


const CenterRulerComponent: React.FC = () => {
  return (
    <>
      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-red-500"></div>
      
      <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-red-500"></div>
    </>
  );
};

export default CenterRulerComponent;
