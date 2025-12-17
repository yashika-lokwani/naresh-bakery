"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./ImageWithLoading.module.css";

interface ImageWithLoadingProps {
  src: string;
  alt: string;
}

export default function ImageWithLoading({ src, alt }: ImageWithLoadingProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && (
        <div className={styles.loadingImage}>
          <span className={styles.loader}></span>
        </div>
      )}
      <Image
        className={styles.img}
        src={src}
        alt={alt}
        fill={true}
        loading="lazy"
        sizes="(max-width: 600px) 100vw, 33vw"
        onLoad={() => setIsLoading(false)}
        style={{ opacity: isLoading ? 0 : 1, transition: "opacity 0.3s" }}
      />
    </>
  );
}
