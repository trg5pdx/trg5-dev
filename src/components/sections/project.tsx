import styles from '@/styles/Home.module.css';
import { data } from '../../data/data';
import ProjectModal from '../modal';
import { useState } from 'react';
import { Button, Card, CardActions, CardContent } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { StyledEngineProvider } from '@mui/material/styles';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

/* 
  Fixed MUI style override with the cards using:
  https://stackoverflow.com/questions/73731487/css-module-classes-work-on-development-but-are-overridden-on-production
*/

const Project = () => {
  const [projModal, toggleModal] = useState(false);
  const [projIndex, projIndexState] = useState(0);

  const project_list = data.projects.map((projData, index) => (
    <StyledEngineProvider injectFirst key={index}>
      <SwiperSlide tag="li">
        <Card variant="outlined" className={styles.card_style}>
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
      </SwiperSlide>
    </StyledEngineProvider>
  ));

  return (
    <section className={styles.section} id="projects">
      <h2 className={styles.section_title}>{"Projects I've worked on"}</h2>
      <div className="mx-0 rounded bg-neutral-300 p-6 text-lg dark:bg-neutral-800">
        <ProjectModal
          modal={projModal}
          modalState={(val: boolean) => toggleModal(val)}
          projIndex={projIndex}
        />
        <Swiper
          slidesPerView={1}
          centeredSlides={true}
          spaceBetween={10}
          modules={[]}
          wrapperTag="ul"
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {project_list}
        </Swiper>
      </div>
    </section>
  );
};

export default Project;
