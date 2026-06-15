import Link from "next/link";
import { profile } from "@/data/profile";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07111f]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <Link href="/" className="text-base font-semibold tracking-wide text-white">
          {profile.name}
        </Link>
        <nav className="flex items-center gap-8 text-sm">
          <Link className="transition hover:text-cyan-300" href="/projects">
            Projects
          </Link>
          <Link className="transition hover:text-cyan-300" href="/about">
            About
          </Link>
          <Link className="transition hover:text-cyan-300" href="/contact">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
