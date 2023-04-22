import styles from '@/styles/Home.module.css';
import { useState, forwardRef, SetStateAction } from 'react';
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
  const projData = data.projects[projIndex];
  return (
    <Modal open={modal} onClose={() => modalState(false)}>
      <Box className={styles.modal}>
        <h2 className={styles.proj_title}>{projData.title}</h2>
        <br />
        <p className={styles.proj_desc}>{projData.desc}</p>
        <br />
        <br />
        <p className={styles.proj_desc}>
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
        <Button
          size="medium"
          className={styles.card_button}
          onClick={() => {
            modalState(false);
          }}
        >
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default ProjectModal;
