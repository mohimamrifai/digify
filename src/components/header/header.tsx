"use client";

import { useState } from "react";
import Logo from "../logo";
import OpenMenuButton from "./open-menu-button";
import NavLinks from "./nav-links";
import MenuMobile from "./menu-mobile";
import GetStartedButton from "./get-started-button";
import { motion } from "framer-motion"


export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header initial={{y: -100, opacity: 0}} animate={{ y: 0, opacity: 1 }} className="bg-transparent">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <Logo />
        <OpenMenuButton setMobileMenuOpen={setMobileMenuOpen} />
        <NavLinks />
        <GetStartedButton />
      </nav>
      <MenuMobile mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
    </motion.header>
  );
}
