import React from "react";
import HeroLeft from "./hero-left";
import HeroRight from "./hero-right";

export default function Hero() {
  return (
    <div className="mx-auto flex flex-col max-w-7xl px-5 py-3 lg:px-8 md:flex-row">
      <HeroLeft />
      <HeroRight />
    </div>
  );
}
