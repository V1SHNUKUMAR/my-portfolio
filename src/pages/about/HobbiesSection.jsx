import { useRef } from 'react'
import Reveal from '../../components/ui/Reveal'
import SectionHeading from '../../components/ui/SectionHeading'
import { HOBBIES } from '../../data/profile'
import { revealClass, useReveal } from '../../hooks/useReveal'
import { useTilt } from '../../hooks/useTilt'

const TILT_OPTIONS = { max: 25, speed: 400 }

function HobbyCard({ hobby }) {
  const ref = useRef(null)
  const visible = useReveal(ref)
  useTilt(ref, TILT_OPTIONS)

  return (
    <div
      ref={ref}
      className={`${revealClass(visible)} relative h-[20em] w-[20em] rounded-[12px] bg-white/50 text-center shadow-[5px_5px_20px_rgba(0,0,0,0.1)] dark:bg-white/10 dark:shadow-[5px_5px_20px_rgba(0,0,0,0.4)] backdrop-blur-[10px] [transform-style:preserve-3d] [transform:perspective(1000px)] lte-900:h-[15em] lte-900:w-[15em] lte-350:h-[10em] lte-350:w-[10em]`}
    >
      <div className="absolute top-[-20%] left-0 flex h-full w-full flex-col items-center justify-between text-[2em] font-semibold lte-900:text-[1.5em] lte-350:text-[1.1em]">
        <img
          src={hobby.image}
          alt={hobby.alt}
          className="h-[80%] [filter:drop-shadow(5px_5px_5px_#66666679)] [transform:translateZ(20px)]"
        />
        {hobby.label}
      </div>
    </div>
  )
}

export default function HobbiesSection() {
  return (
    <section>
      <SectionHeading>Hobbies and Interests</SectionHeading>
      <div className="mx-0 my-[10rem] flex flex-wrap-reverse items-center justify-evenly gap-x-[5em]">
        <Reveal className="grid grid-cols-[repeat(2,1fr)] items-center gap-[5em] lte-500:gap-[1em] lte-350:gap-[2em]">
          {HOBBIES.map((hobby) => (
            <HobbyCard key={hobby.label} hobby={hobby} />
          ))}
        </Reveal>
        <Reveal className="lte-720:hidden">
          <img
            src="/resources/images/hobbies/developer3.webp"
            alt="Music"
            className="m-[2em] h-[45em] [filter:drop-shadow(5px_10px_10px_#66666679)] lte-900:h-[32em]"
          />
        </Reveal>
      </div>
    </section>
  )
}
