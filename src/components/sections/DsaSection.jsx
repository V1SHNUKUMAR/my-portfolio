import Reveal from '../ui/Reveal'

const sectionClass = 'flex min-h-screen items-center justify-center p-[1rem]'

export default function DsaSection({ reveal = false }) {
  const heading = (
    <h5 className="text-center text-[5em] font-black">
      Solved<span className="text-[5rem] text-tomato"> 350+ </span>DSA Problems
    </h5>
  )

  return reveal ? (
    <Reveal as="section" className={sectionClass}>
      {heading}
    </Reveal>
  ) : (
    <section className={sectionClass}>{heading}</section>
  )
}
