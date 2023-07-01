import styles from '@/styles/Home.module.css';
import Link from 'next/link';

const footer = () => {
  return (
    <footer className={styles.footer}>
      Made by Thomas Gardner, 2023
      <br />
      Developed using NextJS and React
      <br />
      {'Resources used: '}
      <Link href="/citations">citations</Link>
      <br />
      {'Source code for this website: '}
      <Link href="https://github.com/trg5pdx/trg5-dev">Github</Link>
    </footer>
  );
};

export default footer;
