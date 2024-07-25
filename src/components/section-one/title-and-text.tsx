import React from "react";

export default function TitleAndtext() {
  return (
    <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-5">
      <h2
        data-aos="fade-right"
        data-aos-duration="1000"
        className="text-3xl font-semibold w-10/12 md:text-3xl lg:text-4xl"
      >
        Deliver exceptional service with innovative and unconventional ideas.
      </h2>
      <p
        data-aos="fade-left"
        data-aos-duration="1000"
        className="text-muted-foreground w-11/12 text-base"
      >
        We are an enthusiastic team of digital marketing experts committed to
        assisting businesses in thriving in the digital realm. With extensive
        experience and a profound grasp of the constantly changing online
        environment, we remain at the cutting edge of industry trends and
        technologies.
      </p>
    </div>
  );
}
