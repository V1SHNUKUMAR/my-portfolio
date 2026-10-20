import { PROJECTS } from '../data/projects'
import ProjectCard from './projects/ProjectCard'

export default function Projects() {
  // offset for the fixed header (was `body { padding-top: 7.5em }` on this page)
  return (
    <div className="pt-[7.5em]">
      {PROJECTS.map((project, i) => (
        <ProjectCard key={project.name} project={project} position={i + 1} />
      ))}
    </div>
  )
}
