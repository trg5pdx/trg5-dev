import styles from '@/styles/Home.module.css';
import { useState } from 'react';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import { Menu } from '@mui/material';

/* 
  Got the navbar styling from here:
  https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/react/navbars
*/

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <button
        className="mx-4 cursor-pointer text-left text-xl leading-none lg:hidden"
        type="button"
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        <MenuIcon fontSize="large" />
      </button>
      <div
        className={
          'flex-grow items-start lg:flex lg:items-center' +
          (navbarOpen ? ' flex' : ' hidden')
        }
      >
        <ul className={styles.nav_container}>
          <li>
            <Link href="/" className={styles.navbar_button}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/#about" className={styles.navbar_button}>
              About
            </Link>
          </li>
          <li>
            <Link href="/#skills" className={styles.navbar_button}>
              Skills
            </Link>
          </li>
          <li>
            <Link href="/#school" className={styles.navbar_button}>
              School
            </Link>
          </li>
          <li>
            <Link href="/#work" className={styles.navbar_button}>
              Work
            </Link>
          </li>
          <li>
            <Link href="/#projects" className={styles.navbar_button}>
              Projects
            </Link>
          </li>
          <li>
            <Link href="/#contact" className={styles.navbar_button}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
