import { PlayCircle } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function ProjectCompleted() {
  return (
    <div className="flex px-6 py-10 rounded-xl items-start relative overflow-hidden text-white gap-3 md:flex-col rounded-br-[52px]">
      <h2 className="text-4xl md:text-5xl font-medium lg:text-6xl">400+</h2>
      <div className="flex flex-col h-full justify-between md:space-y-3">
        <p className="text-sm md:text-xl font-medium mb-3">
          Project completed with excellence.
        </p>
        <div className="flex items-center">
          <div className="w-12 h-12 relative rounded-full overflow-hidden z-50">
            <Image
              src="/user-one.jpg"
              className="absolute"
              alt="user one"
              width={1000}
              height={1000}
              loading="lazy"
            />
          </div>
          <div className="w-12 h-12 relative rounded-full overflow-hidden -ms-2 z-40">
            <Image
              src="/user-two.jpg"
              className="absolute"
              alt="user one"
              width={1000}
              height={1000}
              loading="lazy"
            />
          </div>
          <div className="w-12 h-12 relative rounded-full overflow-hidden -ms-2 z-30">
            <Image
              src="/user-three.jpg"
              className="absolute"
              alt="user one"
              width={1000}
              height={1000}
              loading="lazy"
            />
          </div>
          <div className="w-12 h-12 relative rounded-full overflow-hidden -ms-2">
            <Image
              src="/user-one.jpg"
              className="absolute"
              alt="user one"
              width={1000}
              height={1000}
              loading="lazy"
            />
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
  );
}
