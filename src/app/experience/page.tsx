import React from 'react'

type ExperienceItem = {
  role: string
  company: string
  location: string
  period: string
  current?: boolean
  bullets: string[]
  tools: string[]
}

const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Software Engineer',
    company: 'Meta Platform Inc',
    location: 'Menlo Park, CA',
    period: 'Dec 2024 – Present',
    current: true,
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
  <span className="px-2.5 py-1 text-xs rounded-md bg-zinc-800 border border-zinc-700 text-zinc-300 hover:border-purple-500/50 hover:text-purple-300 transition-all duration-200 cursor-default">
    {name}
  </span>
)

const ExperienceCard = ({ item, index }: { item: ExperienceItem; index: number }) => (
  <div className="relative flex gap-6">
    {/* Timeline spine */}
    <div className="flex flex-col items-center">
      <div className={`w-3 h-3 rounded-full mt-1.5 shrink-0 ring-4 ring-zinc-950 ${item.current ? 'bg-purple-500' : 'bg-zinc-600'}`} />
      {index < EXPERIENCE.length - 1 && (
        <div className="w-px flex-1 bg-zinc-800 mt-1" />
      )}
    </div>

    {/* Card */}
    <div className="pb-10 flex-1">
      <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 transition-all duration-300 hover:shadow-lg hover:shadow-black/30 group">
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h2 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors duration-200">
                {item.role}
              </h2>
              {item.current && (
                <span className="px-2 py-0.5 text-xs rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 font-medium">
                  Current
                </span>
              )}
            </div>
            <p className="text-sm text-zinc-400">
              {item.company} <span className="text-zinc-600">·</span> {item.location}
            </p>
          </div>
          <span className="text-xs text-zinc-500 whitespace-nowrap mt-1">{item.period}</span>
        </div>

        {/* Bullets */}
        <ul className="space-y-2 mb-5">
          {item.bullets.map((b, i) => (
            <li key={i} className="text-sm text-zinc-400 flex gap-2">
              <span className="text-purple-500 mt-0.5 shrink-0">›</span>
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
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(168,85,247,0.08),_transparent_60%)] pointer-events-none" />
      <div className="relative max-w-3xl mx-auto px-4 py-10">

        <h1 className="text-3xl font-bold text-white mb-10">Experience</h1>

        {/* Timeline */}
        <div>
          {EXPERIENCE.map((item, index) => (
            <ExperienceCard key={index} item={item} index={index} />
          ))}
        </div>


      </div>
    </div>
  )
}
