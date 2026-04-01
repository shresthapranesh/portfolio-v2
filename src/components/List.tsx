import * as React from "react";

const SkillBadge = ({ name }: { name: string }) => (
  <span className="px-2.5 py-1 text-xs font-mono bg-[#141414] border border-[#1f1f1f] text-[#888] hover:border-[rgba(245,158,11,0.3)] hover:text-[#f59e0b] transition-all duration-200 cursor-default">
    {name}
  </span>
)

type CategoryCardProps = {
  title: string
  skills: string[]
}

const CategoryCard = ({ title, skills }: CategoryCardProps) => (
  <div className="min-w-[200px] p-5 border border-[#1f1f1f] bg-[#141414] hover:border-[#2d2d2d] transition-all duration-200 hover:shadow-lg hover:shadow-black/30">
    <h2 className="mb-3 text-xs font-mono font-medium uppercase tracking-wider text-[#444]">
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
      <h1 className="text-2xl font-bold text-[#ededed] mb-6">Skills</h1>
      <div className="flex flex-wrap gap-4">
        <CategoryCard
          title="Languages"
          skills={['TypeScript', 'Python', 'Go', 'C/C++', 'Rust', 'Hack', 'SQL']}
        />
        <CategoryCard
          title="Frameworks & Libraries"
          skills={['React', 'Next.js', 'Node.js', 'Vite', 'Relay']}
        />
        <CategoryCard
          title="Infrastructure & Data"
          skills={['MySQL', 'Redis', 'GCloud', 'Hive', 'Scuba', 'MCP']}
        />
        <CategoryCard
          title="Dev Tools"
          skills={['Git', 'Bazel', 'JIRA', 'Claude Code']}
        />
        <CategoryCard
          title="Testing"
          skills={['Vitest', 'Playwright', 'Google Test', 'Jest']}
        />
      </div>
    </div>
  )
}

export default List;
