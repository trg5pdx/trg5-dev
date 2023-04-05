import styles from '@/styles/Home.module.css';

const project = (props) => {
  const title = props.title;
  const desc = props.desc;
  const repo = props.repo;
  const other_link = props.other_link;

  return (
    <>
      <h2>{title}</h2>
      <p>{desc}</p>
      <p>
        Repo:
        <a href={repo}> click here</a>
        {other_link && (
          <>
            <br />
            Other link: {/* pass in link title */}
            <a href={other_link}> click here</a>
          </>
        )}
      </p>
    </>
  );
};

export default project;
