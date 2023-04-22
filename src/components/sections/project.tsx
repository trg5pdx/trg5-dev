import styles from '@/styles/Home.module.css';
import { data } from '../../data/data';
import ProjectModal from '../modal';
import { useState, useRef } from 'react';
import { Button, Card, CardActions, CardContent } from '@mui/material';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const Project = () => {
  const [projModal, toggleModal] = useState(false);
  const [projIndex, projIndexState] = useState(0);

  const responsive = {
    0: { items: 1 },
    768: { items: 2, itemsFit: 'contain' },
    1200: { items: 3, itemsFit: 'contain' },
  };

  /* 
    Using index since the list I'm building is static
    Source: 
    https://adhithiravi.medium.com/why-do-i-need-keys-in-react-lists-dbb522188bbb 
  */
  const project_list = data.projects.map((projData, index) => (
    <Card key={index} variant="outlined" className={styles.card_style}>
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
            toggleModal(true);
          }}
        >
          Learn more
        </Button>
      </CardActions>
    </Card>
  ));

  return (
    <div className={styles.section}>
      <h2 className={styles.section_title}>{"Projects I've worked on"}</h2>
      <ProjectModal
        modal={projModal}
        modalState={(val: boolean) => toggleModal(val)}
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
    </div>
  );
};

export default Project;
