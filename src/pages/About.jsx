import AchievementsSection from '../components/sections/AchievementsSection'
import DsaSection from '../components/sections/DsaSection'
import { ABOUT_CERTIFICATES } from '../data/profile'
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
      <AchievementsSection certificates={ABOUT_CERTIFICATES} revealHeadline />
      <DsaSection reveal />
      <HobbiesSection />
    </>
  )
}
