import React from "react";

export default function Service() {
  return (
    <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-5">
      <h2 className="text-2xl font-semibold w-11/12 md:text-3xl md:w-full">
        Digital Marketing and SEO Services That Boost Traffic and Drive Revenue
        Growth
      </h2>
      <div className="flex flex-col space-y-3">
        <p className="text-muted-foreground text-sm md:w-10/12">
          We are the leading digital marketing agency for Branding Corp. We
          provide a comprehensive range of services to help clients enhance
          their search engine rankings and increase website traffic.
        </p>
        <button className="px-2 py-1 text-sm rounded-full border-2 w-max hover:bg-blue-500 hover:text-white transition-all duration-300">
          See More
        </button>
      </div>
    </div>
  );
}
