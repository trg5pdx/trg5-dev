import styles from '@/styles/Home.module.css';
import { data } from '../../data/data';
import { gen_list } from '../../utils/utils';

const School = () => {
  return (
    <section className={styles.section} id="school">
      <h2 className={styles.section_title}>Education</h2>
      <div className={styles.section_body}>
        <div className={styles.list_format}>{gen_list(data.school)}</div>
      </div>
    </section>
  );
};

export default School;
