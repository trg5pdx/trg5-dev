import styles from '@/styles/Home.module.css';
import { data } from '../../data/data';

const About = () => {
  return (
    <section className={styles.section} id="about">
      <h2 className={styles.section_title}>About Me</h2>
      <div className={styles.section_body}>{data.about}</div>
    </section>
  );
};

export default About;
