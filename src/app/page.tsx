import React from 'react'
import Image from "next/image"
import Link from "next/link"
import List from '../components/List'

const TECH = ['React', 'Next.js', 'TypeScript', 'Python', 'GraphQL']

export default function Page() {
  return (
    <section>
      <div className="max-w-screen-xl px-4 pt-16 pb-8 mx-auto">

        {/* Metadata row — monospace, muted */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-1 mb-12 font-mono text-xs text-[#777] tracking-widest uppercase hero-fade-in">
          <span>Software Engineer</span>
          <span className="text-[#444]">—</span>
          <span>Meta · Menlo Park, CA</span>
          <span className="text-[#444]">—</span>
          <span>2024 – Present</span>
        </div>

        {/* Name + photo row */}
        <div className="flex items-start justify-between gap-8">
          <h1
            className="font-bold leading-[0.9] tracking-tight text-[#ededed] hero-name-reveal"
            style={{ fontSize: 'clamp(3.5rem, 10vw, 8rem)' }}
          >
            Pranesh<br />Shrestha
          </h1>

          {/* Profile photo — toned down, no glow */}
          <div className="hidden lg:block shrink-0 w-40 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
            <div className="border border-[#1f1f1f] overflow-hidden">
              <Image
                src="/images/profile.jpg"
                alt="Pranesh Shrestha"
                height={220}
                width={160}
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Description + CTAs */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mt-12 hero-slide-up-delay">
          <p className="max-w-md text-base text-[#aaa] leading-relaxed">
            Building agentic workflows, AI orchestration systems, and
            MCP tool infrastructure at Meta. Previously React component
            systems and WebAssembly at Microchip Technology.
          </p>

          <div className="flex flex-col gap-4 lg:items-end">
            <div className="w-12 h-px bg-[#f59e0b]" />
            <div className="flex gap-3">
              <Link
                href="/experience"
                className="px-5 py-2.5 border border-[#f59e0b] text-[#f59e0b] text-sm font-mono tracking-wide transition-colors duration-200 hover:bg-[rgba(245,158,11,0.1)]"
              >
                Experience
              </Link>
              <Link
                href="/contact"
                className="px-5 py-2.5 border border-[#333] text-[#aaa] text-sm font-mono tracking-wide transition-colors duration-200 hover:border-[#555] hover:text-[#ededed]"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

      </div>

      {/* Tech stack row */}
      <div className="max-w-screen-xl px-4 py-6 mx-auto hero-fade-in">
        <div className="border-t border-[#1f1f1f] pt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
          <span className="font-mono text-xs text-[#666] tracking-widest uppercase">Stack</span>
          {TECH.map(t => (
            <span key={t} className="font-mono text-xs text-[#aaa] hover:text-[#f59e0b] transition-colors duration-150 cursor-default">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Skills section */}
      <div className="max-w-screen-xl px-4 pb-12 mx-auto">
        <div className="border-t border-[#1f1f1f] pt-10">
          <List />
        </div>
      </div>
    </section>
  )
}
