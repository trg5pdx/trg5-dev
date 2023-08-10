import { ReactNode } from "react";

const Button = (props: {
  variant: string;
  type?: "button" | "submit" | "reset" | undefined;
  clickFn?: () => void;
  children: ReactNode;
}) => {
  const getClasses = (variant: string) => {
    switch (variant) {
      case "modal":
        return `w-fit h-12 bg-purple-600 text-white text-bold text-lg mr-6 p-2
        border-purple-600 border-2 hover:bg-slate-200 hover:text-purple-600
        dark:hover:bg-pink-500 dark:hover:text-white dark:hover:border-pink-500
        rounded-lg transition-all duration-500`;
      case "contact":
        return `h-14 w-full rounded bg-purple-950 font-bold text-white text-xl
        hover:bg-slate-200 hover:border-2 hover:border-purple-950 
        hover:text-purple-950 dark:bg-purple-400 dark:text-black 
        dark:hover:bg-neutral-800 dark:hover:border-pink-300 
        dark:hover:text-pink-300 hover:transition-all hover:duration-300`;
      default:
        return `w-fit h-12 rounded bg-slate-200 border-2 border-slate-50`;
    }
  };
  const currentStyle = getClasses(props.variant);

  const click = () => {
    if (props.clickFn) {
      props.clickFn();
    }
  };

  return (
    <button type={props.type} className={currentStyle} onClick={() => click()}>
      {props.children}
    </button>
  );
};

export default Button;
