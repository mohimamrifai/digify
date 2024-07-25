import Image from "next/image";
import React from "react";

export default function PiringMusik() {
  return (
    <div className="border-2 rounded-full w-max">
      <div className="md:p-24 p-10 border-4 border-gray-500 relative rounded-full overflow-hidden w-max">
        <div className="bg-orange-400 w-[100px] h-[100px] rounded-full flex items-center justify-center text-white text-sm relative z-10">
          See Detail
        </div>
        <div className="absolute z-0 left-0 top-0 overflow-hidden hover:scale-110 transition-all duration-300">
          <Image src="/dvd.jpg" alt="dvd" width={1000} height={1000} />
        </div>
      </div>
    </div>
  );
}
