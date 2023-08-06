// @format

const Card = (props: {
  title: string;
  desc: string[];
  index: number;
  openModal: (arg0: number) => void;
}) => {
  return (
    <div
      className={
        "mx-2 bg-neutral-100 text-neutral-900 dark:bg-neutral-900" +
        " dark:text-white rounded-xl h-64 p-4"
      }
    >
      <h2 className="justify-self-start text-xl font-bold my-1">
        {props.title}
      </h2>
      <p
        className={`h-2/3 text-lg overflow-hidden text-ellipsis bg-clip-text 
        text-transparent bg-gradient-to-b from-black dark:from-white;`}
      >
        {props.desc}
      </p>
      <button
        className="font-bold"
        onClick={() => {
          props.openModal(props.index);
        }}
      >
        Learn More
      </button>
    </div>
  );
};

export default Card;