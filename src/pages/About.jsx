import AchievementsSection from '../components/sections/AchievementsSection'
import DsaSection from '../components/sections/DsaSection'
import { ALL_CERTIFICATES } from '../data/profile'
import AboutHero from './about/AboutHero'
import EducationSection from './about/EducationSection'
import ExperienceSection from './about/ExperienceSection'
import HobbiesSection from './about/HobbiesSection'
import TechStackSection from './about/TechStackSection'

export default function About() {
  return (
    <>
      <AboutHero />
      <EducationSection />
      <TechStackSection />
      <ExperienceSection />
      <AchievementsSection certificates={ALL_CERTIFICATES} revealHeadline />
      <DsaSection reveal />
      <HobbiesSection />
    </>
  )
}
