import React from "react";
import Service from "./service";
import Blog from "./blog";

export default function ServiceAndBlog() {
  return (
    <div data-aos="fade-up" data-aos-duration="1000" className="p-6 md:p-10 md:flex md:flex-col space-y-10">
      <Service />
      <Blog />
    </div>
  );
}
