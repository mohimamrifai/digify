import Link from "next/link";
import React from "react";

const linksFooter = [
  {
    title: "Navigation",
    links: ["Service", "Agency", "Case Study", "Resource", "Contact"],
  },
  {
    title: "Licence",
    links: ["Privacy Policy", "Copyright", "Email Address"],
  },
];

export default function MidFooter() {
  return (
    <>
      {linksFooter.map((item) => (
        <div key={item.title} className="flex flex-col space-y-3">
          <Link className="font-semibold md:pb-4 w-max" href="/">
            {item.title}
          </Link>
          {item.links.map((l) => (
            <Link
              key={l}
              className="font-normal text-sm text-muted-foreground w-max hover:ms-2 transition-all duration-200"
              href="/"
            >
              {l}
            </Link>
          ))}
        </div>
      ))}
    </>
  );
}
