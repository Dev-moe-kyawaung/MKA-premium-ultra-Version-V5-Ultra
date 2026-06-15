import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const categoryColors = {
    Android: "from-orange-400/20 to-amber-400/10",
    Flutter: "from-cyan-400/20 to-teal-400/10",
    Web: "from-indigo-400/20 to-violet-400/10",
    Backend: "from-emerald-400/20 to-green-400/10",
  };

  return (
    <article className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 transition duration-500 hover:-translate-y-2 hover:border-cyan-300/40 hover:bg-white/10 hover:shadow-2xl hover:shadow-cyan-500/20">
      {/* Category gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${categoryColors[project.category]} opacity-0 transition duration-500 group-hover:opacity-100`} />

      {/* Content */}
      <div className="relative p-8">
        {/* Category badge */}
        <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-300">
          {project.category}
        </span>

        {/* Featured badge */}
        {project.featured && (
          <span className="ml-3 inline-block rounded-full bg-cyan-400/20 px-3 py-1 text-xs font-medium text-cyan-300">
            Featured
          </span>
        )}

        {/* Title */}
        <h3 className="mt-5 text-2xl font-bold text-white">{project.title}</h3>

        {/* Summary */}
        <p className="mt-4 text-slate-300">{project.summary}</p>

        {/* Metrics */}
        {project.metrics && (
          <div className="mt-6 grid grid-cols-3 gap-4">
            {project.metrics.map((metric) => (
              <div className="rounded-xl border border-white/10 bg-black/20 p-3">
                <span className="text-lg">{metric.icon}</span>
                <p className="mt-1 text-sm font-semibold text-white">{metric.value}</p>
                <p className="text-xs text-slate-400">{metric.label}</p>
              </div>
            ))}
          </div>
        )}

        {/* Stack chips */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.slice(0, 5).map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-slate-300"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Link */}
        <Link
          href={`/projects/${project.slug}`}
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition hover:text-cyan-200 hover:gap-3"
        >
          Read case study
          <span>→</span>
        </Link>
      </div>
    </article>
  );
}
