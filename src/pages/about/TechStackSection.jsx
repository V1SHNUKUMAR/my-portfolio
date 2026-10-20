import { useRef } from 'react'
import Reveal from '../../components/ui/Reveal'
import SectionHeading from '../../components/ui/SectionHeading'
import { TECH_STACK } from '../../data/profile'
import { revealClass, useReveal } from '../../hooks/useReveal'
import { useTilt } from '../../hooks/useTilt'

const TILT_OPTIONS = { max: 25, speed: 400, glare: true, 'max-glare': 1 }

function SkillCard({ skill }) {
  const ref = useRef(null)
  const visible = useReveal(ref)
  useTilt(ref, TILT_OPTIONS)

  return (
    <div
      ref={ref}
      className={`${revealClass(visible)} group relative h-[10em] w-[10em] overflow-hidden rounded-[12px] bg-white p-[1.5em] shadow-[0_30px_30px_#afb9cabb] dark:bg-[#e8ebf2] dark:text-ink dark:shadow-[0_30px_30px_rgba(0,0,0,0.45)] backdrop-blur-[2px] [transition:0.3s_ease] lte-900:h-[12em] lte-900:w-[12em] lte-500:h-[10em] lte-500:w-[10em] lte-350:h-[9em] lte-350:w-[9em]`}
    >
      <img
        src={skill.icon}
        alt={skill.alt}
        className="relative z-4 h-full w-full object-contain object-center [transform:translateZ(20px)] [transition:0.3s_ease-in-out] group-hover:[transform:translateY(-25%)_scale(0.75)]"
      />
      <div className="absolute top-0 left-0 z-3 flex h-full w-full items-center justify-center [transform:translateY(100%)] [transition:0.3s_ease-in-out_0.1s] group-hover:bg-white dark:group-hover:bg-[#e8ebf2] group-hover:[transform:translateY(25%)]">
        <p className="text-[12px]">{skill.name}</p>
      </div>
    </div>
  )
}

export default function TechStackSection() {
  return (
    <section className="p-[2em]">
      <SectionHeading>My Tech stack</SectionHeading>
      <Reveal className="mx-auto my-[7rem] flex max-w-[1200px] flex-wrap items-center justify-center gap-[5rem] lte-500:gap-[1em] lte-350:gap-[1rem]">
        {TECH_STACK.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </Reveal>
    </section>
  )
}
