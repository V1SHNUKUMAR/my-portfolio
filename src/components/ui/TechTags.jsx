/** A project's tech stack as text chips. `className` positions the row (e.g. justify-end). */
export default function TechTags({ techs, className = '' }) {
  return (
    <ul className={`m-0 flex list-none flex-wrap gap-[0.6em] p-0 ${className}`}>
      {techs?.map((tech, i) => (
        <li
          key={`${tech.name}-${i}`}
          className="rounded-[6px] border border-white/70 bg-white/60 px-[0.9em] py-[0.35em] text-[1.15em] font-semibold tracking-wide backdrop-blur-md [transition:0.25s_ease] dark:border-white/15 dark:bg-white/10"
        >
          {tech.name}
        </li>
      ))}
    </ul>
  )
}
