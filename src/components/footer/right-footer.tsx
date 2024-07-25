import React from "react";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import { GoLocation } from "react-icons/go";

export default function RightFooter() {
  return (
    <div className="flex flex-col space-y-3">
      <Link className="font-semibold md:pb-4 w-max" href="/">
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
  );
}
