import styles from '@/styles/Home.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.navbar_button}>
        Home
      </a>
      <a href="/about" className={styles.navbar_button}>
        About
      </a>
      <a href="/" className={styles.navbar_button}>
        Projects
      </a>
      <a href="/" className={styles.navbar_button}>
        Contact
      </a>
    </nav>
  );
}

export default Navbar;
