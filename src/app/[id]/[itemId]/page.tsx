import { notFound } from "next/navigation";
import ImageWithLoading from "../../components/ImageWithLoading";
import ScrollToTop from "../../components/ScrollToTop";
import { cakesCategories } from "../../data";
import { categoryImageExists } from "../../utils/imageUtils";
import styles from "./page.module.css";
import { Metadata } from "next";

interface ItemDetailProps {
  params: Promise<{
    id: string;
    itemId: string;
  }>;
}
export const metadata: Metadata = {
  title: "Naresh Bakers Menu",
  description: "Naresh Bakers Menu",
};
export default async function ItemDetail({ params }: ItemDetailProps) {
  const { id, itemId } = await params;
  const categoryId = parseInt(id);
  const itemIndex = parseInt(itemId);

  const category = cakesCategories.find((c) => c.id === categoryId);

  if (!category) {
    notFound();
  }

  // Check if the image actually exists in the filesystem
  const imageExists = await categoryImageExists(category.image, itemIndex);

  if (!imageExists) {
    notFound();
  }

  return (
    <div className={styles.page}>
      <ScrollToTop />
      <main className={styles.mainContent}>
        <div className={styles.itemDetail}>
          <div className={styles.img}>
            <ImageWithLoading
              src={`/categories/${category.image}/${category.image}-${itemIndex}.png`}
              alt={`${category.name} ${itemIndex + 1}`}
            />
          </div>
          <span className={styles.cakeIndex}>{itemIndex < 9 ? `0${itemIndex + 1}` : itemIndex + 1}</span>
          {/* <Suspense fallback={<span>Loading...</span>}>
            <Image
              src={`/categories/${category.image}/${category.image}-${itemIndex}.png`}
              alt={`${category.name} ${itemIndex + 1}`}
              
              fill={true}
              sizes="(max-width: 600px) 100vw, 33vw"
            />
          </Suspense> */}
        </div>
        <p className={styles.itemDescription}>
          Starting from {category?.minWeight ?? 1}Kg | Customizable | Flavours
          of Your Choice
        </p>
      </main>
    </div>
  );
}
