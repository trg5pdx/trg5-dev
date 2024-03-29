import { ReactNode } from "react";
import { data } from "../data/data";
import { gen_list, format_about } from "../utils/utils";

const select_content = (content: string) => {
  switch (content) {
    case "about":
      return format_about(data.about);
    case "skills":
      return gen_list(data.skills);
    case "school":
      return gen_list(data.school);
    case "work":
      return gen_list(data.work);
    default:
      return <div></div>;
  }
};

const Section = (props: {
  anchor: string;
  title: string;
  children: ReactNode;
}) => {
  return (
    <section
      className="col-span-6 w-full md:w-11/12 justify-self-center py-8 lg:w-4/5 px-2"
      id={props.anchor}
    >
      <h2
        className={
          "my-3 w-fit rounded p-2 text-3xl font-bold bg-neutral-300 " +
          "text-purple-800 dark:bg-neutral-800 dark:text-purple-300"
        }
      >
        {props.title}
      </h2>
      <div
        className={`py-6 px-3 lg:px-6 text-lg rounded bg-neutral-300 dark:bg-neutral-800 text-black dark:text-white`}
      >
        {props.children}
      </div>
    </section>
  );
};

export default Section;
