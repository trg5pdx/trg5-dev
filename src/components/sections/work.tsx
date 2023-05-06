import styles from '@/styles/Home.module.css';
import { data } from '../../data/data';
import { gen_list } from '../../utils/utils';

const Work = () => {
  return (
    <section className={styles.section} id="work">
      <h2 className={styles.section_title}>Work History</h2>
      <div className={styles.section_body}>
        <div className={styles.list_format}>{gen_list(data.work)}</div>
      </div>
    </section>
  );
};

export default Work;
