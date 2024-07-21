import { ArrowRight } from "lucide-react";
import React from "react";

export default function CallToAction() {
  return (
    <div data-aos="fade-up" data-aos-duration="1000" className="bg-gray-900 space-y-5 text-white p-10 w-11/12 rounded-lg mx-auto flex flex-col items-center justify-between">
      <h3 className="text-xl font-semibold md:text-4xl">Are you ready to collaborate with us?</h3>
      <button className="px-3 py-1 border-white bg-white text-gray-900 border-2 rounded-full flex items-center gap-3 md:text-xl">
        Get Started <ArrowRight />
      </button>
    </div>
  );
}
