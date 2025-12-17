import styles from "./page.module.css";

export default function Loading() {
  const skeletonItems = Array.from({ length: 10 }, (_, i) => i);

  return (
    <div className={styles.page}>
      <main className={styles.loadingBox}>
          <h1 className={styles.loadingText}>Loading...</h1>
      </main>
      
    </div>
  );
}