import styles from '@/styles/Home.module.css';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.navbar_button}>
        Home
      </Link>
      <Link href="/#about" className={styles.navbar_button}>
        About
      </Link>
      <Link href="/#skills" className={styles.navbar_button}>
        Skills
      </Link>
      <Link href="/#school" className={styles.navbar_button}>
        School
      </Link>
      <Link href="/#work" className={styles.navbar_button}>
        Work
      </Link>
      <Link href="/#projects" className={styles.navbar_button}>
        Projects
      </Link>
      <Link href="/#contact" className={styles.navbar_button}>
        Contact
      </Link>
    </nav>
  );
};

export default Navbar;
