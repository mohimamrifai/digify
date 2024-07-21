import { PlayCircle } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function SectionOne() {
  return (
    <div className="px-6 py-10 flex flex-col space-y-10 md:p-10 max-w-7xl mx-auto">
      <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-5">
        <h2 data-aos="fade-right" data-aos-duration="1000" className="text-2xl font-semibold w-10/12 md:text-3xl lg:text-4xl">
          Deliver exceptional service with innovative and unconventional ideas.
        </h2>
        <p data-aos="fade-left" data-aos-duration="1000" className="text-sm text-muted-foreground w-11/12 md:text-base">
          We are an enthusiastic team of digital marketing experts committed to
          assisting businesses in thriving in the digital realm. With extensive
          experience and a profound grasp of the constantly changing online
          environment, we remain at the cutting edge of industry trends and
          technologies.
        </p>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000" className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-3">
        <div
          className="p-16 flex items-center justify-center text-4xl md:text-5xl font-medium rounded-lg md:w-9/12 relative overflow-hidden text-white
        "
        >
          <div className="my-10">How We Work</div>
          <div className="absolute top-0 left-0 -z-20">
            <Image src="/work.jpg" alt="Work" width={1000} height={1000} />
          </div>
          <div className="absolute w-full top-0 h-full left-0 -z-10 bg-gray-900/40"></div>
        </div>
        <div className="flex px-6 py-10 items-center rounded-xl md:items-start relative overflow-hidden text-white gap-3 md:flex-col rounded-br-[52px]">
          <h2 className="text-5xl font-medium lg:text-6xl">400+</h2>
          <div className="flex flex-col h-full justify-between md:space-y-3">
            <p className="text-xl font-medium">Project completed with excellence.</p>
            <div className="flex items-center">
              <div className="w-12 h-12 relative rounded-full overflow-hidden z-50">
                <Image src="/user-one.jpg" className="absolute" alt="user one" width={1000} height={1000} loading="lazy" />
              </div>
              <div className="w-12 h-12 relative rounded-full overflow-hidden -ms-2 z-40">
                <Image src="/user-two.jpg" className="absolute" alt="user one" width={1000} height={1000} loading="lazy" />
              </div>
              <div className="w-12 h-12 relative rounded-full overflow-hidden -ms-2 z-30">
                <Image src="/user-three.jpg" className="absolute" alt="user one" width={1000} height={1000} loading="lazy" />
              </div>
              <div className="w-12 h-12 relative rounded-full overflow-hidden -ms-2">
                <Image src="/user-one.jpg" className="absolute" alt="user one" width={1000} height={1000} loading="lazy" />
              </div>
            </div>
          </div>
          <div className="absolute top-0 left-0 -z-20">
            <Image src="/work-two.jpg" alt="Work" width={1000} height={1000} />
          </div>
          <div className="absolute w-full top-0 h-full left-0 -z-10 bg-gray-900/40"></div>
          <div className="absolute w-28 h-28 right-0 bottom-0 bg-blue-500 rounded-full flex items-center justify-center">
            <PlayCircle className="w-16 h-16" />
          </div>
        </div>
      </div>
    </div>
  );
}
