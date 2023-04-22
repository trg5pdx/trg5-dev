import styles from '@/styles/Home.module.css';
import { data } from '../../data/data';

const Skills = () => {
  const subitems = (item: String[]) => {
    return item.map((subitem, index) => <li key={index}>{subitem}</li>);
  };

  const lists = (list: { item: String; subitems?: String[] }[]) => {
    return list.map((list, index) => (
      <li key={index}>
        {list.item}
        {list.subitems && (
          <ul className="mt-2 list-inside list-[circle] space-y-1 pl-5">
            {subitems(list.subitems)}
          </ul>
        )}
      </li>
    ));
  };

  return (
    <div className={styles.section}>
      <h2 className={styles.section_title}>Skills, School, & Work History</h2>
      <div className={styles.section_body}>
        <div className="lg:grid lg:grid-cols-2">
          <ul className="list-inside list-disc">{lists(data.skills)}</ul>
          <ul className="list-inside list-disc">{lists(data.school)}</ul>
          <ul className="list-inside list-disc">{lists(data.work)}</ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
