import styles from '@/styles/Home.module.css';
import { useState, forwardRef } from 'react';
import ProjectData from '../constants/constants';
import Project from './project';
import { data } from '../data/data';
import { Box, Modal } from '@mui/material';

const ProjectModal = forwardRef((props, ref) => {
  const projData = data.projects[props.projIndex];
  return (
    <Modal open={props.modal} onClose={() => props.modalState(false)}>
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
              <a href={projData.repo}>click here</a>
            </>
          )}
          {projData.other && (
            <>
              <br />
              {projData.otherTitle}:<a href={projData.other}> click here</a>
            </>
          )}
        </p>
      </Box>
    </Modal>
  );
});

export default ProjectModal;
