import { useState } from 'react';
import Link from 'next/link';

const NavButton = (props: {
  path: string;
  title: string;
  navState: (arg0: boolean) => void;
}) => {
  return (
    <li className="mx-4 m-2">
      <Link
        href={props.path}
        className={
          'rounded-xl-px-4 py-1 text-xl font-bold text-purple-800 ' +
          'dark:text-purple-300 hover:text-pink-500'
        }
        onClick={() => props.navState(false)}
      >
        {props.title}
      </Link>
    </li>
  );
};

export default NavButton;
