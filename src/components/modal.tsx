import styles from '@/styles/Home.module.css';
import { useState, forwardRef } from 'react';
import ProjectData from '../constants/constants';
import Project from './project';
import { Box, Modal } from '@mui/material';

const ProjectModal = forwardRef((props, ref) => {
  const [projData, setProjData] = useState(new ProjectData('', '', ''));

  return (
    <Modal open={props.modal} onClose={() => props.modalState(false)}>
      <Box className="absolute left-1/2 top-1/2 w-[700px]  translate-x-[-50%] translate-y-[-50%] rounded-xl border-solid border-gray-400 bg-gray-300 p-8">
        <Project projData={projData} />
      </Box>
    </Modal>
  );
});

export default ProjectModal;
