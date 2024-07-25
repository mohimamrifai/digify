import React from "react";

const features = [
  {
    name: "All Works",
    qty: 20,
  },
  {
    name: "Digital Marketing",
    qty: 5,
  },
  {
    name: "UI / UX",
    qty: 10,
  },
  {
    name: "Branding",
    qty: 5,
  },
];

export default function SectionTwoFeatures() {
  return (
    <div className="grid grid-cols-1 pe-10 md:grid-cols-4 md:gap-5 gap-2 md:w-10/12 md:mx-auto">
      {features.map((f) => (
        <div key={f.name} className="px-2 py-1 text-xs md:text-sm border-2 rounded-full text-center font-semibold text-white cursor-pointer hover:bg-orange-400 transition-all duration-200">
          {f.name} [{f.qty}]
        </div>
      ))}
    </div>
  );
}
