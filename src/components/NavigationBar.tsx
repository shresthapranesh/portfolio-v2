"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavItem from "./NavigationItem";

export default function Navigationbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className="w-full border-b border-[#1f1f1f] backdrop-blur-sm bg-[#0c0c0c]/90 sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between h-14">

        {/* Logo / Name */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 border border-[#f59e0b] flex items-center justify-center text-[#f59e0b] font-mono text-xs font-medium shrink-0 transition-all duration-200">
            PS
          </div>
          <span className="font-medium text-sm text-[#888] group-hover:text-[#ededed] transition-colors duration-200 hidden sm:block">
            Pranesh Shrestha
          </span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden sm:flex flex-row items-center pl-0">
          <NavItem routes="/experience">Experience</NavItem>
          <NavItem routes="/projects">Projects</NavItem>
          <NavItem routes="/blog">Blog</NavItem>
          <NavItem routes="/contact">Contact</NavItem>
        </ul>

        {/* Hamburger button — mobile only */}
        <button
          onClick={() => setIsOpen(o => !o)}
          className="sm:hidden flex items-center justify-center p-2 text-[#888] hover:text-[#ededed] transition-colors duration-200"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="1" y1="1" x2="17" y2="17"/>
              <line x1="17" y1="1" x2="1" y2="17"/>
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="0" y1="4" x2="18" y2="4"/>
              <line x1="0" y1="9" x2="18" y2="9"/>
              <line x1="0" y1="14" x2="18" y2="14"/>
            </svg>
          )}
        </button>

      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="sm:hidden border-t border-[#1f1f1f] bg-[#0c0c0c]">
          <div className="max-w-screen-xl mx-auto px-4 py-2 flex flex-col">
            <NavItem routes="/experience" onClick={() => setIsOpen(false)}>Experience</NavItem>
            <NavItem routes="/projects" onClick={() => setIsOpen(false)}>Projects</NavItem>
            <NavItem routes="/blog" onClick={() => setIsOpen(false)}>Blog</NavItem>
            <NavItem routes="/contact" onClick={() => setIsOpen(false)}>Contact</NavItem>
          </div>
        </div>
      )}
    </nav>
  );
}
