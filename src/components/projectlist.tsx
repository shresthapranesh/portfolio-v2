import * as React from "react";

type Role = 'leader' | 'member' | 'engineer';

const roleStyles: Record<Role, string> = {
  leader:   'bg-green-500/10 text-green-400 border-green-500/30',
  member:   'bg-blue-500/10 text-blue-400 border-blue-500/30',
  engineer: 'bg-[rgba(245,158,11,0.1)] text-[#f59e0b] border-[rgba(245,158,11,0.3)]',
};

const RoleBadge = ({ role, label }: { role: Role; label: string }) => (
  <span className={`px-2.5 py-0.5 text-xs border font-mono font-medium ${roleStyles[role]}`}>
    {label}
  </span>
);

type ProjectCardProps = {
  role: Role;
  title: string;
  org: string;
  date: string;
  items: string[];
};

const ProjectCard = ({ role, title, org, date, items }: ProjectCardProps) => (
  <div className="w-[90%] sm:w-3/5 p-6 border border-[#1f1f1f] bg-[#141414] hover:border-[#2d2d2d] hover:shadow-lg hover:shadow-black/20 transition-all duration-300 group">
    <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
      <div className="flex flex-col gap-1">
        <RoleBadge role={role} label={title} />
        <h3 className="text-base font-semibold text-[#ededed] group-hover:text-[#f59e0b] transition-colors duration-200">
          {org}
        </h3>
      </div>
      <span className="text-xs font-mono text-[#444] whitespace-nowrap mt-1">{date}</span>
    </div>
    <ul className="space-y-2">
      {items.map((item, idx) => (
        <li key={idx} className="text-sm text-[#888] flex gap-2">
          <span className="text-[#f59e0b] mt-0.5 shrink-0">›</span>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const ProjectList = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-[#ededed] mb-6">Projects</h1>
      <div className="flex flex-col gap-4 items-center w-full">
        <ProjectCard
          role="engineer"
          title="Project Engineer"
          org="Holland Quest Lab"
          date="Aug 2020 – Nov 2020"
          items={[
            'Developed a game application that generates a three-letter Holland Code based on questionnaire responses across six sections.',
            'Built a containerized, scalable Node.js backend communicating with a Unity front-end via RESTful APIs, storing responses in MySQL.',
            'Created user account APIs for secure login, account reset, and JWT-based authentication.',
            'Designed SQL schema with modern data modeling practices and implemented unit tests with Jest.',
            'Deployed multiple server instances on GCP for concurrent connection handling.',
            'Delivered weekly progress presentations covering budget expenditure and equipment requirements.',
          ]}
        />
        <ProjectCard
          role="member"
          title="Project Member"
          org="Software Engineering I"
          date="Jan 2020 – May 2020"
          items={[
            'Practiced object-oriented architectural software design using UML diagrams.',
            'Applied modular programming methodologies for large-scale integration and error handling.',
            'Implemented MongoDB for data storage and JavaFX for UI design.',
          ]}
        />
        <ProjectCard
          role="leader"
          title="Project Leader"
          org="Machine Learning"
          date="Mar 2020 – Apr 2020"
          items={[
            "Analyzed static images using Bradley's Adaptive Thresholding algorithm to detect worms and build a training dataset.",
            'Trained a classifier model with hyperparameter tuning and regularization on the custom dataset.',
            'Recorded model accuracy across different training data combinations and optimization techniques.',
            'Deployed the model on a live feed to automate worm tracking and generate laboratory data logs.',
          ]}
        />
        <ProjectCard
          role="member"
          title="Project Member"
          org="Project Lab 2 — AC Powerline Anomaly Detection"
          date="Aug 2019 – Dec 2019"
          items={[
            'Designed and analyzed a fault-detection system for AC powerlines, pinpointing fault locations for easy diagnostics.',
            'Programmed a microcontroller for high-speed signal sampling with a low signal-to-noise ratio.',
            'Resolved high-speed sampling and low-latency USB data transmission issues; assisted with cloud-MySQL integration.',
          ]}
        />
        <ProjectCard
          role="leader"
          title="Project Leader"
          org="Project Lab 1 — Autonomous Rover"
          date="Jan 2019 – May 2019"
          items={[
            'Spearheaded design and build of an autonomous rover for mail delivery to designated locations.',
            'Enhanced a multi-threaded task handler with a state machine built in Verilog.',
            'Built and diagnosed amplifier and current-limiting circuits based on operational amplifiers.',
          ]}
        />
      </div>
    </div>
  );
};

export default ProjectList;
