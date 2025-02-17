/* eslint-disable @next/next/no-img-element */

import React, { useState } from 'react';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

interface PlayButtonComponentProps {
  videoUrl?: string; // Optional video URL parameter
}

const PlayButtonComponent: React.FC<PlayButtonComponentProps> = ({ videoUrl }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <button
            className="absolute bg-center bg-contain bg-no-repeat animate-fade-up animate-once
            bottom-[1%] left-[34%] w-[33%] h-[20%] active:h-[19%]
            md:bottom-[1%] md:left-[34%] md:w-[33%] md:h-[20%] md:active:h-[19%]
            xl:bottom-[11%] xl:left-[26%] xl:w-[48%] xl:h-[20%] xl:active:h-[19%]"
            style={{ backgroundImage: "url('/images/Play Button.png')" }}
          >
          </button>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Special Message</DialogTitle>
            <DialogDescription>
              {videoUrl ? (
                <div className="mt-4">
                  <video
                    src={videoUrl}
                    controls
                    autoPlay
                    className="w-full rounded-lg"
                  />
                </div>
              ) : (
                "No video provided."
              )}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <img 
        src="/images/Flower V.png"  
        alt="Flower V" 
        className="absolute 
        bottom-[20%] right-[35%] w-[7%] 
        md:bottom-[20%] md:right-[35%] md:w-[7%] 
        xl:bottom-[20%] xl:right-[23.5%] xl:w-[12%] 
        h-auto" 
      />
    </>
  );
};

export default PlayButtonComponent;
