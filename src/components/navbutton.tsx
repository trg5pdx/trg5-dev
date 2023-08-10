import { ReactNode } from "react";
import Link from "next/link";

const NavButton = (props: {
  path: string;
  clickFn: () => void;
  children: ReactNode;
}) => {
  return (
    <li className="mx-4 m-2">
      <Link
        href={props.path}
        className={`px-8 lg:px-4 py-1 text-xl font-bold text-purple-800 
          dark:text-purple-300 hover:text-pink-500 dark:hover:text-pink-300`}
        onClick={() => props.clickFn()}
      >
        {props.children}
      </Link>
    </li>
  );
};

export default NavButton;
