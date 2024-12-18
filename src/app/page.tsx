"use client";
import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "./components/heroSection";
import ListFeature from "./components/listFeature";
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
    <div>
      <HeroSection />
    </div>
  );
}
