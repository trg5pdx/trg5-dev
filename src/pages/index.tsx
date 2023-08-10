import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Navbar from "../components/navbar";
import Intro from "../components/sections/intro";
import Section from "../components/section";
import Project from "../components/sections/project";
import Contact from "../components/sections/contact";
import Notification from "../components/notification";
import Footer from "../components/footer";
import { notifData, EmailStatus } from "../constants/constants";
import { useState } from "react";
import { data } from "../data/data";
import { gen_list, format_about } from "../utils/utils";

export default function Home() {
  const [notifState, setNotifState] = useState(
    new notifData(EmailStatus.None, "", false)
  );

  const changeNotif = (newState: notifData) => setNotifState(newState);

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
        <Section anchor="about" title="About Me">
          {format_about(data.about)}
        </Section>
        <Section anchor="skills" title="Skills">
          {gen_list(data.skills)}
        </Section>
        <Section anchor="school" title="Education">
          {gen_list(data.school)}
        </Section>
        <Section anchor="work" title="Work History">
          {gen_list(data.work)}
        </Section>
        <Section anchor="project" title="Projects Ive worked on">
          <Project />
        </Section>
        <Section anchor="contact" title="Contact me">
          <Contact notifState={notifState} setNotifState={changeNotif} />
        </Section>
        <Notification
          status={notifState.status}
          message={notifState.message}
          isOpen={notifState.isOpen}
          changeNotif={changeNotif}
        />
      </main>
      <Footer />
    </>
  );
}
