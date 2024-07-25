import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Image from "next/image";

export default function SliderNews() {
  return (
    <Carousel>
      <CarouselContent>
        {Array.from({ length: 3 }).map((item, index: number) => (
          <CarouselItem key={index} className="group basis-4/5 md:basis-2/6">
            <div className="p-5 rounded-lg relative border-4 h-[200px] md:h-[300px] w-[220px] md:w-[300px] flex flex-col justify-between overflow-hidden">
              <div className="flex items-center space-x-2">
                <div className="h-1 w-8 bg-gray-300"></div>
                <p className="text-xs text-white">Ai Corporation. 2022</p>
              </div>
              <p className="text-sm text-white">
                Ai Wave - Ai Chatbot Mobile App
              </p>
              <div className="absolute left-0 top-0 -z-10">
                <Image
                  src="/ai.jpg"
                  alt="ai jpg"
                  width={1000}
                  height={1000}
                  className="group-hover:scale-110 transition-all duration-200"
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
