import AchievementsSection from '../components/sections/AchievementsSection'
import ContactForm from '../components/sections/ContactForm'
import DsaSection from '../components/sections/DsaSection'
import Preloader from '../components/sections/Preloader'
import { HOME_CERTIFICATES } from '../data/profile'
import AboutSummary from './home/AboutSummary'
import FeaturedProjects from './home/FeaturedProjects'
import HeroSection from './home/HeroSection'

export default function Home() {
  return (
    <>
      <Preloader />
      <HeroSection />
      <FeaturedProjects />
      <AboutSummary />
      <AchievementsSection certificates={HOME_CERTIFICATES} />
      <DsaSection />
      <section className="relative flex w-full items-center justify-center px-[1em] py-[5em] before:absolute before:top-0 before:left-[22%] before:-z-2 before:h-[200px] before:max-h-[30vw] before:w-[200px] before:max-w-[30vw] before:animate-bounce-up before:rounded-full before:bg-[rgb(0,183,255)] before:shadow-[0px_0px_10px_80px_rgb(0,183,255)] after:absolute after:right-[20%] after:bottom-0 after:-z-1 after:h-[200px] after:max-h-[30vw] after:w-[200px] after:max-w-[30vw] after:animate-bounce-down after:rounded-full after:bg-tomato after:shadow-[0px_0px_10px_80px_tomato]">
        <ContactForm />
      </section>
    </>
  )
}
