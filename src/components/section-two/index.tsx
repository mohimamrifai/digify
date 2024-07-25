import React from "react";
import SectionTwoTitle from "./section-two-title";
import SectionTwoFeatures from "./section-two-features";
import PiringMusik from "./piring-musik";
import SliderNews from "./slider-news";

export default function SectionTwo() {
  return (
    <div data-aos="fade-up" data-aos-duration="1000" className="flex flex-col space-y-3 md:space-y-8 bg-blue-500 mx-auto rounded-lg md:py-20 w-11/12 py-10 ps-10">
      <SectionTwoTitle />
      <SectionTwoFeatures />
      <div className="flex flex-col md:flex-row py-5 space-x-3 md:space-x-10 overflow-hidden lg:ps-24 space-y-5 md:space-y-0">
        <PiringMusik />
        <SliderNews />
      </div>
    </div>
  );
}
