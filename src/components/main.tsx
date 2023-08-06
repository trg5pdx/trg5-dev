import { useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const Main = ({children}) => {
  const [lightMode, setLightMode] = useState('default');
  
  const toggleTheme = () => {
    console.log("ran");
    /*
    const localTheme = window.localStorage.getItem('lightMode');
    const savedMode = localTheme === 'inverted' ? 'inverted' : 'default';
    console.log(localTheme)
    console.log(savedMode)
    if(savedMode === 'default') {
      window.localStorage.setItem('lightMode', 'inverted');
      setLightMode('inverted');
    } else {
      window.localStorage.setItem('lightMode', 'default');
      setLightMode('default');
      }
    */

    
  }

  return (
    <body>
      <Navbar toggleTheme={() => toggleTheme()}/>    
      <main className='grid w-[96%] mx-2 h-full grid-cols-6 justify-items-center scroll-smooth lg:mx-10'>
        {children}
      </main>
      <Footer />
    </ body>
  );
}

export default Main;
