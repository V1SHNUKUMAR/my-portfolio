import Reveal from '../../components/ui/Reveal'
import SectionHeading from '../../components/ui/SectionHeading'
import { EDUCATION } from '../../data/profile'

function CoursePic({ src, first }) {
  // the first image keeps a vh-based max height on small screens; the others size to content
  const heightClass = first ? 'lte-500:max-h-[40vh]' : 'lte-900:max-h-fit'
  return (
    <Reveal>
      <img
        src={src}
        alt="Institution Image"
        className={`max-h-[50vh] max-w-[40vw] rounded-[8px] shadow-[0px_20px_20px_rgba(128,128,128,0.534)] dark:shadow-[0px_20px_20px_rgba(0,0,0,0.5)] lte-900:max-w-full lte-500:max-w-[90vw] ${heightClass}`}
      />
    </Reveal>
  )
}

function CourseInfo({ item }) {
  return (
    <Reveal
      data-cursor-enlarge
      className="my-[1em] w-[40em] text-center lte-900:w-[80%] lte-500:min-w-[90vw] lte-500:text-start"
    >
      <div className="mx-auto inline-block rounded-[8px] border border-black px-[1rem] dark:border-white/60 py-[0.5rem] text-[1.25rem] font-bold lte-500:text-[2em]">
        {item.years}
      </div>
      <div className="my-[0.5em] text-[2.5em] font-semibold">{item.course}</div>
      <div className="my-[1em] text-[1.75rem] text-[color:grey] lte-500:my-[0.5em] lte-500:text-[1.8em]">
        {item.institution}
      </div>
    </Reveal>
  )
}

export default function EducationSection() {
  return (
    <section className="w-full">
      <SectionHeading>Education</SectionHeading>
      <ul className="z-2 m-[2em] list-none rounded-[12px] border border-white bg-white lte-500:m-[1em] dark:border-white/10 dark:bg-[#161c24]">
        {EDUCATION.map((item, i) => (
          <li key={item.course} className="mx-0 my-[5em]">
            <div
              className={`mx-[1em] my-0 flex items-center justify-evenly gap-x-[5em] ${
                i === 1 ? 'flex-wrap-reverse' : 'flex-wrap'
              }`}
            >
              {item.picFirst ? (
                <>
                  <CoursePic src={item.image} first={i === 0} />
                  <CourseInfo item={item} />
                </>
              ) : (
                <>
                  <CourseInfo item={item} />
                  <CoursePic src={item.image} first={i === 0} />
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
