import React from "react";
import { PlayCircle } from "lucide-react";
import Image from "next/image";
import HowWeWork from "./how-we-work";
import ProjectCompleted from "./project-completed";

export default function ImageAndText() {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-3"
    >
      <HowWeWork />
      <ProjectCompleted />
    </div>
  );
}
