import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from "@headlessui/react";
import Link from "next/link";
import React from "react";
import { products, callsToAction } from './data'
import { ChevronDownIcon } from "lucide-react";


export default function NavLinks() {
  return (
    <PopoverGroup className="hidden md:ms-10 lg:pt-2 lg:flex lg:gap-x-12">
      <Popover className="relative">
        <PopoverButton className="flex border-none outline-none items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 hover:underline">
          Service
          <ChevronDownIcon
            aria-hidden="true"
            className="h-5 w-5 flex-none text-gray-400"
          />
        </PopoverButton>

        <PopoverPanel
          transition
          className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
        >
          <div className="p-4">
            {products.map((item) => (
              <div
                key={item.name}
                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
              >
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                  <item.icon
                    aria-hidden="true"
                    className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                  />
                </div>
                <div className="flex-auto">
                  <Link
                    href={item.href}
                    className="block font-semibold text-gray-900"
                  >
                    {item.name}
                    <span className="absolute inset-0" />
                  </Link>
                  <p className="mt-1 text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
            {callsToAction.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
              >
                <item.icon
                  aria-hidden="true"
                  className="h-5 w-5 flex-none text-gray-400"
                />
                {item.name}
              </Link>
            ))}
          </div>
        </PopoverPanel>
      </Popover>

      <Link href="#" className="text-sm font-semibold leading-6 text-gray-900 hover:underline">
        Features
      </Link>
      <Link href="#" className="text-sm font-semibold leading-6 text-gray-900 hover:underline">
        Marketplace
      </Link>
      <Link href="#" className="text-sm font-semibold leading-6 text-gray-900 hover:underline">
        Company
      </Link>
    </PopoverGroup>
  );
}
