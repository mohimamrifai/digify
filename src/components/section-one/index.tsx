import { PlayCircle } from "lucide-react";
import Image from "next/image";
import React from "react";
import TitleAndtext from "./title-and-text";
import ImageAndText from "./image-and-text";

export default function SectionOne() {
  return (
    <div className="px-6 py-10 flex flex-col space-y-10 md:p-10 max-w-7xl mx-auto">
      <TitleAndtext />
      <ImageAndText />
    </div>
  );
}
