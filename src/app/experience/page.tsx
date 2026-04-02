'use client'
import React from 'react'
import FlowText, { type Obstacle } from '../../components/FlowText'
import MetaLogo from '../../components/MetaLogo'

type ExperienceItem = {
  role: string
  company: string
  location: string
  period: string
  current?: boolean
  description?: string
  bullets: string[]
  tools: string[]
}

const LOGO_W = 96  // wide to match 2.32:1 lockup aspect ratio
const LOGO_H = 44  // natural height + a little breathing room

function getLogoObstacles(containerWidth: number): Obstacle[] {
  return [{ x: containerWidth - LOGO_W, y: 0, width: LOGO_W, height: LOGO_H, side: 'right' }]
}

const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Software Engineer',
    company: 'Meta Platform Inc',
    location: 'Menlo Park, CA',
    period: 'Dec 2024 – Present',
    current: true,
    description: "Building agentic workflow pipelines that reduce oncall burden by 60%+, designing AI agent skill systems with MCP tool calling, and orchestrating enterprise supply chain and Reality Labs prototype allocations globally — saving thousands of hours of human effort.",
    bullets: [
      'Built agentic workflow pipeline for production support, reducing need for human involvement by more than 60% and greatly reducing oncall stress.',
      'Designed and integrated a dynamic skill system for AI agents with MCP tool calling capabilities.',
      'Built a highly scalable and reliable orchestration system for enterprise supply chain and Reality Labs prototype allocations across the globe, saving thousands of hours of human effort.',
      'Designed relational mapping between data for complex information retrieval based on graph relations and enabled high-throughput search using Unicorn.',
      'Built proactive lifecycle monitoring system for fulfillment orders to ensure on-time delivery for every order.',
      'Collaborated with XFN to stress test RL fulfillment orchestration system spanning multiple teams for reliability and max-load readiness.',
    ],
    tools: ['Hack', 'MySQL', 'MCP', 'Hive', 'Scuba', 'Relay', 'Claude Code'],
  },
  {
    role: 'Software Engineer',
    company: 'Microchip Technology',
    location: 'San Jose, CA',
    period: 'Aug 2021 – Oct 2024',
    bullets: [
      'Developed and maintained React Component Design System based on design specifications, promoting consistency and reusability across the application.',
      'Developed and maintained an internal DataGrid library in React with advanced features including inline editing, selection lists, sorting, filtering, validation, and clipboard support.',
      'Built complex UI features including customized Tab-based views, split panels, REPL Terminal, and page routing, greatly improving UX over last-gen software.',
      'Ported and refactored C++ dependencies to C++17 and utilized Emscripten toolchain to compile C++ codebases to WebAssembly modules for web.',
      'Implemented proper abstraction layer for API design based on runtime environment (Web/Electron).',
    ],
    tools: ['TypeScript', 'React', 'Vite', 'Bazel', 'C++', 'Node.js', 'Python', 'JIRA', 'Google Test', 'Vitest', 'Playwright'],
  },
]

const ToolBadge = ({ name }: { name: string }) => (
  <span className="px-2.5 py-1 text-xs font-mono bg-[#141414] border border-[#1f1f1f] text-[#888] hover:border-[rgba(245,158,11,0.3)] hover:text-[#f59e0b] transition-all duration-200 cursor-default">
    {name}
  </span>
)

const ExperienceCard = ({ item, index }: { item: ExperienceItem; index: number }) => (
  <div className="relative flex gap-6">
    {/* Timeline spine */}
    <div className="flex flex-col items-center">
      <div className={`w-3 h-3 mt-1.5 shrink-0 ring-4 ring-[#0c0c0c] ${item.current ? 'bg-[#f59e0b]' : 'bg-[#444]'}`} />
      {index < EXPERIENCE.length - 1 && (
        <div className="w-px flex-1 bg-[#1f1f1f] mt-1" />
      )}
    </div>

    {/* Card */}
    <div className="pb-10 flex-1">
      <div className="p-6 border border-[#1f1f1f] bg-[#141414] hover:border-[#2d2d2d] transition-all duration-300 hover:shadow-lg hover:shadow-black/30 group">

        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h2 className="text-lg font-bold text-[#ededed] group-hover:text-[#f59e0b] transition-colors duration-200">
                {item.role}
              </h2>
              {item.current && (
                <span className="px-2 py-0.5 text-xs font-mono border border-[rgba(245,158,11,0.3)] bg-[rgba(245,158,11,0.1)] text-[#f59e0b]">
                  Current
                </span>
              )}
            </div>
            <p className="text-sm text-[#888]">
              {item.company} <span className="text-[#2d2d2d]">·</span> {item.location}
            </p>
          </div>
          <span className="text-xs font-mono text-[#444] whitespace-nowrap mt-1">{item.period}</span>
        </div>

        {/* Description flowing around Meta logo */}
        {item.description && (
          <div className="relative mb-5">
            <div
              className="absolute top-0 right-0 flex items-start justify-end opacity-75"
              style={{ width: LOGO_W, height: LOGO_H }}
            >
              <MetaLogo width={LOGO_W} height={Math.round(LOGO_W / 2.32)} />
            </div>
            <FlowText
              text={item.description}
              font="400 14px 'Space Grotesk'"
              lineHeight={22}
              getObstacles={getLogoObstacles}
              lineClassName="text-sm text-[#888]"
            />
          </div>
        )}

        {/* Bullets */}
        <ul className="space-y-2 mb-5">
          {item.bullets.map((b, i) => (
            <li key={i} className="text-sm text-[#888] flex gap-2">
              <span className="text-[#f59e0b] mt-0.5 shrink-0">›</span>
              {b}
            </li>
          ))}
        </ul>

        {/* Tools */}
        <div className="flex flex-wrap gap-2">
          {item.tools.map(t => <ToolBadge key={t} name={t} />)}
        </div>

      </div>
    </div>
  </div>
)

export default function Page() {
  return (
    <div className="relative max-w-3xl mx-auto px-4 py-10">
      <p className="font-mono text-xs text-[#444] tracking-widest uppercase mb-2">Career</p>
      <h1 className="text-3xl font-bold text-[#ededed] mb-10">Experience</h1>

      <div>
        {EXPERIENCE.map((item, index) => (
          <ExperienceCard key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  )
}
