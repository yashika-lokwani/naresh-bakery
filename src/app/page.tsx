"use client";
import Lenis from "lenis";
import { useEffect } from "react";
import MainContent from "./components/MainContent";
import styles from "./page.module.css";

export default function Home() {
  useEffect(() => {
    // npm install lenis
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <div className={styles.page}>
      <MainContent />
    </div>
  );
}
