import { ArrowRight } from "lucide-react";
import React from "react";

export default function Blog() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {Array.from({ length: 3 }).map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-xl p-5 flex flex-col space-y-5"
        >
          <div className="flex justify-between items-center">
            <div className="w-2 h-2 rounded-full bg-red-500"></div>
            <p className="text-sm">5 min read</p>
          </div>
          <h2 className="text-2xl font-semibold w-11/12">
            How a Digital Marketing Agency Can Enhance Your Business
          </h2>
          <div className="flex md:flex-row flex-col justify-between gap-3 items-start md:items-center">
            <p className="text-muted-foreground text-sm w-11/12">
              We are the top digital marketing agency for Branding Corp. We
              provide a comprehensive arra...
            </p>
            <button className="px-3 py-1 rounded-full border-2 h-max hover:bg-blue-500 hover:text-white transition-all duration-300">
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
