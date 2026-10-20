import Reveal from '../ui/Reveal'

/** Sticky headline next to a column of tilted certificate images. */
const HEADLINE = 'Milestones Achieved Through Consistent Effort'
const headlineClass = 'text-[6em] font-black'

export default function AchievementsSection({ certificates, revealHeadline = false }) {
  return (
    <section className="relative mx-auto flex min-h-screen max-w-[1400px] justify-evenly lte-1100:flex-col lte-1100:items-center">
      <div className="sticky top-0 flex h-screen flex-1 items-center px-[3rem] py-[10rem] lte-1100:text-center">
        {revealHeadline ? (
          <Reveal as="p" className={headlineClass}>
            {HEADLINE}
          </Reveal>
        ) : (
          <p className={headlineClass}>{HEADLINE}</p>
        )}
      </div>
      <div className="flex flex-1 flex-col items-center justify-center">
        {certificates.map((cert, i) => (
          <img
            key={cert.src}
            src={cert.src}
            alt={cert.alt}
            className={`my-[3rem] max-w-[350px] shadow-[0_3px_9px_rgba(0,0,0,0.25)] lte-1100:max-w-[50vw] lte-780:max-w-[60vw] ${
              i % 2 === 1
                ? '[transform:rotate(2deg)_translateX(70px)]'
                : '[transform:rotate(-2deg)_translateX(-70px)]'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
