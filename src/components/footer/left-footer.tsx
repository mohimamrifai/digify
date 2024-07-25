import React from "react";
import Logo from "../logo";
import SocialMedia from "./social-media";

export default function LeftFooter() {
  return (
    <div className="flex flex-col space-y-5">
      <Logo />
      <p className="text-base text-muted-foreground md:text-sm w-11/12">
        We provide a complete range of digital marketing services that encompass
        all aspects of your online presence. From SEO and social media marketing
        to content creation and PPC advertising, we have the expertise and
        resources to manage your diverse marketing needs
      </p>
      <SocialMedia />
    </div>
  );
}
