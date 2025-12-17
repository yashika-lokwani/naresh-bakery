import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";

interface HeaderProps {
  // Add any props if needed in the future
}

export default function Header({}: HeaderProps) {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.headBanner} aria-label="Home">
        <Image
          src="/bakery-header.png"
          alt="Bakery header"
           loading="eager"
          className={styles.banner}
          fill={true}
        />
      </Link>
    </div>
  );
}
