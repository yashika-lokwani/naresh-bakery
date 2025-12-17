import ImageWithLoading from "./ImageWithLoading";
import styles from "./WhatsAppOverlay.module.css";

const WhatsAppOverlay = () => {
  const phone = "9005163430";
  const message = "Hello! I want to order a cake";

  return (
    <div className={styles.imgContainer}>
      <div className={styles.imgNew}>
        <a
          href={`https://wa.me/91${phone}?text=${message}`} // replace with your number
          target="_blank"
          rel="noopener noreferrer"
        >
          <ImageWithLoading alt="WhatsApp" src="/icons/whatsapp.svg" />
        </a>
      </div>
    </div>
  );
};

export default WhatsAppOverlay;
