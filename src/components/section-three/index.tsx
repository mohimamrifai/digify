import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "John Smith",
    position: "CEO, Tech Solutions",
    testimony: "This product has transformed our business processes. The efficiency and ease of use are unparalleled. Highly recommend to any company looking to streamline their operations."
  },
  {
    id: 2,
    name: "Jane Doe",
    position: "Marketing Director, Creative Agency",
    testimony: "We've seen a significant increase in client engagement since using this service. The features are innovative and the support team is incredibly responsive."
  },
  {
    id: 3,
    name: "Alice Johnson",
    position: "HR Manager, FinTech Corp",
    testimony: "The user interface is intuitive and our team adapted to it quickly. The overall experience has been fantastic and it's improved our workflow remarkably."
  },
  // Add more testimonials as needed
];

export default function SectionThree() {
  return (
    <div data-aos="fade-up" data-aos-duration="1000" className="mx-auto flex flex-col lg:px-8 md:flex-row w-11/12">
      <Carousel>
        <CarouselContent >
          {testimonials.map((testimonial) => (
            <CarouselItem className="py-10" key={testimonial.id}>
              <div className="md:flex md:flex-col md:justify-between">
                <p className="font-semibold text-2xl md:text-3xl w-11/12 md:mb-10">{testimonial.testimony}</p>
                <div className="flex items-center mt-5 gap-2">
                  <div className="w-10 h-10 rounded-full relative overflow-hidden">
                    <Image src="/user-one.jpg" alt="user one" width={1000} height={1000}  />
                  </div>
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.position}</div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute right-20 bottom-16 md:bottom-10 lg:bottom-16">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
}
