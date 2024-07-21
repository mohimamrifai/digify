import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Image from "next/image";

export default function SectionTwo() {
  return (
    <div data-aos="fade-up" data-aos-duration="1000" className="flex flex-col space-y-3 md:space-y-8 bg-blue-500 mx-auto rounded-lg md:py-20 w-11/12 px-2 py-6">
      <h2 className="text-2xl font-semibold md:text-2xl md:mx-auto md:text-center md:w-8/12 text-white lg:text-3xl">
        Actual instances of how we have assisted companies in reaching their
        marketing goals.
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 md:gap-5 gap-2 md:w-10/12 md:mx-auto">
        <div className="px-2 py-1 text-sm border-2 rounded-full text-center font-semibold text-white cursor-pointer hover:bg-orange-400 transition-all duration-200">
          All Works [20]
        </div>
        <div className="px-2 py-1 text-sm border-2 rounded-full text-center  text-white font-semibold cursor-pointer hover:bg-orange-400 transition-all duration-200">
          Digital Marketing [5]
        </div>
        <div className="px-2 py-1 text-sm border-2 rounded-full text-center font-semibold text-white cursor-pointer hover:bg-orange-400 transition-all duration-200">
          UI / UX [10]
        </div>
        <div className="px-2 py-1 text-sm border-2 rounded-full text-center font-semibold text-white cursor-pointer hover:bg-orange-400 transition-all duration-200">
          Branding [5]
        </div>
      </div>
      <div className="flex py-5 space-x-3 md:space-x-10 overflow-hidden lg:justify-between lg:ps-24">
        <div>
          <div className="md:p-24 p-10 border-4 border-gray-500 relative rounded-full overflow-hidden">
            <div className="bg-orange-400 w-[100px] h-[100px] rounded-full flex items-center justify-center text-white text-sm relative z-10">
              See Detail
            </div>
            <div className="absolute z-0 left-0 top-0 overflow-hidden hover:scale-110 transition-all duration-300">
              <Image src="/dvd.jpg" alt="dvd" width={1000} height={1000} />
            </div>
          </div>
        </div>
        <Carousel>
          <CarouselContent>
            <CarouselItem className="md:basis-3/5 lg:basis-2/5 basis-2/4 group">
              <div className="p-5 rounded-lg relative border-4 h-[200px] md:h-[300px] flex flex-col justify-between overflow-hidden">
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
            <CarouselItem className="md:basis-3/5 lg:basis-2/5 basis-2/4 group">
              <div className="p-5 rounded-lg relative border-4 h-[200px] md:h-[300px] flex flex-col justify-between overflow-hidden">
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
            <CarouselItem className="md:basis-3/5 lg:basis-2/5 basis-2/4 group">
              <div className="p-5 rounded-lg relative border-4 h-[200px] md:h-[300px] flex flex-col justify-between overflow-hidden">
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
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
