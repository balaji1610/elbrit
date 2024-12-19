"use client";
import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "./components/heroSection";
import ListFeature from "./components/listFeature";
import Ingredients from "./components/ingredients";
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
    </>
  );
}
