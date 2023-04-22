import styles from '@/styles/Home.module.css';
import { data } from '../../data/data';

const About = () => {
  return (
    <div className={styles.section}>
      <h2 className={styles.section_title}>About Me</h2>
      <div className={styles.section_body}>{data.about}</div>
    </div>
  );
};

export default About;
