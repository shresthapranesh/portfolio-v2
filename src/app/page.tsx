'use client'
import React, { useEffect, useState } from 'react'
import Image from "next/image"
import Link from "next/link"
import List from '../components/List'

function useTypewriter(text: string, speed = 40) {
  const [displayed, setDisplayed] = useState('')
  useEffect(() => {
    setDisplayed('')
    let i = 0
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1))
      i++
      if (i >= text.length) clearInterval(interval)
    }, speed)
    return () => clearInterval(interval)
  }, [text, speed])
  return displayed
}

const TECH = ['React', 'Next.js', 'TypeScript', 'Python', 'GraphQL']

export default function Page() {
  const subtitle = useTypewriter('Software Engineer at Meta. Welcome to my portfolio.')

  return (
    <section className="relative">
      {/* Radial glow background — fixed so it always fills the viewport */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(168,85,247,0.15),_transparent_60%)] pointer-events-none -z-10" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(59,130,246,0.10),_transparent_60%)] pointer-events-none -z-10" />

      <div className="relative grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 items-center">

        {/* Left: Text content */}
        <div className="mr-auto place-self-center lg:col-span-7 hero-fade-in">

          {/* Availability badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for new opportunities
          </div>

          <h1 className="max-w-2xl mb-2 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white hero-slide-up">
            Hi There. 👋
          </h1>
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl hero-gradient-text hero-slide-up-delay">
            I am Pranesh Shrestha
          </h1>

          <p className="max-w-2xl mb-8 font-light text-gray-500 lg:mb-10 md:text-lg lg:text-xl dark:text-gray-400 min-h-[60px]">
            {subtitle}
            <span className="hero-cursor">|</span>
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <Link
              href="/projects"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold transition-all duration-300 hover:from-purple-500 hover:to-blue-500 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-lg border border-zinc-600 text-zinc-300 font-semibold transition-all duration-300 hover:border-purple-500 hover:text-purple-300 hover:scale-105"
            >
              Get In Touch
            </Link>
          </div>

          {/* Tech stack pills */}
          <div className="flex flex-wrap gap-2">
            {TECH.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs rounded-full border border-zinc-700 text-zinc-400 transition-all duration-200 hover:border-purple-500/60 hover:text-purple-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Right: Profile image */}
        <div className="hidden lg:flex lg:mt-0 lg:col-span-5 justify-center items-center">
          <div className="relative group">
            {/* Animated glow ring */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-500 opacity-60 blur-sm group-hover:opacity-90 transition-opacity duration-500 hero-glow-pulse" />
            <div className="relative rounded-2xl overflow-hidden border border-zinc-700/50">
              <Image
                src="/images/2.jpg"
                alt="mypic"
                height={500}
                width={500}
                className="object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>

      </div>

      {/* Skills section */}
      <div className="relative max-w-screen-xl px-4 pb-12 mx-auto">
        <div className="border-t border-zinc-800 pt-10">
          <List />
        </div>
      </div>

    </section>
  )
}
