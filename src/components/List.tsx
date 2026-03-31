import * as React from "react";

const SkillBadge = ({ name }: { name: string }) => (
  <span className="px-2.5 py-1 text-xs rounded-md bg-zinc-800 border border-zinc-700 text-zinc-300 hover:border-purple-500/50 hover:text-purple-300 transition-all duration-200 cursor-default">
    {name}
  </span>
)

type CategoryCardProps = {
  title: string
  accent: string
  skills: string[]
}

const CategoryCard = ({ title, accent, skills }: CategoryCardProps) => (
  <div className="min-w-[200px] p-5 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:border-zinc-600 transition-all duration-200 hover:shadow-lg hover:shadow-black/30">
    <h2 className={`mb-3 text-xs font-semibold uppercase tracking-wider ${accent}`}>
      {title}
    </h2>
    <div className="flex flex-wrap gap-2">
      {skills.map(s => <SkillBadge key={s} name={s} />)}
    </div>
  </div>
)

const List = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-white mb-6">Skills</h1>
      <div className="flex flex-wrap gap-4">
        <CategoryCard
          title="Languages"
          accent="text-purple-400"
          skills={['TypeScript', 'Python', 'Go', 'C/C++', 'Rust', 'Hack', 'SQL']}
        />
        <CategoryCard
          title="Frameworks & Libraries"
          accent="text-green-400"
          skills={['React', 'Next.js', 'Node.js', 'Vite', 'Relay']}
        />
        <CategoryCard
          title="Infrastructure & Data"
          accent="text-blue-400"
          skills={['MySQL', 'Redis', 'GCloud', 'Hive', 'Scuba', 'MCP']}
        />
        <CategoryCard
          title="Dev Tools"
          accent="text-yellow-400"
          skills={['Git', 'Bazel', 'JIRA', 'Claude Code']}
        />
        <CategoryCard
          title="Testing"
          accent="text-rose-400"
          skills={['Vitest', 'Playwright', 'Google Test', 'Jest']}
        />
      </div>
    </div>
  )
}

export default List;
