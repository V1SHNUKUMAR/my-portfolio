import Reveal from '../../components/ui/Reveal'
import ShineButton from '../../components/ui/ShineButton'
import ProjectFrame from '../../components/ui/ProjectFrame'
import TechTags from '../../components/ui/TechTags'

/*
 * The original stylesheet decorated cards with `:nth-child()` rules (later rules win:
 * 1n, 2n, 5n, 4n, 3n). They are resolved here from the 1-based card position.
 */
function coverBackground(n) {
  if (n % 3 === 0) return 'bg-[linear-gradient(to_left,#ffe9b9,#22c1c3)] dark:bg-[linear-gradient(to_left,#3a3222,#0e4a4b)]'
  if (n % 4 === 0) return 'bg-[linear-gradient(to_right,#fef2f2,#1caed2)] dark:bg-[linear-gradient(to_right,#2a2024,#0c4556)]'
  if (n % 5 === 0) return 'bg-[linear-gradient(to_left,#ffcece,#76d3ff)] dark:bg-[linear-gradient(to_left,#3a2226,#14405a)]'
  if (n % 2 === 0) return 'bg-[linear-gradient(to_right,rgb(248,207,183),#c6cafc)] dark:bg-[linear-gradient(to_right,#3d2a20,#262a4f)]'
  return 'bg-[linear-gradient(95.2deg,rgba(173,252,234,1)_26.8%,rgba(192,229,246,1)_64%)] dark:bg-[linear-gradient(95.2deg,#123f39_26.8%,#16384a_64%)]'
}

const BLOB_BEFORE =
  'before:absolute before:-left-[5%] before:z-2 before:max-h-[10vw] before:max-w-[10vw] before:animate-bounce-up before:rounded-full'
const BLOB_AFTER =
  'after:absolute after:right-0 after:-bottom-[10%] after:z-2 after:max-h-[10vw] after:max-w-[10vw] after:animate-bounce-down after:rounded-full'

// Floating colour blobs; even cards have none.
function coverBlobs(n) {
  if (n % 2 === 0) return ''
  if (n === 3) {
    return `${BLOB_BEFORE} before:top-[10%] before:h-[6vh] before:w-[6vh] before:bg-[#108dc779] before:shadow-[0px_0px_5px_30px_#108dc779] ${BLOB_AFTER} after:h-[9vh] after:w-[9vh] after:bg-[rgba(255,99,71,0.5)] after:shadow-[0px_0px_5px_20px_rgba(255,99,71,0.5)]`
  }
  const before =
    n === 5
      ? 'before:top-[15%] before:h-[10vh] before:w-[10vh] before:bg-[#fdbb2d7e] before:shadow-[0px_0px_5px_30px_#fdbb2d7e]'
      : 'before:top-[5%] before:h-[10vh] before:w-[10vh] before:bg-[rgba(255,99,71,0.5)] before:shadow-[0px_0px_5px_20px_rgba(255,99,71,0.5)]'
  return `${BLOB_BEFORE} ${before} ${BLOB_AFTER} after:h-[10vh] after:w-[10vh] after:bg-[rgba(0,0,255,0.5)] after:shadow-[0px_0px_5px_30px_rgba(0,0,255,0.5)]`
}

const buttonSpacing = 'mt-[2rem] mr-[1rem]'

export default function ProjectCard({ project, position }) {
  const hasButtons = project.liveUrl || project.codeUrl

  return (
    <section className="relative mx-auto mt-[1em] mb-[5em] w-[90vw] max-w-[1400px] rounded-[12px] border border-white bg-white/50 dark:border-white/10 dark:bg-white/5">
      <div
        className={`relative flex min-h-[90vh] content-center items-center justify-around rounded-[12px] lte-1005:flex-col-reverse lte-1005:justify-center lte-1005:gap-[5rem] ${coverBackground(position)} ${coverBlobs(position)}`}
      >
        <Reveal className="mx-0 mt-[0.5em] mb-[1em] w-[40%] max-w-[60em] p-[1em] lte-1005:mx-auto lte-1005:w-full lte-1005:text-center lte-1005:font-medium">
          <TechTags techs={project.techs} className="mb-[1.5em] lte-1005:justify-center" />
          <div
            data-cursor-enlarge
            className="text-[5em] font-extrabold lte-1260:text-[4em] lte-1005:text-[3.5em] lte-500:text-[3em]"
          >
            {project.name}
          </div>
          <div className="m-[1em] h-[0.3em] w-[10em] rounded-[2px] bg-black lte-1005:mx-auto dark:bg-white" />
          <div data-cursor-enlarge className="px-[0.1em] py-[0.5em] text-[1.4em] opacity-80">
            {project.description}
          </div>
          {hasButtons && (
            <div>
              {project.liveUrl && (
                <ShineButton
                  href={project.liveUrl}
                  newTab
                  variant="live"
                  icon="fa-solid fa-arrow-up-right-from-square"
                  iconAfter
                  className={buttonSpacing}
                >
                  Live Project
                </ShineButton>
              )}
              {project.liveUrl && project.codeUrl && ' '}
              {project.codeUrl && (
                <ShineButton
                  href={project.codeUrl}
                  newTab={project.codeNewTab !== false}
                  variant="code"
                  icon="fa-brands fa-github"
                  iconClassName="text-[1.7rem]"
                  className={buttonSpacing}
                >
                  Code
                </ShineButton>
              )}
            </div>
          )}
        </Reveal>
        <Reveal className='mt-[30px] xl: flex max-w-[40%] items-center justify-center lte-870:mx-auto lte-870:min-w-[90%]'>
          {
            project?.type === 'mobile' ?
              <img
                src={project.cover}
                alt="project image"
                className={`my-[1em] max-h-[50rem] max-w-[60rem] [filter:drop-shadow(0_0_10em_white)] dark:[filter:drop-shadow(0_0_6em_rgba(255,255,255,0.15))] lte-1005:max-w-[70vw] lte-500:w-full ${
                  project.coverFitHeight ? 'h-[70vh] lte-1005:h-auto lte-1005:w-[40vw]' : ''
                }`}
              />
              : <ProjectFrame src={project.cover} alt={"project image"} url={project?.liveUrl || project?.codeUrl} cursorText={project?.liveUrl ? 'Live' : 'Code'} />
          }
        </Reveal>
      </div>
    </section>
  )
}
