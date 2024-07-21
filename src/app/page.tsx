'use client'
import CallToAction from "@/components/call-to-action";
import FAQ from "@/components/faq/faq";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Hero from "@/components/hero/hero";
import SectionOne from "@/components/section-one";
import SectionThree from "@/components/section-three";
import SectionTwo from "@/components/section-two";
import ServiceAndBlog from "@/components/service-blog";
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <main className="flex flex-col space-y-10">
      <Header />
      <Hero />
      {/* <SectionOne /> */}
      {/* <SectionTwo /> */}
      {/* <SectionThree /> */}
      {/* <FAQ /> */}
      {/* <ServiceAndBlog /> */}
      {/* <CallToAction /> */}
      {/* <Footer /> */}
    </main>
  );
}
