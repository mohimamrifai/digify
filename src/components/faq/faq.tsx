import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export default function FAQ() {
  return (
    <div data-aos="fade-up" data-aos-duration="1000" className="mx-auto flex flex-col p-6 lg:px-16 md:flex-row space-y-5 md:space-x-16 md:justify-between md:space-y-0 md:py-10 bg-white">
      <div className="flex flex-col space-y-5 md:w-6/12">
        <h2 className="text-4xl font-semibold">Digify FAQs</h2>
        <p className="md:text-xl">
          As a top digital marketing agency, we are committed to offering
          extensive educational resources and addressing common questions to
          assist our clients.
        </p>
        <div>
          <button className="py-2 px-4 rounded-full border-2 text-sm font-semibold">
            More Questions
          </button>
          <button className="py-2 px-4 text-sm underline font-semibold">
            Contanct Us
          </button>
        </div>
      </div>
      <div className="md:w-6/12">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Why is digital marketing essential for my business?
            </AccordionTrigger>
            <AccordionContent>
              Digital marketing enables businesses to connect with a broader
              audience, attract leads, drive website traffic, and enhance brand
              visibility. It offers measurable outcomes, supports targeted
              marketing efforts, and allows businesses to adapt and optimize
              strategies using data and insights.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Why is digital marketing essential for my business?
            </AccordionTrigger>
            <AccordionContent>
              Digital marketing enables businesses to connect with a broader
              audience, attract leads, drive website traffic, and enhance brand
              visibility. It offers measurable outcomes, supports targeted
              marketing efforts, and allows businesses to adapt and optimize
              strategies using data and insights.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Why is digital marketing essential for my business?
            </AccordionTrigger>
            <AccordionContent>
              Digital marketing enables businesses to connect with a broader
              audience, attract leads, drive website traffic, and enhance brand
              visibility. It offers measurable outcomes, supports targeted
              marketing efforts, and allows businesses to adapt and optimize
              strategies using data and insights.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
