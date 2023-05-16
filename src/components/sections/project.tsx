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

  const project_list = data.projects.map((projData, index) => (
    <Card key={index} variant="outlined" className={styles.card_style}>
      <CardContent className={styles.card_format}>
        <h2 className={styles.proj_title}>{projData.title}</h2>
        <br />
        <p className={styles.card_desc}>{projData.desc}</p>
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
    <section className={styles.section} id="projects">
      <h2 className={styles.section_title}>{"Projects I've worked on"}</h2>
      <ProjectModal
        modal={projModal}
        modalState={(val: boolean) => toggleModal(val)}
        projIndex={projIndex}
      />
      {/* fix innerWidth, currently only limits it to the 2nd breakpoint and
      otherwise errors will pop up in the console*/}
      <div className={styles.section_body}>
        <AliceCarousel
          mouseTracking
          innerWidth={768}
          items={project_list}
          responsive={responsive}
          controlsStrategy="alternate"
        />
      </div>
    </section>
  );
};

export default Project;
