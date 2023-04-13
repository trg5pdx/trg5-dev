import styles from '@/styles/Home.module.css';
import ProjectData from '../constants/constants';
import { data } from '../data/data';
import ProjectModal from '../components/modal';
import { useState, useRef } from 'react';
import { Button, Card, CardActions, CardContent } from '@mui/material';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const project = (props) => {
  const [modal, modalState] = useState(false);
  const [projIndex, projIndexState] = useState(0);

  const responsive = {
    0: { items: 1 },
    768: { items: 2, itemsFit: 'contain' },
    1200: { items: 3, itemsFit: 'contain' },
  };

  const project_list = data.projects.map((projData, index) => (
    <Card variant="outlined" className={styles.card_style}>
      <CardContent className={styles.card_format}>
        <h2 className={styles.proj_title}>{projData.title}</h2>
        <br />
        <p className={styles.proj_desc}>{projData.desc}</p>
      </CardContent>
      <CardActions>
        <Button
          size="medium"
          className={styles.card_button}
          onClick={() => {
            projIndexState(index);
            modalState(true);
          }}
        >
          Learn more
        </Button>
      </CardActions>
    </Card>
  ));
  const test = [
    <div className="relative">aaa</div>,
    <div className="relative">b</div>,
  ];

  return (
    <>
      <ProjectModal
        modal={modal}
        modalState={(val) => modalState(val)}
        projIndex={projIndex}
      />
      {/* fix innerWidth, currently only limits it to the 2nd breakpoint and
      otherwise errors will pop up in the console*/}
      <AliceCarousel
        mouseTracking
        innerWidth={768}
        items={project_list}
        responsive={responsive}
        controlsStrategy="alternate"
      />
    </>
  );
};

export default project;
