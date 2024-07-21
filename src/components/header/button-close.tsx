import { XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";

export default function ButtonClose({ setMobileMenuOpen }: any) {
  return (
    <button
      type="button"
      onClick={() => setMobileMenuOpen(false)}
      className="-m-2.5 rounded-md p-2.5 text-gray-700"
    >
      <span className="sr-only">Close menu</span>
      <XMarkIcon aria-hidden="true" className="h-6 w-6" />
    </button>
  );
}
