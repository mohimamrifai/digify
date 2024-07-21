import { BellAlertIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

export default function GetStartedButton() {
  return (
    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
      <Link
        href="#"
        className="text-xs font-semibold leading-6 text-gray-900 border-2 rounded-full px-3 py-1 transition-all duration-300 hover:bg-blue-500 hover:text-white"
      >
        Get Started
      </Link>
      <div className="bg-blue-500 rounded-full flex items-center justify-center w-8 cursor-pointer h-8 ms-2 hover:scale-110 duration-150">
        <BellAlertIcon className="w-5 h-5 text-white" />
      </div>
    </div>
  );
}
