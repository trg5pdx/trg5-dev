import styles from '@/styles/Home.module.css';
import { useState, useEffect, forwardRef, SetStateAction } from 'react';
import Link from 'next/link';
import ProjectData from '../constants/constants';
import Project from './sections/project';
import { data } from '../data/data';
import { Box, Button, Modal } from '@mui/material';

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
    <Modal open={modal} onClose={() => modalState(false)}>
      <Box className={styles.modal}>
        <div className="grid grid-cols-2">
          <h2 className={styles.proj_title}>{projData.title}</h2>
          <Button
            size="medium"
            className={styles.card_button}
            onClick={() => {
              modalState(false);
            }}
          >
            Close
          </Button>
        </div>
        <br />
        <p className={styles.proj_desc}>
          {projData.desc}
          <br />
          <br />
          {projData.repo != '' && (
            <>
              Repo:
              <Link href={projData.repo}>click here</Link>
            </>
          )}
          {projData.other && (
            <>
              <br />
              {projData.otherTitle}:
              <Link href={projData.other}> click here</Link>
            </>
          )}
        </p>
      </Box>
    </Modal>
  );
};

export default ProjectModal;
