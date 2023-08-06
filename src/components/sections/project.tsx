import styles from "@/styles/Home.module.css";
import { data } from "../../data/data";
import ProjectModal from "../modal";
import Card from "../card";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

/* 
  Fixed MUI style override with the cards using:
  https://stackoverflow.com/questions/73731487/css-module-classes-work-on-development-but-are-overridden-on-production
*/

const Project = () => {
  const [projModal, toggleModal] = useState(false);
  const [projIndex, projIndexState] = useState(0);

  const project_list = data.projects.map((projData, index) => (
    <SwiperSlide tag="li" key={index}>
      <Card
        title={projData.title}
        desc={projData.desc}
        index={index}
        openModal={(arg0: number) => {
          projIndexState(arg0);
          toggleModal(true);
        }}
      />
    </SwiperSlide>
  ));

  // Changed the classes in here from the home classes to inline so the theme toggle works
  return (
    <section className={styles.section} id="projects">
      <h2
        className={`mx-2 my-3 w-fit rounded p-2 text-3xl font-bold bg-neutral-300 
    text-purple-800 dark:bg-neutral-800 dark:text-purple-300`}
      >
        {"Projects I've worked on"}
      </h2>
      <div className=" mx-2 p-6 text-lg rounded bg-neutral-300 dark:bg-neutral-800">
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
