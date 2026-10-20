import { Link } from 'react-router'
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_HREF, NAV_LINKS } from '../../data/site'
import Logo from '../ui/Logo'
import Reveal from '../ui/Reveal'
import SocialLinks from '../ui/SocialLinks'

const columnClass = 'w-[33.33%] lte-800:w-full'
const headingClass = 'my-[0.5em] text-center text-[3em] text-white'
const mutedLinkClass = 'text-[1.5em] text-[rgba(255,255,255,0.74)] no-underline hover:text-white'

export default function Footer() {
  return (
    <footer className="relative flex min-h-[50vh] flex-col justify-evenly bg-ink pb-[0.5em] dark:border-t dark:border-t-white/10 dark:bg-[#0a0d11]">
      <Reveal data-cursor-enlarge className="flex flex-wrap items-center justify-around pb-[1em]">
        <div className={columnClass}>
          <h1 className={headingClass}>Quick Links</h1>
          <ul className="list-none">
            {NAV_LINKS.map((link) => (
              <li key={link.to} className="mx-auto my-[1em] text-center">
                <Link to={link.to} className={mutedLinkClass}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={columnClass}>
          <div className="m-[2em] text-center">
            <Logo className="my-[0.5em] text-center text-[1.5em]" />
          </div>
          <SocialLinks className="mx-0 my-[2em]" />
        </div>
        <div className={columnClass}>
          <h1 className={headingClass}>Contact</h1>
          <div className="flex flex-col items-center justify-center">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`mx-auto my-[1em] block text-center [transition:.2s] ${mutedLinkClass}`}
            >
              <i className="fa fa-envelope" aria-hidden="true" /> {CONTACT_EMAIL}
            </a>
            <a
              href={CONTACT_PHONE_HREF}
              className={`mx-auto my-[1em] block text-center [transition:.2s] ${mutedLinkClass}`}
            >
              <i className="fa fa-phone" aria-hidden="true" /> {CONTACT_PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </Reveal>
      <div className="pt-[0.5em] text-center text-[1.3em] text-[rgba(255,255,255,0.74)] lte-800:[border-top:.5px_solid_grey]">
        &#169; Copyright, All Rights Reserved
      </div>
    </footer>
  )
}
