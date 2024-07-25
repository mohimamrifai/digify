import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

export default function SocialMedia() {
  return (
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
  );
}
