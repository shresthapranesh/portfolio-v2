import React from "react";
import Link from "next/link";

export default function Navigationbar() {
  return (
      <nav
        className="w-full flex flex-col border-b-[1px] border-zinc-300/10"
      > 
        <ul
          className="flex flex-row overflow-auto sm:justify-end pl-0 w-full sm:w-4/5"
        >
          <NavItem routes="/">Home</NavItem>
          <NavItem routes="contact">Contact</NavItem>
          <NavItem routes="skills">Skills</NavItem>
          <NavItem routes="projects">Project</NavItem>
          <NavItem routes="resume">Resume</NavItem>
        </ul>
      </nav>
  );
};

type NavItemProps = {
  children:React.ReactNode,
  routes:string
}

const NavItem = (props:NavItemProps) => {
  return (
      <Link href={props.routes}>
          <button
              className="text-sm m-5 text-center hover:opacity-50 hover:cursor-pointer"
          >
              {props.children}
          </button>
      </Link>
  )
}