import Reveal from '../../components/ui/Reveal'
import { INTRO, PROFILE_PHOTO } from '../../data/profile'

const HERO_BG =
  'https://media.istockphoto.com/id/500954400/photo/computer-coffee-mug-telephone-on-black-wood-table-sun-rising.jpg?s=612x612&w=0&k=20&c=AWZgqePKVZQ30tKTRtZQlrWSd1ycwGpVtr1tRbDmn8o='

export default function AboutHero() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center text-white">
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 -z-1 h-full w-full bg-cover bg-center bg-no-repeat [filter:brightness(0.3)]"
        style={{ backgroundImage: `url("${HERO_BG}")` }}
      />
      <div className="text-center">
        <Reveal className="mx-auto mt-[7em] mb-[5em] h-[15em] w-[15em] rounded-full border-[5px] border-white shadow-[0_0_20px_white]">
          <img src={PROFILE_PHOTO} alt="dev Pic" className="h-full w-full rounded-full object-cover object-center" />
        </Reveal>
        <Reveal>
          <div className="text-[1.5em]">Hello 👋🏻,</div>
          <div className="my-[0.5em] text-[4rem] leading-none font-thin [word-spacing:1rem]">
            I am <span className="text-[4rem] font-bold">Vishnu</span>
          </div>
          <div className="mx-auto max-w-[500px] px-[2em] text-[1.5em] font-light">{INTRO}</div>
        </Reveal>
      </div>
    </section>
  )
}
