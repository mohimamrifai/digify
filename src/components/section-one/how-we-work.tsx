import Image from "next/image";
import React from "react";

export default function HowWeWork() {
  return (
    <div
      className="p-10 md:p-16 flex items-center justify-center text-4xl md:text-5xl font-medium rounded-lg md:w-9/12 relative overflow-hidden text-white group
        "
    >
      <div className="my-10 text-center text-2xl">How We Work</div>
      <div className="absolute top-0 left-0 -z-20 h-full w-full">
        <Image src="/work.jpg" alt="Work" width={1000} height={1000} className="group-hover:scale-110 transition-all duration-1000 group-hover:blur-sm h-full w-full object-cover" />
      </div>
      <div className="absolute w-full top-0 h-full left-0 -z-10 bg-gray-900/40"></div>
    </div>
  );
}
