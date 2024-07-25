import { Mail, Phone } from "lucide-react";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { GoLocation } from "react-icons/go";

const display = Playfair_Display({
  subsets: ["latin"],
});

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

export default function Footer() {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-4 md:justify-between md:space-x-5 md:w-11/12 md:mx-auto">
      <div className="flex flex-col space-y-5">
        <Link
          href="/"
          className={`${display.className} text-3xl font-semibold`}
        >
          Digify
        </Link>
        <p className="text-base text-muted-foreground md:text-sm w-11/12">
          We provide a complete range of digital marketing services that
          encompass all aspects of your online presence. From SEO and social
          media marketing to content creation and PPC advertising, we have the
          expertise and resources to manage your diverse marketing needs
        </p>
        <div className="flex items-center space-x-2">
          <div className="bg-white p-2 w-max rounded-lg hover:bg-blue-500 group transition-all duration-300 cursor-pointer">
            <FaFacebook className="text-gray-900 w-6 h-6 group-hover:text-white" />
          </div>
          <div className="bg-white p-2 w-max rounded-lg hover:bg-blue-500 group transition-all duration-300 cursor-pointer">
            <FaInstagram className="text-gray-900 w-6 h-6 group-hover:text-white" />
          </div>
          <div className="bg-white p-2 w-max rounded-lg hover:bg-blue-500 group transition-all duration-300 cursor-pointer">
            <FaLinkedin className="text-gray-900 w-6 h-6 group-hover:text-white" />
          </div>
          <div className="bg-white p-2 w-max rounded-lg hover:bg-blue-500 group transition-all duration-300 cursor-pointer">
            <FaTwitter className="text-gray-900 w-6 h-6 group-hover:text-white" />
          </div>
        </div>
      </div>
      {linksFooter.map((item) => (
        <div key={item.title} className="flex flex-col space-y-3">
          <Link className="font-semibold pb-4 w-max" href="/">
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
      <div className="flex flex-col space-y-3">
        <Link className="font-semibold pb-4 w-max" href="/">
          Contact
        </Link>
        <Link
          className="font-normal text-sm text-muted-foreground w-max flex items-center group"
          href="/"
        >
          <Phone className="w-4 h-4 me-2" />
          <span className="group-hover:ms-2 transition-all duration-200">
            +62 0123456789{" "}
          </span>
        </Link>
        <Link
          className="font-normal text-sm text-muted-foreground w-max flex items-center group"
          href="/"
        >
          <Mail className="w-4 h-4 me-2" />
          <span className="group-hover:ms-2 transition-all duration-200">
            admin@email.com
          </span>
        </Link>
        <Link
          className="font-normal text-sm text-muted-foreground w-max flex items-center group"
          href="/"
        >
          <GoLocation className="w-4 h-4 me-2" />
          <span className="group-hover:ms-2 transition-all duration-200">
            Jl. Kiri Kanan No.123 Jakarta barat
          </span>
        </Link>
      </div>
    </div>
  );
}
