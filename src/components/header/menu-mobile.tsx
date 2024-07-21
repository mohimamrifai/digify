import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import React from "react";
import Logo from "../logo";
import ButtonClose from "./button-close";
import { ChevronDownIcon } from "lucide-react";
import Link from "next/link";
import { products, callsToAction } from "./data";
import { BellAlertIcon } from "@heroicons/react/24/outline";

export default function MenuMobile({ mobileMenuOpen, setMobileMenuOpen }: any) {
  return (
    <Dialog
      open={mobileMenuOpen}
      onClose={setMobileMenuOpen}
      className="lg:hidden"
    >
      <div className="fixed inset-0 z-10" />
      <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <Logo />
          <ButtonClose setMobileMenuOpen={setMobileMenuOpen} />
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              <Disclosure as="div" className="-mx-3">
                <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:ps-5 transition-all duration-300">
                  Product
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                  />
                </DisclosureButton>
                <DisclosurePanel className="mt-2 space-y-2">
                  {[...products, ...callsToAction].map((item) => (
                    <DisclosureButton
                      key={item.name}
                      as="a"
                      href={item.href}
                      className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-600 hover:bg-gray-50 hover:ps-5 transition-all duration-300"
                    >
                      {item.name}
                    </DisclosureButton>
                  ))}
                </DisclosurePanel>
              </Disclosure>
              <Link
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:ps-5 transition-all duration-300"
              >
                Features
              </Link>
              <Link
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:ps-5 transition-all duration-300"
              >
                Marketplace
              </Link>
              <Link
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:ps-5 transition-all duration-300"
              >
                Company
              </Link>
            </div>
            <div className="py-6 flex">
              <Link
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900 border-2 rounded-full px-3 py-1"
              >
                Get Started
              </Link>
              <div className="bg-blue-500 rounded-full flex items-center justify-center w-8 cursor-pointer h-8 ms-2">
                <BellAlertIcon className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  );
}
