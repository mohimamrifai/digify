'use client'
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion"

export default function HeroLeft() {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="lg:w-7/12 w-10/12 flex flex-col md:space-y-10 space-y-5"
    >
      <h1 className="text-4xl md:text-5xl font-semibold lg:w-10/12">
        Keep leading the way with our progressive mindset.
      </h1>
      <p className="text-muted-foreground md:w-8/12">
        A top-rated SEO agency specializing in digital marketing, design, and
        web development, dedicated to understanding your needs.
      </p>
      <div className="flex gap-5 items-center justify-between w-max">
        <button className="flex items-center justify-between py-2 px-5 bg-blue-500 rounded-full w-max text-white gap-3 font-semibold group">
          Schedule Call <ArrowRight className="group-hover:ms-2 duration-300 transition-all" />
        </button>
        <Link href="/" className="underline font-semibold">
          View Case Study
        </Link>
      </div>
      <div className="grid grid-cols-2 md:w-11/12 md:flex md:space-x-4 md:justify-between gap-5 py-5 md:pt-0">
        <div className="text-muted-foreground text-sm font-semibold">
          Trusted by the world's biggest brands
        </div>
        <div className="w-28">
          <Image
            src="/logo_satu.png"
            alt="logo satu"
            width={1000}
            height={1000}
            className="w-full h-full"
          />
        </div>
        <div className="w-28">
          <Image
            src="/logo_dua.png"
            alt="logo satu"
            width={1000}
            height={1000}
            className="w-full h-full"
          />
        </div>
        <div className="w-28">
          <Image
            src="/logo_tiga.png"
            alt="logo satu"
            width={1000}
            height={1000}
            className="w-full h-full"
          />
        </div>
      </div>
    </motion.div>
  );
}
