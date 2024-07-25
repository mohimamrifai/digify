import React from "react";
import LeftFooter from "./left-footer";
import MidFooter from "./mid-footer";
import RightFooter from "./right-footer";

export default function Footer() {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-4 md:justify-between md:space-x-5 md:w-11/12 md:mx-auto space-y-5">
      <LeftFooter />
      <MidFooter />
      <RightFooter />
    </div>
  );
}
