/* eslint-disable @next/next/no-img-element */

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

interface CarouselPluginProps {
  images: string[];
}

export function CarouselPlugin({ images }: CarouselPluginProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  )

  return (
    <div className="relative flex justify-center items-center">
      <img
        src="/images/Frame.png"
        alt="Frame"
        className="absolute h-auto transform -rotate-[23deg] z-10 
        -top-[15.7%] left-[0.5%]
        md:-top-9 md:left-1
        xl:-top-11 xl:left-1"
      />

      <div className="w-[69%] h-auto bg-black rounded-3xl">
        <Carousel
          opts={{loop: true}}
          plugins={[plugin.current]}
          className="w-full max-w-xs"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="">
            {images.map((imageSrc, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <img
                        src={imageSrc}
                        alt={`Image ${index + 1}`}
                        className="object-cover w-full h-full"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious />
          <CarouselNext /> */}
        </Carousel>
      </div>
    </div>
  )
}
