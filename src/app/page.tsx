"use client";
import HeroSection from "./components/heroSection";
import ListFeature from "./components/listFeature";
import Ingredients from "./components/ingredients";
import Blogs from "./components/blogs";
import ContactUS from "./components/contactUS";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <>
      <HeroSection />
      <ListFeature />
      <Ingredients />
      <Blogs />
      <ContactUS />
    </>
  );
}
