import React from "react";
import FaqTitleAndText from "./faq-title-and-text";
import FaqAccordionts from "./faq-accordionts";

export default function FAQ() {
  return (
    <div data-aos="fade-up" data-aos-duration="1000" className="mx-auto flex flex-col p-6 lg:px-16 md:flex-row space-y-5 md:space-x-16 md:justify-between md:space-y-0 md:py-10 bg-white">
      <FaqTitleAndText />
      <FaqAccordionts />
    </div>
  );
}
