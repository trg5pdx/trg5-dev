import styles from '@/styles/Home.module.css';
import { useState } from 'react';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import NavButton from './navbutton';

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-20 flex flex-col flex-wrap justify-start py-2 bg-neutral-200 dark:bg-neutral-800">
      <button
        className="mx-4 cursor-pointer text-left text-xl leading-none lg:hidden"
        type="button"
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        <MenuIcon fontSize="large" />
        Menu
      </button>
      <ul
        className={
          'flex-grow list-none flex-col flex-wrap justify-evenly' +
          ' lg:flex lg:flex-row lg:justify-center' +
          (navbarOpen ? ' flex justify-between' : ' hidden')
        }
      >
        <NavButton path="/" title="Home" navState={setNavbarOpen} />
        <NavButton path="/#about" title="About" navState={setNavbarOpen} />
        <NavButton path="/#skills" title="Skills" navState={setNavbarOpen} />
        <NavButton path="/#school" title="School" navState={setNavbarOpen} />
        <NavButton path="/#work" title="Work" navState={setNavbarOpen} />
        <NavButton
          path="/#projects"
          title="Projects"
          navState={setNavbarOpen}
        />
        <NavButton path="/#contact" title="Contact" navState={setNavbarOpen} />
      </ul>
    </nav>
  );
};

export default NavBar;
