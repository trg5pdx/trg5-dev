import Button from "./button";

const Card = (props: {
  title: string;
  desc: string[];
  index: number;
  openModal: (arg0: number) => void;
}) => {
  return (
    <div
      className={`mx-2 bg-neutral-100 text-neutral-900 dark:bg-neutral-900 
      dark:text-white rounded-xl h-80 p-4`}
    >
      <h2 className="justify-self-start text-xl font-bold my-2">
        {props.title}
      </h2>
      <p
        className={`h-[65%] text-lg overflow-hidden text-ellipsis bg-clip-text 
        text-transparent fade-text dark:fade-text`}
      >
        {props.desc[0]}
      </p>
      <Button variant={"modal"} clickFn={() => props.openModal(props.index)}>
        Learn More
      </Button>
    </div>
  );
};

export default Card;
