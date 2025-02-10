"use client"

import MidComponent from "@/components/middle-part"
import LeftComponent from "@/components/left-part"
import RightComponent from "@/components/right-part"

export default function Page() {
  return (
    <div className="h-screen flex flex-row bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-400 via-red-300 to-white">
      <LeftComponent />
      
      < MidComponent />

      <RightComponent /> 
    </div>
  )
}
