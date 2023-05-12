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
    <>
      <nav className={styles.navbar}>
        <button
          className="mx-4 cursor-pointer text-left text-xl leading-none lg:hidden"
          type="button"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <MenuIcon fontSize="large" />
        </button>
        <ul
          className={styles.nav_container + (navbarOpen ? ' flex justify-between' : ' hidden')}
        >
          <li className={styles.navbar_button_container}>
            <Link href="/" className={styles.navbar_button} onClick={() => setNavbarOpen(!navbarOpen)}>
              Home
            </Link>
          </li>
          <li className={styles.navbar_button_container}>
            <Link href="/#about" className={styles.navbar_button} onClick={() => setNavbarOpen(!navbarOpen)}>
              About
            </Link>
          </li>
          <li className={styles.navbar_button_container}>
            <Link href="/#skills" className={styles.navbar_button} onClick={() => setNavbarOpen(!navbarOpen)}>
              Skills
            </Link>
          </li>
          <li className={styles.navbar_button_container}>
            <Link href="/#school" className={styles.navbar_button} onClick={() => setNavbarOpen(!navbarOpen)}>
              School
            </Link>
          </li>
          <li className={styles.navbar_button_container}>
            <Link href="/#work" className={styles.navbar_button} onClick={() => setNavbarOpen(!navbarOpen)}>
              Work
            </Link>
          </li>
          <li className={styles.navbar_button_container}>
            <Link href="/#projects" className={styles.navbar_button} onClick={() => setNavbarOpen(!navbarOpen)}>
              Projects
            </Link>
          </li>
          <li className={styles.navbar_button_container}>
            <Link href="/#contact" className={styles.navbar_button} onClick={() => setNavbarOpen(!navbarOpen)}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
