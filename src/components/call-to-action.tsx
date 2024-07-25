import { ArrowRight } from "lucide-react";
import React from "react";

export default function CallToAction() {
  return (
    <div className="bg-gray-900 space-y-5 text-white p-10 w-11/12 rounded-lg mx-auto flex flex-col items-center justify-between">
      <h3 className="text-xl font-semibold md:text-4xl text-center">Are you ready to collaborate with us?</h3>
      <button className="px-3 py-1 border-white bg-white text-gray-900 border-2 rounded-full flex items-center gap-3 group">
        Get Started <ArrowRight className="w-5 h-5 group-hover:ms-2 transition-all duration-200" />
      </button>
    </div>
  );
}
