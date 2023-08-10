import Spline from "@splinetool/react-spline";
import FrontImage from "../../assets/MeAndMyDog.webp";
import Image from "next/image";

const intro = () => {
  return (
    <>
      <div
        className={
          "col-span-6 mx-2 w-11/12 self-center py-11 lg:col-span-3 " +
          "lg:mx-0 lg:w-full lg:py-0"
        }
      >
        <h1
          className={
            "rounded p-2 text-5xl font-bold text-purple-800 w-fit " +
            "bg-neutral-300 dark:bg-neutral-800 dark:text-purple-300"
          }
        >
          {"Hi, I'm Thomas"}
        </h1>
        <br />
        <h2
          className={
            "rounded p-2 text-2xl font-bold w-fit bg-neutral-300 " +
            "text-purple-800 dark:bg-neutral-800 dark:text-purple-300"
          }
        >
          {"I'm a software developer from Portland"}
        </h2>
      </div>
      {/*<Spline
        className="h-11/12 col-span-6 mx-2 w-11/12 rounded lg:col-span-3 lg:mx-0 lg:h-full lg:w-full"
        scene="https://prod.spline.design/BEXoyEPEOVyA8A7r/scene.splinecode"
  />*/}
      <Image
        src={FrontImage}
        alt="A picture of me with my dog Dulcita"
        className={
          "h-11/12 col-span-6 mx-2 w-11/12 rounded lg:col-span-3 " +
          "lg:mx-0 lg:h-full lg:w-full"
        }
        priority={true}
        width={977}
        height={772}
      />
    </>
  );
};

export default intro;
