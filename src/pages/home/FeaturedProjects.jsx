import { Fragment } from 'react'
import Reveal from '../../components/ui/Reveal'
import ProjectFrame from '../../components/ui/ProjectFrame'
import ShineButton from '../../components/ui/ShineButton'
import { FEATURED_PROJECTS } from '../../data/projects'

function ProjectInfo({ project, mirrored }) {
  return (
    <div
      data-cursor-enlarge
      className={`flex h-[90%] w-[40%] flex-col justify-center p-[1em] lte-870:mx-auto lte-870:min-w-full lte-870:items-center lte-870:text-center ${
        mirrored ? 'items-start text-start' : 'items-end text-end'
      }`}
    >
      <div className="lte-440:text-[length:80%]">
        <h5 className="my-[0.5em] text-center text-[4em] leading-none">
          {project.name}{' '}
          <a href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.name}`}>
            <i className="fa-solid fa-arrow-up-right-from-square text-[2.5rem] text-brand" aria-hidden="true" />
          </a>
        </h5>
      </div>
      <hr className="m-0 h-[5px] w-1/4 rounded-[50%] bg-black dark:bg-white" />
      <div>
        {project.techs.map((tech, i) => (
          <Fragment key={tech.src}>
            {i > 0 && ' '}
            <img
              src={tech.src}
              alt={tech.alt}
              className="mx-[0.5em] my-[1.5em] h-[5em] rounded-[1em] border border-[rgba(0,0,0,0.1)] bg-white/50 p-[0.5em] dark:border-white/10 dark:bg-white/90"
            />
          </Fragment>
        ))}
      </div>
      <div className="mt-0 mb-[1em] max-w-[40rem] text-[1.5rem] lte-870:min-w-[70%]">{project.description}</div>
      <div>
        <ShineButton to="/projects" icon="fa fa-angle-right" iconAfter className="my-[1em]">
          View All Projects
        </ShineButton>
      </div>
    </div>
  )
}

const picsClass = 'flex max-w-[40%] items-center justify-center lte-870:mx-auto lte-870:min-w-[90%]'

export default function FeaturedProjects() {
  const [first, second] = FEATURED_PROJECTS

  return (
    <section className="relative p-[1em] before:absolute before:top-[30%] before:left-[5%] before:-z-2 before:h-[10vh] before:w-[10vh] before:animate-bounce-up before:rounded-full before:bg-[rgba(0,0,255,0.1)] before:shadow-[0px_0px_10px_50px_rgba(0,0,255,0.1)] after:absolute after:right-[5%] after:bottom-[15%] after:-z-1 after:h-[10vh] after:w-[10vh] after:animate-bounce-down after:rounded-full after:bg-[rgba(255,99,71,0.2)] after:shadow-[0px_0px_10px_50px_rgba(255,99,71,0.2)]">
      <h3 className="my-[0.5em] text-center text-[5em]">Projects</h3>
      <hr className="mx-auto my-0 h-[5px] w-[5em] bg-black dark:bg-white" />

      <Reveal className="my-[10em] flex w-full flex-wrap-reverse items-center justify-evenly gap-[5rem]">
        <ProjectInfo project={first} />
        <Reveal className={picsClass}>
          <ProjectFrame src={first.image.src} alt={first.image.alt} url={first.url} />
        </Reveal>
      </Reveal>

      <Reveal className="my-[10em] flex w-full flex-wrap items-center justify-evenly gap-[5rem]">
        <div className={picsClass}>
          <ProjectFrame src={second.image.src} alt={second.image.alt} url={second.url} />
        </div>
        <ProjectInfo project={second} mirrored />
      </Reveal>
    </section>
  )
}
