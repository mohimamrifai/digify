import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const display = Playfair_Display({
  subsets: ["latin"],
});

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
          <div className="bg-white p-2 w-max rounded-lg">
            <FaFacebook className="text-gray-900 w-6 h-6" />
          </div>
          <div className="bg-white p-2 w-max rounded-lg">
            <FaInstagram className="text-gray-900 w-6 h-6" />
          </div>
          <div className="bg-white p-2 w-max rounded-lg">
            <FaLinkedin className="text-gray-900 w-6 h-6" />
          </div>
          <div className="bg-white p-2 w-max rounded-lg">
            <FaTwitter className="text-gray-900 w-6 h-6" />
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-3 px-2 pt-5 pb-12">
        <Link className="font-semibold" href="/">Navigation</Link>
        <Link className="font-normal text-sm text-muted-foreground" href="/">Service</Link>
        <Link className="font-normal text-sm text-muted-foreground" href="/">Agency</Link>
        <Link className="font-normal text-sm text-muted-foreground" href="/">Case Study</Link>
        <Link className="font-normal text-sm text-muted-foreground" href="/">Resources</Link>
        <Link className="font-normal text-sm text-muted-foreground" href="/">Contact</Link>
      </div>
      <div className="flex flex-col space-y-3 px-2 pt-5 pb-12">
        <Link className="font-semibold" href="/">Navigation</Link>
        <Link className="font-normal text-sm text-muted-foreground" href="/">Service</Link>
        <Link className="font-normal text-sm text-muted-foreground" href="/">Agency</Link>
        <Link className="font-normal text-sm text-muted-foreground" href="/">Case Study</Link>
        <Link className="font-normal text-sm text-muted-foreground" href="/">Resources</Link>
        <Link className="font-normal text-sm text-muted-foreground" href="/">Contact</Link>
      </div>
      <div className="flex flex-col space-y-3 px-2 pt-5 pb-12">
        <Link className="font-semibold" href="/">Navigation</Link>
        <Link className="font-normal text-sm text-muted-foreground" href="/">Service</Link>
        <Link className="font-normal text-sm text-muted-foreground" href="/">Agency</Link>
        <Link className="font-normal text-sm text-muted-foreground" href="/">Case Study</Link>
        <Link className="font-normal text-sm text-muted-foreground" href="/">Resources</Link>
        <Link className="font-normal text-sm text-muted-foreground" href="/">Contact</Link>
      </div>
    </div>
  );
}
