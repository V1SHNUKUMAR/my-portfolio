import Reveal from '../../components/ui/Reveal'
import ProjectFrame from '../../components/ui/ProjectFrame'
import ShineButton from '../../components/ui/ShineButton'
import TechTags from '../../components/ui/TechTags'
import { FEATURED_PROJECTS } from '../../data/projects'

function ProjectInfo({ project, index }) {
  return (
    <div
      data-cursor-enlarge
      className="flex min-w-0 flex-1 flex-col items-start text-start lte-870:items-center lte-870:text-center"
    >
      <span className="font-mono text-[1.1em] tracking-[0.2em] text-brand uppercase">
        {String(index + 1).padStart(2, '0')} / Featured
      </span>
      <h5 className="my-[0.3em] text-[4em] leading-none lte-440:text-[3.2em]">{project.name}</h5>
      <TechTags techs={project.techs} className="my-[1.5em] lte-870:justify-center" />
      <div className="mt-[16px] mb-[1em] max-w-[44rem] text-[1.5rem] leading-relaxed">{project.description}</div>
    </div>
  )
}

/**
 * A rounded card pushed to one side of the section, with the screenshot hanging
 * off the card's outer edge: on the left for even entries, the right for odd ones.
 * Below 870px it stacks, with the screenshot poking out of the card's top instead.
 */
function FeaturedCard({ project, index }) {
  const imageLeft = index % 2 === 0

  return (
    <Reveal
      className={`my-[10em] flex w-[99%] items-center gap-[4em] rounded-[24px] border border-black/5 bg-white/60 py-[4em] shadow-[0_30px_80px_-50px_rgba(0,0,0,0.35)] backdrop-blur-md dark:border-white/10 dark:bg-white/[0.04] lte-870:my-[8em] lte-870:w-full lte-870:flex-col lte-870:gap-[2em] lte-870:px-[2em] lte-870:pt-0 ${
        imageLeft ? 'ml-auto flex-row pr-[4em]' : 'mr-auto flex-row-reverse pl-[4em]'
      }`}
    >
      <div
        className={`w-[60%] shrink-0 lte-870:mx-0 lte-870:-mt-[4em] lte-870:w-full ${
          imageLeft ? '-ml-[8%]' : '-mr-[8%]'
        }`}
      >
        <ProjectFrame src={project.image.src} alt={project.image.alt} url={project.url} />
      </div>
      <ProjectInfo project={project} index={index} />
    </Reveal>
  )
}

export default function FeaturedProjects() {
  return (
    <section className="relative p-[1em] before:absolute before:top-[30%] before:left-[5%] before:-z-2 before:h-[10vh] before:w-[10vh] before:animate-bounce-up before:rounded-full before:bg-[rgba(0,0,255,0.1)] before:shadow-[0px_0px_10px_50px_rgba(0,0,255,0.1)] after:absolute after:right-[5%] after:bottom-[15%] after:-z-1 after:h-[10vh] after:w-[10vh] after:animate-bounce-down after:rounded-full after:bg-[rgba(255,99,71,0.2)] after:shadow-[0px_0px_10px_50px_rgba(255,99,71,0.2)]">
      <h3 className="my-[0.5em] text-center text-[5em]">Projects</h3>
      <hr className="mx-auto my-0 h-[5px] w-[5em] bg-black dark:bg-white" />

      <div className="mx-auto max-w-[120rem] px-[6%] lte-870:px-[1em]">
        {FEATURED_PROJECTS.map((project, i) => (
          <FeaturedCard key={project.name} project={project} index={i} />
        ))}
      </div>

      <div className="mb-[52px] flex items-center justify-center">
        <ShineButton to="/projects" icon="fa fa-angle-right" iconAfter className="min-w-[200px] h-[52px] !flex items-center justify-center gap-3 my-[1em]">
          View All Projects
        </ShineButton>
      </div>
    </section>
  )
}
