import { Fragment } from 'react'
import CompanyLogo from '../../components/ui/CompanyLogo'
import Reveal from '../../components/ui/Reveal'
import SectionHeading from '../../components/ui/SectionHeading'
import { EXPERIENCE } from '../../data/profile'

const SECTION_BG =
  'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

const LOGO_CLASS = 'aspect-square h-[50px] w-[50px] lte-720:h-[33px] lte-720:w-[40px]'
const TALL_LOGO_CLASS = 'aspect-square h-[75px] w-[50px] lte-720:h-[60px] lte-720:w-[40px]'

export default function ExperienceSection() {
  return (
    <section className="relative px-0 py-[0.5em] text-white shadow-[0_0_40px_40px_rgb(124,130,143,0.75)]">
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 -z-1 h-full w-full bg-[rgba(255,255,255,0.5)] bg-cover bg-center bg-no-repeat [filter:brightness(0.3)]"
        style={{ backgroundImage: `url("${SECTION_BG}")` }}
      />
      <SectionHeading light>Experience</SectionHeading>
      <Reveal className="mx-[1rem] mt-[10rem] mb-[8rem] flex content-center items-center justify-evenly lte-900:flex-col lte-900:gap-[5rem]">
        <div className="sticky top-0 overflow-hidden rounded-[10px] lte-900:static lte-500:grid lte-500:place-items-center">
          <img
            src="/resources/images/hobbies/developer2.png"
            alt="Developer image"
            className="max-h-[400px] [filter:brightness(1.1)] lte-500:w-[70%]"
          />
        </div>
        <div className="w-full max-w-[600px] text-start lte-900:w-[90%]">
          {EXPERIENCE.map((job, i) => (
            <Fragment key={job.company}>
              {i > 0 && <hr className="mx-auto my-[3rem] border-[rgba(128,128,128,0.5)]" />}
              <div data-cursor-enlarge className="flex items-center gap-[2rem]">
                <CompanyLogo item={job} className={job.tall ? TALL_LOGO_CLASS : LOGO_CLASS} />
                <div className="w-full">
                  <div className="flex items-center justify-between gap-[1rem]">
                    <div className="my-[0.5rem] text-[2.2rem]">{job.roleAbout ?? job.role}</div>
                    <div className="text-[1.5rem] font-extralight text-[rgba(255,255,255,0.7)]">{job.period}</div>
                  </div>
                  <div className="text-[1.5rem] text-[color:skyblue]">{job.companyAbout ?? job.company}</div>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
