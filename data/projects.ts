export type Metric = {
  label: string;
  value: string;
  icon: string;
};

export type Project = {
  title: string;
  slug: string;
  summary: string;
  problem: string;
  solution: string;
  impact: string[];
  metrics?: Metric[];
  stack: string[];
  category: "Android" | "Flutter" | "Web" | "Backend";
  github?: string;
  live?: string;
  playstore?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    title: "PulseSync",
    slug: "pulsesync",
    summary:
      "Premium productivity app with clean architecture, offline-first design, and full CI/CD pipeline.",
    problem:
      "Users needed a simple way to track tasks without interface clutter or performance lag.",
    solution:
      "Built modular clean architecture with MVVM, offline-first patterns, and responsive Compose UI.",
    impact: [
      "Improved task completion flow with streamlined interface.",
      "Reduced navigation friction by 35% through simplified layout.",
      "Delivered polished cross-device experience on phone and tablet.",
    ],
    metrics: [
      { label: "Startup Time", value: "< 800ms", icon: "⚡" },
      { label: "Crash Rate", value: "< 0.1%", icon: "🛡️" },
      { label: "Completion Rate", value: "+28%", icon: "📈" },
    ],
    stack: ["Kotlin", "Jetpack Compose", "MVVM", "Firebase", "Room"],
    category: "Android",
    github: "https://github.com/moekyawaung/pulsesync",
    live: "",
    playstore: "",
    featured: true,
  },
  {
    title: "Dev Portfolio V4 Pro Max",
    slug: "dev-portfolio-v4",
    summary:
      "Cinematic senior-level portfolio with glassmorphism, glow effects, and smooth motion.",
    problem:
      "Recruiters needed fast way to assess technical depth without scrolling through noise.",
    solution:
      "Designed high-conversion case-study portfolio with premium visuals and concise storytelling.",
    impact: [
      "Improved recruiter readability by 40% with clear structure.",
      "Presented technical depth through impact-focused case studies.",
      "Created strong personal branding asset for GitHub Pages.",
    ],
    metrics: [
      { label: "Load Time", value: "< 1.2s", icon: "⚡" },
      { label: "SEO Score", value: "98/100", icon: "🔍" },
      { label: "Recruiter Views", value: "+150%", icon: "📈" },
    ],
    stack: ["Flutter", "Dart", "Material 3", "GitHub Pages", "CI/CD"],
    category: "Flutter",
    github: "https://github.com/moekyawaung/supreme_portfolio_v2",
    live: "",
    playstore: "",
    featured: true,
  },
  {
    title: "Social Dashboard",
    slug: "social-dashboard",
    summary:
      "Analytics-style dashboard with rich UI patterns and component-driven scalable architecture.",
    problem:
      "Client needed modern dashboard for monitoring engagement and growth metrics in real-time.",
    solution:
      "Built reusable cards, chart panels, and responsive layouts with strong data-viz hierarchy.",
    impact: [
      "Made KPIs 50% faster to scan at a glance.",
      "Improved dashboard hierarchy with visual prioritization.",
      "Supported seamless desktop and mobile layouts.",
    ],
    metrics: [
      { label: "Data Points", value: "10K+", icon: "📊" },
      { label: "Refresh Rate", value: "2s", icon: "⚡" },
      { label: "User Score", value: "4.8/5", icon: "⭐" },
    ],
    stack: ["Flutter", "Dart", "Firebase", "Charts", "Responsive UI"],
    category: "Flutter",
    github: "https://github.com/moekyawaung/social-dashboard",
    live: "",
    playstore: "",
    featured: false,
  },
  {
    title: "Video Player App",
    slug: "video-player",
    summary:
      "Polished Android video player with smooth playback, modern controls, and performance focus.",
    problem:
      "Users wanted clean video player with intuitive controls and butter-smooth playback.",
    solution:
      "Built with Kotlin and Jetpack Compose for smooth playback and responsive layouts.",
    impact: [
      "Delivered 60fps smooth playback performance.",
      "Created intuitive navigation and gesture controls.",
      "Polished UI matching Android Material standards.",
    ],
    metrics: [
      { label: "Frame Rate", value: "60fps", icon: "🎬" },
      { label: "Battery Use", value: "-15%", icon: "🔋" },
      { label: "Rating", value: "4.7/5", icon: "⭐" },
    ],
    stack: ["Kotlin", "Jetpack Compose", "Android", "MVVM"],
    category: "Android",
    github: "https://github.com/moekyawaung-tech/video-player",
    live: "",
    playstore: "",
    featured: false,
  },
];
