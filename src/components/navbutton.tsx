import { useState } from 'react';
import Link from 'next/link';

const NavButton = (props: {
  path: String;
  title: String;
  navState: (arg0: boolean) => void;
}) => {
  return (
    <li className="mx-4 my-2 lg:mx-8">
      <Link
        href={props.path}
        className="rounded-xl-px-4 py-1 text-xl font-bold hover:text-pink-500"
        onClick={() => props.navState(false)}
      >
        {props.title}
      </Link>
    </li>
  );
};

export default NavButton;
