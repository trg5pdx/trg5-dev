import styles from '@/styles/Home.module.css';
import { useState, useEffect, forwardRef, SetStateAction } from 'react';
import Link from 'next/link';
import { data } from '../data/data';
import { Backdrop, Box, Button, Fade, Modal } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';

const ProjectModal = ({
  modal,
  modalState,
  projIndex,
}: {
  modal: boolean;
  modalState: (arg0: boolean) => void;
  projIndex: number;
}) => {
  /* 
    Done to prevent doc. being undef. on initial load
    link: https://dev.to/typicoul/fixing-next-js-referenceerror-document-is-not-defined-2jgi

    also used this to prevent the background from scrolling
    link: https://medium.com/react-camp/how-to-fight-the-body-scroll-2b00267b37ac
  */
  useEffect(() => {
    const main = document.querySelector('html');
    if (main) {
      if (modal) {
        main.style.overflow = 'hidden';
      } else {
        main.style.overflow = 'unset';
      }
    }
  }, [modal]);

  const projData = data.projects[projIndex];
  return (
    <Modal
      open={modal}
      onClose={() => modalState(false)}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 700,
        },
      }}
    >
      <Fade in={modal}>
        <Box
          className={
            'absolute left-1/2 top-1/2 z-50 h-5/6 w-full translate-x-[-50%] ' +
            'translate-y-[-50%] rounded-xl border-solid border-gray-400 ' +
            'bg-gray-300 p-8 dark:bg-neutral-900 lg:h-auto lg:min-h-fit lg:max-w-[900px] '
          }
        >
          <header className="grid grid-cols-2">
            <h2 className="justify-self-start text-2xl font-bold">
              {projData.title}
            </h2>
            <button
              className={styles.proj_button + ' justify-self-end'}
              onClick={() => {
                modalState(false);
              }}
            >
              Close
            </button>
          </header>
          <br />
          <main className="h-5/6 overflow-scroll text-lg lg:hax-h-[600px] lg:px-4 px-1">
            {projData.desc.map((data, index) => (
              <section key={index}>
                {data}
                <br />
                <br />
              </section>
            ))}
            {projData.repo != '' && (
              <Link href={projData.repo}>
                <button className={styles.proj_button}>
                  <GitHubIcon />
                  Source Code
                </button>
              </Link>
            )}
            {projData.other && (
              <Link href={projData.other}>
                <button className={styles.proj_button}>
                  <LanguageIcon />
                  {projData.otherTitle}
                </button>
              </Link>
            )}
          </main>
        </Box>
      </Fade>
    </Modal>
  );
};

export default ProjectModal;
