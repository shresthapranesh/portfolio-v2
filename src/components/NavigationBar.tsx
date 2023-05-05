import React from "react";
import NavItem from "./NavigationItem";

export default function Navigationbar() {
  return (
      <nav
        className="w-full flex flex-col border-b-[1px] border-zinc-300/10"
      > 
        <ul
          className="flex flex-row overflow-auto sm:justify-end pl-0 w-full sm:w-4/5"
        >
          <NavItem routes="/">Home</NavItem>
          <NavItem routes="/blog">Blog</NavItem>
          <NavItem routes="/experience">Experience</NavItem>
          <NavItem routes="/skills">Skills</NavItem>
          <NavItem routes="/projects">Project</NavItem>
          <NavItem routes="/contact">Contact</NavItem>
          <NavItem routes="/resume">Resume</NavItem>
        </ul>
      </nav>
  );
};

