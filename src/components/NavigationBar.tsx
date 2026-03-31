import React from "react";
import Link from "next/link";
import NavItem from "./NavigationItem";

export default function Navigationbar() {
  return (
    <nav className="w-full border-b border-zinc-300/10 backdrop-blur-sm bg-zinc-950/80 sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between h-14">

        {/* Logo / Name */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white text-sm font-bold shrink-0 group-hover:shadow-lg group-hover:shadow-purple-500/30 transition-all duration-200">
            P
          </div>
          <span className="font-semibold text-sm text-zinc-300 group-hover:text-white transition-colors duration-200 hidden sm:block">
            Pranesh Shrestha
          </span>
        </Link>

        {/* Nav links */}
        <ul className="flex flex-row items-center pl-0">
          <NavItem routes="/experience">Experience</NavItem>
          <NavItem routes="/projects">Projects</NavItem>
          <NavItem routes="/blog">Blog</NavItem>
          <NavItem routes="/contact">Contact</NavItem>
        </ul>

      </div>
    </nav>
  );
}
