import styles from '@/styles/Home.module.css';
import Image from 'next/image';

const intro = () => {
  return (
    <>
      <div className="col-span-6 mx-2 w-11/12 self-center py-11 lg:col-span-3 lg:mx-0 lg:w-full lg:py-0">
        <h1 className={styles.main_title}>{"Hi, I'm Thomas"}</h1>
        <br />
        <h2 className={styles.main_subtitle}>
          {"I'm a software developer from Portland"}
        </h2>
      </div>
      <Image
        src="https://placekitten.com/600/400"
        alt="a picture of a cat"
        className="h-11/12 col-span-6 mx-2 w-11/12 rounded lg:col-span-3 lg:mx-0 lg:h-full lg:w-full"
        width={600}
        height={400}
      />
    </>
  );
};

export default intro;
