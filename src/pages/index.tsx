import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Navbar from '../components/navbar';
import Project from '../components/sections/project';
import About from '../components/sections/about';
import Skills from '../components/sections/skills';
import Contact from '../components/sections/contact';

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
        <div className="m-6 h-full w-full lg:grid lg:grid-cols-6">
          <div className="col-span-3 mx-2 w-11/12 self-center py-11 lg:mx-0 lg:w-full lg:py-0">
            <h1 className={styles.main_title}>{"Hi, I'm Thomas"}</h1>
            <br />
            <h2 className={styles.main_subtitle}>
              {"I'm a software developer from Portland"}
            </h2>
          </div>
          <Image
            src="https://placekitten.com/600/400"
            alt="a picture of a cat"
            className="col-span-3 mx-2 w-11/12 lg:mx-0 lg:w-full"
            width={600}
            height={400}
          />
          <About />
          <Skills />
          <Project />
          <Contact />
        </div>
      </main>
    </>
  );
}
