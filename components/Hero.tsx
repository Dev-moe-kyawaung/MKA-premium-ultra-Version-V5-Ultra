import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-[3rem] border border-white/15 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-10 shadow-2xl shadow-cyan-950/30 backdrop-blur-xl md:p-16 lg:p-20">
      {/* Animated background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.2),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.18),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.08),transparent_60%)]" />
      
      <div className="relative max-w-5xl">
        {/* Badge */}
        <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/30 bg-cyan-400/15 px-6 py-3 text-sm font-medium text-cyan-200 shadow-lg shadow-cyan-500/20">
          <span className="inline-block h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
          Senior Android Engineer
          <span className="mx-2 text-cyan-500/50">|</span>
          Kotlin • Compose • Flutter • Next.js
        </div>

        {/* Name */}
        <p className="mt-6 text-lg font-medium text-slate-300">
          {profile.name}
        </p>

        {/* Main heading */}
        <h1 className="mt-6 text-6xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl">
          {profile.headline}
        </h1>

        {/* Summary */}
        <p className="mt-10 max-w-3xl text-xl leading-9 text-slate-300 md:text-2xl">
          {profile.summary}
        </p>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-3 gap-6 max-w-2xl">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-3xl font-bold text-white">{profile.yearsExperience}+</p>
            <p className="mt-1 text-sm text-slate-400">Years Experience</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-3xl font-bold text-white">40+</p>
            <p className="mt-1 text-sm text-slate-400">Projects Shipped</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-3xl font-bold text-white">82+</p>
            <p className="mt-1 text-sm text-slate-400">Certificates</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-wrap gap-5">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-cyan-400 px-8 py-4 text-base font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-cyan-500/50"
          >
            View Projects
            <span className="transition group-hover:translate-x-1">→</span>
          </a>
          <a
            href={profile.resume}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-4 text-base font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-white/20"
          >
            Download Resume
            <span>↓</span>
          </a>
        </div>

        {/* Social links */}
        <div className="mt-12 flex flex-wrap gap-6 text-sm">
          <a
            href={profile.github}
            className="group inline-flex items-center gap-2 text-slate-300 transition hover:text-cyan-300"
          >
            <span className="text-lg">⌘</span>
            <span>Github</span>
            <span className="transition group-hover:translate-x-1">→</span>
          </a>
          <a
            href={profile.linkedin}
            className="group inline-flex items-center gap-2 text-slate-300 transition hover:text-cyan-300"
          >
            <span className="text-lg">◎</span>
            <span>LinkedIn</span>
            <span className="transition group-hover:translate-x-1">→</span>
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center gap-2 text-slate-300 transition hover:text-cyan-300"
          >
            <span className="text-lg">✉</span>
            <span>Email</span>
            <span className="transition group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
