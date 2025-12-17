"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Multiple approaches to ensure scroll reset works with Lenis
    const scrollToTop = () => {
      // Method 1: Try Lenis scroll if it exists
      const lenis = (window as any).lenis;
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      }

      // Method 2: Force browser scroll
      window.scrollTo({ top: 0, behavior: "instant" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    // Execute immediately
    scrollToTop();

    // Multiple timeouts to ensure it works even with async operations
    const timeout1 = setTimeout(scrollToTop, 0);
    const timeout2 = setTimeout(scrollToTop, 10);
    // const timeout3 = setTimeout(scrollToTop, 100);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      //   clearTimeout(timeout3);
    };
  }, [pathname]); // Re-run effect whenever the route changes

  return null; // This component doesn't render anything
}
