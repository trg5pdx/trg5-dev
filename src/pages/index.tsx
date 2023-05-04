import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Navbar from '../components/navbar';
import Intro from '../components/sections/intro';
import About from '../components/sections/about';
import Skills from '../components/sections/skills';
import School from '../components/sections/school';
import Work from '../components/sections/work';
import Project from '../components/sections/project';
import Contact from '../components/sections/contact';
import Footer from '../components/footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>trg5</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <Intro />
        <About />
        <Skills />
        <School />
        <Work />
        <Project />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
