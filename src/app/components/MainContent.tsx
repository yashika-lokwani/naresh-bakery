import Link from "next/link";
import ScrollFadeObserver from "../[id]/ScrollFadeObserver";
import { cakesCategories } from "../data";
import ImageWithLoading from "./ImageWithLoading";
import styles from "./MainContent.module.css";

interface MainContentProps {
  // Add any props if needed in the future
}

export default function MainContent({}: MainContentProps) {
  return (
    <>
      <ScrollFadeObserver />
      <main className={styles.mainContent}>
        <div className={styles.headingText}>
          <h6>Celebrate Sweet Moments<br/> with Naresh Bakers!</h6>
          {/* <br />
          <span>
            From birthdays to weddings, every occasion deserves a slice of
            happiness, because every special day deserves a special cake!
          </span> */}
        </div>
        <div className={styles.cakesGrid}>
          {cakesCategories.map((cake, index) => (
            <Link
              key={cake.id}
              href={`/${cake.id}`}
              className={`${styles.cakeCard} ${styles.fadeOnScroll}`}
              data-delay={index * 150}
            >
              <div className={styles.cakeImageContainer}>
                <ImageWithLoading
                  src={`/banners/${cake.image}.png`}
                  alt={`${cake.name} Photo`}
                />
              </div>
              <div className={styles.cakeContent}>
                <h2 className={styles.cakeName}>{cake.name}</h2>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
