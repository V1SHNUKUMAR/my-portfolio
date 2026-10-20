import { Fragment } from 'react'
import { NavLink, useLocation } from 'react-router'
import { NAV_LINKS, RESUME_URL } from '../../data/site'
import { useScrolled } from '../../hooks/useScrolled'
import Logo from '../ui/Logo'
import ShineButton from '../ui/ShineButton'
import ThemeToggle from '../ui/ThemeToggle'

const linkClass = ({ isActive }) =>
  `relative mx-[0.7em] my-[5px] rounded-[5px] py-[0.6em] text-[1.8em] no-underline [transition:.2s] hover:text-tomato hover:[text-shadow:0px_0px_10px_tomato] group-hover:[&:not(:hover)]:[filter:blur(2px)] ${
    isActive ? 'text-tomato [text-shadow:0px_0px_10px_tomato]' : 'text-inherit'
  }`

export default function Header({ menuOpen, onOpenMenu }) {
  const scrolled = useScrolled()
  const { pathname } = useLocation()
  // the contact page keeps the header in the document flow; the about page has a dark hero
  const position = pathname === '/contact' ? 'sticky' : 'fixed'
  const menuIconColor = pathname === '/about' ? 'text-white' : 'text-[color:grey]'

  return (
    <header
      className={`${position} top-0 z-50 w-full text-[color:grey] [transition:all_.5s] ${
        scrolled
          ? 'border-b border-b-[rgb(212,212,212)] bg-white/20 backdrop-blur-[10px] dark:border-b-white/10 dark:bg-black/30 lte-800:p-[10px_5px]'
          : ''
      }`}
    >
      <div className="flex justify-between p-[20px_50px] lte-800:p-[1em_2em]">
        <div className="mx-0 my-auto">
          <Logo />
        </div>
        <div className="flex items-center lte-800:hidden">
          <nav aria-label="Main">
            <ul className="group">
              {NAV_LINKS.map((link, i) => (
                <Fragment key={link.to}>
                  {i > 0 && ' '}
                  <li className="inline-block list-none">
                    <NavLink to={link.to} end className={linkClass}>
                      {link.label}
                    </NavLink>
                  </li>
                </Fragment>
              ))}
            </ul>
          </nav>
          <div className="w-[5em]" />
          <div>
            <ShineButton href={RESUME_URL} newTab icon="fa-solid fa-download">
              Download CV
            </ShineButton>
          </div>
        </div>
        {/* one toggle for both layouts, so desktop and mobile never disagree about the theme */}
        <div className="flex items-center gap-[1.5em]">
          <ThemeToggle className="ml-[2em] lte-800:ml-0" />
          <button
            type="button"
            onClick={onOpenMenu}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="fullscreen-menu"
            className={`hidden cursor-pointer border-none bg-transparent text-[2.5em] mix-blend-difference lte-800:inline-block ${menuIconColor}`}
          >
            <i className="fa fa-bars" aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  )
}
