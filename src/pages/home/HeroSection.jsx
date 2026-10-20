import { useRef } from 'react'
import ShineButton from '../../components/ui/ShineButton'
import Reveal from '../../components/ui/Reveal'
import { INTRO, PROFILE_PHOTO } from '../../data/profile'
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
      <Reveal className="mt-[5em] h-[35em] w-[35em] rounded-full delay-200 lte-1209:h-[30em] lte-1209:w-[30em] lte-870:block lte-870:h-[20em] lte-870:w-[20em]">
        <img
          src={PROFILE_PHOTO}
          alt="Developer Image"
          className="h-full w-full rounded-full border-[10px] border-[rgba(255,255,255,0.473)] object-cover object-center [filter:brightness(1)]"
        />
      </Reveal>
    </section>
  )
}
