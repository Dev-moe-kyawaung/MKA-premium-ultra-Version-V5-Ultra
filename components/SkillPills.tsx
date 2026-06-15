import { skills } from "@/data/skills";

const skillGroups = [
  { title: "Android", items: skills.android },
  { title: "Flutter", items: skills.flutter },
  { title: "Web", items: skills.web },
  { title: "Backend", items: skills.backend },
  { title: "Tools", items: skills.tools },
  { title: "Data", items: skills.data },
];

export default function SkillPills() {
  return (
    <div className="space-y-6">
      {skillGroups.map((group) => (
        <div key={group.title}>
          <h3 className="text-sm font-medium uppercase tracking-wide text-slate-400">
            {group.title}
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {group.items.map((skill) => (
              <span
                key={skill}
                className="group rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-cyan-400/15 hover:text-white"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
