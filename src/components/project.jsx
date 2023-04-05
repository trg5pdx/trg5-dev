import styles from '@/styles/Home.module.css';
import ProjectData from '../constants/constants';

const project = (props) => {
  const projData = props.projData;

  return (
    <>
      <h2>{projData.title}</h2>
      <p>{projData.desc}</p>
      <p>
        {projData.repo != '' && (
          <>
            Repo:
            <a href={projData.repo}> click here</a>
          </>
        )}
        {projData.other && (
          <>
            <br />
            {projData.other_title}:<a href={projData.other}> click here</a>
          </>
        )}
      </p>
    </>
  );
};

export default project;
