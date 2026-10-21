import CompanyLogo from '../../components/ui/CompanyLogo'
import Reveal from '../../components/ui/Reveal'
import ShineButton from '../../components/ui/ShineButton'
import { EXPERIENCE, PROFILE_PHOTO, SKILL_CHIPS } from '../../data/profile'

const LOGO_CLASS = 'aspect-square h-[50px] w-[50px] lte-870:h-[33px] lte-870:w-[40px]'
const TALL_LOGO_CLASS = 'aspect-square h-[75px] w-[50px] lte-870:h-[60px] lte-870:w-[40px] lte-440:h-[70px]'
// the period label is nudged down to line up with the Zysk logo and the last entry
const TIME_OFFSET = ['', 'mt-[1.5rem]', 'mt-[0.5rem]']

function BasicInfo() {
  return (
    <Reveal className="flex w-[40%] flex-col items-center justify-center lte-870:mx-auto lte-870:min-w-full lte-870:text-center">
      <Reveal className="my-[1rem] h-[15em] w-[15em] rounded-full bg-[linear-gradient(to_left,#743ad5,#d53a9d)] p-1 shadow-[0_0_20px_white] delay-200">
        <div className="h-full w-full overflow-hidden rounded-full bg-white p-[5px]">
          <img src={PROFILE_PHOTO} alt="Developer Pic" className="h-full w-full rounded-full object-cover object-center" />
        </div>
      </Reveal>
      <Reveal className="text-[2.5em] font-bold delay-200">Vishnu Kumar</Reveal>
      <Reveal className="m-[0.5em] text-[1.8em] leading-none text-[color:grey] delay-200">Software Developer</Reveal>
      <Reveal>
        <h5 className="m-[0.5em] text-[1.7em] font-normal">
          <i className="fa fa-map-marker text-tomato" aria-hidden="true" /> Gurugram, Haryana
        </h5>
      </Reveal>
      <Reveal className="flex w-[90%] flex-wrap items-center justify-center gap-[0.25em] p-[1em]">
        {SKILL_CHIPS.map((skill, i) => (
          <div
            key={`${skill}-${i}`}
            className="mx-[5px] my-[2px] inline-block rounded-[8px] bg-[color:bisque] px-[10px] py-[5px] text-[1.2em] font-bold text-black"
          >
            {skill}
          </div>
        ))}
      </Reveal>
    </Reveal>
  )
}

function ExperienceList() {
  return (
    <Reveal
      data-cursor-enlarge
      className="mx-0 my-[1rem] flex flex-col justify-center px-0 py-[1rem] lte-870:min-w-full lte-870:text-start"
    >
      <div className="relative w-[500px] max-w-[90vw]">
        <h2 className="mx-0 my-[1rem] border-l-[5px] border-l-tomato bg-[linear-gradient(to_right,rgba(255,99,71,0.5),transparent)] px-[1rem] py-[0.5rem] text-[2.5rem] font-normal">
          Experience
        </h2>
        <ul className="my-[5rem] list-none">
          {EXPERIENCE.map((job, i) => (
            <li
              key={job.company}
              className="relative flex items-start justify-between gap-[1rem] py-[2rem] not-last:border-b not-last:border-b-[rgba(255,255,255,0.1)]"
            >
              <div className="flex items-center gap-[2rem]">
                <CompanyLogo item={job} className={job.tall ? TALL_LOGO_CLASS : LOGO_CLASS} />
                <div>
                  <h2 className="mb-[0.5rem] text-[2rem] font-normal">{job.role}</h2>
                  <h3 className="text-[1.5rem] font-normal text-[color:skyblue]">{job.company}</h3>
                </div>
              </div>
              <div className="flex items-center gap-[2rem]">
                <p className={`text-[1.5rem] font-extralight text-[rgba(255,255,255,0.7)] ${TIME_OFFSET[i] ?? ''}`}>
                  {job.period}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ShineButton to="/about" variant="tomato" icon="fa fa-angle-right" iconAfter>
          Know Full Details
        </ShineButton>
      </div>
    </Reveal>
  )
}

export default function AboutSummary() {
  return (
    <section className="relative mt-[2rem] flex min-h-screen w-full flex-col items-center justify-center bg-ink py-[2rem] text-white">
      <div className="absolute top-[-4.8%] z-1 rounded-[8px] bg-tomato px-[0.4em] py-[0.1em] text-[4em] shadow-[0_0_20px_tomato]">
        About Me
      </div>
      <div className="flex min-h-[80%] min-w-[80%] max-w-[90%] flex-wrap items-center justify-center rounded-[12px] bg-transparent p-[1rem] lte-440:min-w-[95%]">
        <BasicInfo />
        <ExperienceList />
      </div>
    </section>
  )
}
