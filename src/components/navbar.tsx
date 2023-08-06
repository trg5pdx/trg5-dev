import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import NavButton from './navbutton';
import { useTheme } from 'next-themes';

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  /* got the theme toggle code from:
   * https://dev.to/chinmaymhatre/implementing-dark-mode-in-nextjs-with-tailwind-css-and-next-themes-a4e
  * */
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme: theme;

  return (
    <nav className="sticky top-0 z-20 grid grid-cols-8 py-2 bg-neutral-200 dark:bg-neutral-800">
      <div className='col-span-7 lg:grid lg:grid-cols-7 flex flex-col lg:flex-row flex-wrap justify-items-center'>
        <button
        className="mx-4 cursor-pointer text-left text-xl leading-none lg:invisible"
          type="button"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <MenuIcon fontSize="large" />
          Menu
        </button>
        <ul
          className={
            'flex-grow list-none flex-col flex-wrap col-span-6' +
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
      </div>
      <button className='self-start' onClick={() => theme == "dark"? setTheme('light'): setTheme('dark')}>
        {currentTheme == 'light' ? <LightModeIcon /> : <DarkModeIcon />} 
      </button>
    </nav>
  );
};

export default NavBar;
