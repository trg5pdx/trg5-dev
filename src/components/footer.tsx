import styles from '@/styles/Home.module.css';
import Link from 'next/link';

const footer = () => {
  return (
    <footer className={styles.footer}>
      Made by Thomas Gardner, 2023
      <br />
      Developed using NextJS and React
      <br />
      Resources used:
      <Link href="/citations">click here</Link>
    </footer>
  );
};

export default footer;
