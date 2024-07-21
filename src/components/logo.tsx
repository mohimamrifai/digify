import { display } from "@/lib/fonts";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link
      href="#"
      className={`${display.className} -m-1.5 p-1.5 text-2xl font-semibold hover:scale-105 transition-all duration-200`}
    >
      Digify
    </Link>
  );
}
