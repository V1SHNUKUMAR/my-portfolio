import { useRef } from 'react'
import ShineButton from '../../components/ui/ShineButton'
import Reveal from '../../components/ui/Reveal'
import { EXPERIENCE, INTRO, PROFILE_PHOTO } from '../../data/profile'
import { useTyped } from '../../hooks/useTyped'

const TYPED_OPTIONS = {
  strings: ['Vishnu', 'a Developer'],
  typeSpeed: 70,
  backSpeed: 70,
  smartBackspace: true,
  loop: true,
  cursorChar: '',
  autoInsertCss: true,
}

const current = EXPERIENCE[0]
const [company, location] = current.company.split('|').map((s) => s.trim())

// Small glass chip that floats beside the portrait.
function HeroBadge({ className = '', delay, children }) {
  return (
    <div
      style={{ animationDelay: delay }}
      className={`absolute z-10 flex animate-float items-center gap-[0.8em] rounded-[10px] border border-white/80 bg-white/75 px-[1.2em] py-[0.8em] text-ink shadow-[0_15px_35px_-12px_rgba(0,0,0,0.3)] backdrop-blur-md dark:border-white/15 dark:bg-[#1c232b]/80 dark:text-white ${className}`}
    >
      {children}
    </div>
  )
}

export default function HeroSection() {
  const typedRef = useRef(null)
  useTyped(typedRef, TYPED_OPTIONS)

  return (
    <section className="relative flex min-h-screen w-full flex-wrap-reverse content-center items-center justify-evenly p-[5em_2em] before:absolute before:top-0 before:left-[10%] before:-z-2 before:h-[50vh] before:max-h-[50vw] before:w-[50vh] before:max-w-[50vw] before:animate-scale-up before:rounded-full before:bg-[rgba(0,183,255,0.15)] before:shadow-[0px_0px_100px_100px_rgb(0,183,255,0.15)] after:absolute after:right-0 after:-bottom-[50px] after:-z-1 after:h-[60vh] after:max-h-[50vw] after:w-[60vh] after:max-w-[50vw] after:animate-scale-up after:rounded-full after:bg-[rgba(255,0,0,0.1)] after:shadow-[0px_0px_100px_100px_rgba(255,0,0,0.1)]">
      <Reveal
        data-cursor-enlarge
        className="my-[5em] w-1/2 lte-1209:text-[length:90%] lte-870:mx-auto lte-870:min-w-full lte-870:text-center"
      >
        <div className="text-[1.5em] opacity-90">Hello 👋🏻,</div>
        {/* styles target every span so Typed.js's injected cursor span is sized like the text */}
        <div className="my-3 text-[7em] lte-440:text-[4.5em] [&_span]:bg-[radial-gradient(circle,rgba(63,94,251,1)_0%,rgba(252,70,107,1)_100%)] [&_span]:bg-clip-text [&_span]:text-[1em] [&_span]:font-bold [&_span]:[-webkit-text-fill-color:transparent]">
          I am{' '}
          {/* Typed.js takes over this text; the initial "Vishnu" is part of its sequence */}
          <span ref={typedRef} className="font-['Instrument_Serif','Instrument_Serif_Fallback',serif] italic font-bold">Vishnu</span>
        </div>
        <div className="hidden text-[3em] italic">( a Developer )</div>
        <div className="max-w-[52rem] text-[1.3em] lte-870:mx-auto opacity-90">{INTRO}</div>
        <div>
          <ShineButton to="/contact" icon="fa fa-envelope" className="mt-[1.5em] mr-[0.5em] mb-[1.5em] ml-0">
            Contact Me
          </ShineButton>
        </div>
      </Reveal>
      <Reveal className="group relative mt-[5em] aspect-[4/5] w-[32em] delay-200 lte-1209:w-[28em] lte-870:mx-auto lte-870:w-[24em] lte-440:w-[22em]">
        {/* Tilted gradient card peeking out behind the photo */}
        <div
          aria-hidden="true"
          className="absolute inset-0 rotate-[6deg] rounded-[16px] bg-[linear-gradient(135deg,#fc5c7d,#6a82fb)] opacity-90 shadow-[0_30px_60px_-20px_rgba(106,130,251,0.6)] [transition:rotate_0.6s_cubic-bezier(.2,.8,.2,1)] group-hover:rotate-[9deg]"
        />
        {/* Glass frame around the photo */}
        <div className="relative h-full rounded-[16px] border border-white/80 bg-white/50 p-[8px] shadow-[0_30px_60px_-25px_rgba(0,0,0,0.35)] backdrop-blur-md [transition:translate_0.6s_cubic-bezier(.2,.8,.2,1),box-shadow_0.6s_ease] group-hover:-translate-y-[6px] group-hover:shadow-[0_40px_70px_-25px_rgba(0,0,0,0.4)] dark:border-white/15 dark:bg-white/10">
          <img
            src={PROFILE_PHOTO}
            alt="Developer Image"
            className="h-full w-full rounded-[10px] object-cover object-top"
          />
        </div>

        <HeroBadge className="top-[10%] -right-[3em] lte-1209:-right-[1.5em] lte-440:-right-[0.5em]" delay="0s">
          <i className="fa fa-map-marker text-[1.6em] text-tomato" aria-hidden="true" />
          <span className="text-[1.3em] font-semibold">{location}</span>
        </HeroBadge>
        <HeroBadge className="bottom-[10%] -left-[4em] lte-1209:-left-[2em] lte-440:-left-[0.5em]" delay="-2.5s">
          <span className="relative flex h-[1em] w-[1em] text-[1em]">
            <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative h-full w-full rounded-full bg-emerald-500" />
          </span>
          <span className="flex flex-col text-left">
            <span className="text-[1.3em] font-semibold">{current.role}</span>
            <span className="text-[1.1em] opacity-60">@ {company}</span>
          </span>
        </HeroBadge>
      </Reveal>
    </section>
  )
}
