export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`max-w-4xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow ? (
        <p className="text-sm font-medium uppercase tracking-[0.28em] text-cyan-300">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-6 text-xl leading-8 text-slate-300 md:text-2xl">
          {description}
        </p>
      ) : null}
    </div>
  );
}
