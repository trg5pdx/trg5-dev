import styles from '@/styles/Home.module.css';
import Head from 'next/head';
import Navbar from '../components/navbar';
import Link from 'next/link';
import Footer from '../components/footer';

const citations = () => {
  return (
    <>
      <Head>
        <title>Citations</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.section}>
          <h2 className={styles.section_title}>
            Resources I used for developing this site
          </h2>
          <div className={styles.section_body}>
            <ul className="list-disc">
              <li className="p-2">
                {
                  /* HTML */ `For navigation, I used this resource for building
                  a navigation bar with TailwindCSS. Link: `
                }
                <Link href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/react/navbars">
                  creative-tim.com
                </Link>
              </li>
              <li className="p-2">
                {
                  /* HTML */ `For setting up sending emails from a form, I used
                  the resource below for getting that working. Link: `
                }
                <Link href="https://dev.to/daliboru/how-to-send-emails-from-a-form-in-react-emailjs-27d1">
                  dev.to/daliboru
                </Link>
              </li>
              <li className="p-2">
                {
                  /* HTML */ `For generating the cards for the projects section,
                  I followed the link below for understanding the basics for
                  mapping, and I chose to set it up to use a static index since
                  thats something I didn't plan to have change dynamically.
                  Link: `
                }
                <Link href="https://adhithiravi.medium.com/why-do-i-need-keys-in-react-lists-dbb522188bbb">
                  adhithiravi.medium.com
                </Link>
              </li>
              <li className="p-2">
                {
                  /* HTML */ `
                    Used this for getting breakpoints to work with swiper
                  `
                }
                <Link href="https://dev.to/timo_ernst/how-to-set-responsive-breakpoints-in-swiper-react-3bf6">
                  dev.to/timo_ernst/
                </Link>
              </li>
              <li className="p-2">
                {
                  /* HTML */ `Used the example react portfolios below to help me
                  get started with developing this website, and give me ideas
                  for what I could do. I want to point out paytonjewell's
                  specifically since I took a look at that one for inspiration
                  on how to handle the data in my website. `
                }
                <br />
                {'Links: '}
                <br />
                <Link href="https://github.com/paytonjewell/ReactPortfolioTemplate">
                  {"PaytonJewell's portfolio template"}
                </Link>
                <br />
                <Link href="https://reactjsexample.com/tag/portfolio-page/">
                  {'React Portfolio Examples page'}
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default citations;
