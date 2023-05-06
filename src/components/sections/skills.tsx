import styles from '@/styles/Home.module.css';
import { data } from '../../data/data';
import { gen_list } from '../../utils/utils';

const Skills = () => {
  return (
    <section className={styles.section} id="skills">
      <h2 className={styles.section_title}>Skills</h2>
      <div className={styles.section_body}>
        <div className={styles.list_format}>{gen_list(data.skills)}</div>
      </div>
    </section>
  );
};

export default Skills;
