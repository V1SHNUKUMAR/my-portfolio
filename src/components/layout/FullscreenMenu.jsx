import { useEffect } from 'react'
import { NavLink } from 'react-router'
import { NAV_LINKS, RESUME_URL } from '../../data/site'
import ShineButton from '../ui/ShineButton'
import SocialLinks from '../ui/SocialLinks'

const itemClass = 'my-[3em] p-[1rem] font-semibold'

export default function FullscreenMenu({ open, onClose }) {
  useEffect(() => {
    if (!open) return undefined
    const onKeyDown = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

  return (
    <div
      id="fullscreen-menu"
      inert={!open}
      className={`fixed top-0 left-0 z-[100] flex h-screen w-full items-center justify-center bg-black/50 backdrop-blur-[10px] [transition:all_.3s] ${
        open ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close menu"
        className="absolute top-[10px] right-[20px] cursor-pointer border-none bg-transparent text-[3em] text-white"
      >
        &#10006;
      </button>
      <nav aria-label="Mobile">
        <ul className="list-none text-center">
          {NAV_LINKS.map((link) => (
            <li key={link.to} className={`${itemClass} border-b border-b-white`}>
              <NavLink
                to={link.to}
                end
                onClick={onClose}
                className={({ isActive }) =>
                  `text-[2.5em] no-underline hover:text-tomato ${isActive ? 'text-[rgb(255,88,88)]' : 'text-white'}`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li className={itemClass}>
            <ShineButton href={RESUME_URL} newTab icon="fa-solid fa-download">
              Download CV
            </ShineButton>
          </li>
          <li className={itemClass}>
            <SocialLinks />
          </li>
        </ul>
      </nav>
    </div>
  )
}
