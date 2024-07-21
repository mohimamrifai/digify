"use client";
import { TrendingUp } from "lucide-react";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function HeroRight() {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="flex flex-col lg:w-5/12 mt-5 md:mt-0 p-5"
    >
      <div className="flex gap-3 relative">
        <div className="w-6/12 bg-gray-200 rounded-xl flex items-center justify-center rounded-tl-full overflow-hidden">
          <Image
            src="/hero.jpg"
            alt="Hero"
            width={1000}
            height={1000}
            className="h-full w-full object-cover"
          />
          <div className="absolute left-10 top-3 bg-blue-500 w-16 h-16 z-30 rounded-full flex items-center justify-center">
            <TrendingUp className="w-8 h-8 text-white" />
          </div>
        </div>
        <div className="w-6/12 p-3 lg:p-8 bg-gray-100 rounded-xl">
          <h3 className="text-5xl font-bold">400+</h3>
          <p className="text-sm text-muted-foreground mt-3">
            Some large corporations that we collaborate with and have great
            confidence in our services.
          </p>
          <div className="flex mt-5">
            <div className="h-2 w-16 bg-gray-900"></div>
            <div className="h-2 w-8 bg-gray-500"></div>
          </div>
        </div>
      </div>
      <div className="mt-2 bg-blue-500 h-full rounded text-white p-8 relative">
        <div className="flex items-center gap-2">
          <div className="h-1 w-20 bg-gray-300"></div>
          <p className="text-sm text-muted">Drive More Traffic and Sales </p>
        </div>
        <p className="text-lg font-semibold w-8/12 pt-3">
          Drive more traffic and product sales.
        </p>
        <div className="absolute bg-white w-10 h-32 right-5 bottom-0"></div>
        <div className="absolute bg-white w-10 h-24 right-16 bottom-0"></div>
        <div className="absolute bg-white w-10 h-16 right-28 bottom-0"></div>
      </div>
    </motion.div>
  );
}
