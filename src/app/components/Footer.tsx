import styles from "./Footer.module.css";
import ImageWithLoading from "./ImageWithLoading";

interface FooterProps {
  // Add any props if needed in the future
}

export default function Footer({}: FooterProps) {
  const phone = "9005163430";
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.disclaimer}>
          <span>
            Cakes pictures are like dreams - real may look different, but still delicious!
          </span>
        </div>
        <div className={styles.linkButtons}>
          <a href="https://maps.app.goo.gl/9g2MVSAfTAjMPYpp9" target="_blank">
            <div className={styles.icons}>
              <ImageWithLoading alt={`Call`} src={`/icons/location.svg`} />
            </div>
          </a>
          <a href={`tel:+91${phone}`}>
            <div className={styles.icons}>
              <ImageWithLoading alt={`Call`} src={`/icons/phone.svg`} />
            </div>
          </a>
        </div>
      </div>
      <p className={styles.copyright}>© Nareshbakery. All Right Reserved</p>
    </footer>
  );
}
