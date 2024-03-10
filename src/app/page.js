"use client";

import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import About from "@/components/About/About";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Reviews from "@/components/Reviews/Reviews";
import Pricing from "@/components/Pricing/Pricing";
import Blogs from "@/components/Blogs/Blogs";
import Footer from "@/components/Footer/Footer";

const page = () => {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
    Aos.refresh();
  }, []);
  return (
    <div>
      <Hero />
      <About />
      <Reviews />
      <Pricing />
      <Blogs />
    </div>
  );
};

export default page;
