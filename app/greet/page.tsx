"use client"

import MidComponent from "@/components/middle-part"
import LeftComponent from "@/components/left-part"
import RightComponent from "@/components/right-part"
import CenterRulerComponent from "@/components/center-ruler"

export default function Page() {
  return (
    <div 
    className="h-screen flex flex-col xl:flex-row bg-contain bg-center bg-no-repeat bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-400 via-red-300 to-white" 
    // style={{ backgroundImage: `url('/images/bg-grayscale.png')` }}
    >
      
      <CenterRulerComponent/>

      <LeftComponent />
      
      <MidComponent />

      <RightComponent /> 
    </div>
  )
}
