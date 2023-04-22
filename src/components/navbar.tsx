import styles from '@/styles/Home.module.css';
import Link from 'next/link';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.navbar_button}>
        Home
      </Link>
      <Link href="/about" className={styles.navbar_button}>
        About
      </Link>
      <Link href="/" className={styles.navbar_button}>
        Projects
      </Link>
      <Link href="/" className={styles.navbar_button}>
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
