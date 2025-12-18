import Link from "next/link";
import { notFound } from "next/navigation";
import ImageWithLoading from "../components/ImageWithLoading";
import ScrollToTop from "../components/ScrollToTop";
import { cakesCategories } from "../data";
import { getCategoryImages } from "../utils/imageUtils";
import ScrollFadeObserver from "./ScrollFadeObserver";
import styles from "./page.module.css";

export async function generateMetadata({ params }: any) {
  const { id } = await params;
  const cake = cakesCategories.find((c) => c.id === parseInt(id));
  return {
    title: `${cake?.name}`,
    description: `Naresh Bakers Menu - ${cake?.name}`,
  };
}

interface CakeDetailProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function CakeDetail({ params }: CakeDetailProps) {
  const { id } = await params;
  const cake = cakesCategories.find((c) => c.id === parseInt(id));

  if (!cake) {
    notFound();
  }

  // Get actual images from the filesystem
  const images = await getCategoryImages(cake.image);

  // Extract image indices from filenames
  const imageIndices = images.map((filename) => {
    const match = filename.match(/-(\d+)\./);
    return match ? parseInt(match[1]) : 0;
  });

  return (
    <div className={styles.page}>
      <ScrollToTop />
      <ScrollFadeObserver />
      <main className={styles.mainContent}>
        <div className={styles.cakeDetail}>
          <h1 className={styles.categoryName}>{cake.name}</h1>
          <section className={styles.grid2}>
            {imageIndices.length === 0 ? (
              <div className={styles.noImages}>
                <p>No images available for this category</p>
              </div>
            ) : (
              imageIndices.map((imageIndex, index) => (
                <Link
                  key={imageIndex}
                  href={`/${id}/${imageIndex}`}
                  className={`${styles.gridItem} ${styles.fadeOnScroll}`}
                  data-delay={index * 100}
                >
                  <div className={styles.img}>
                    <ImageWithLoading
                      src={`/categories/${cake.image}/${cake.image}-${imageIndex}.png`}
                      alt={`${cake.name} ${imageIndex + 1}`}
                    />
                  </div>
                  <span className={styles.cakeIndex}>{imageIndex < 9 ? `0${imageIndex + 1}` : imageIndex + 1}</span>
                </Link>
              ))
            )}
          </section>
          <br />

          <div className={styles.cakeInfo}></div>
        </div>
      </main>
    </div>
  );
}
