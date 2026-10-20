import { gsap } from 'gsap'
import { useLayoutEffect, useRef, useState } from 'react'

const NAME = 'Vishnu Kumar'
const SEEN_KEY = 'preloader-seen'
const MAX_WAIT_MS = 4000

function shouldShow() {
  try {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false
    return !sessionStorage.getItem(SEEN_KEY)
  } catch {
    return true
  }
}

// Resolves once the page has loaded, or after MAX_WAIT_MS so a slow asset never blocks the site.
function pageLoaded() {
  if (document.readyState === 'complete') return Promise.resolve()
  return new Promise((resolve) => {
    window.addEventListener('load', resolve, { once: true })
    setTimeout(resolve, MAX_WAIT_MS)
  })
}

/**
 * Intro shown once per session on the home page: the name rises in letter by letter while a
 * 0 → 100 counter and progress line run, then two stacked curtains wipe up to reveal the hero.
 */
export default function Preloader() {
  const [show, setShow] = useState(shouldShow)
  const root = useRef(null)
  const count = useRef(null)

  useLayoutEffect(() => {
    if (!show) return
    let cancelled = false
    const html = document.documentElement
    const prevOverflow = html.style.overflow
    html.style.overflow = 'hidden'

    const ctx = gsap.context(() => {
      const counter = { value: 0 }
      const intro = gsap
        .timeline()
        .from('[data-pl-letter]', { yPercent: 110, duration: 0.9, ease: 'power4.out', stagger: 0.045 })
        .from('[data-pl-fade]', { opacity: 0, y: 12, duration: 0.6, ease: 'power2.out', stagger: 0.1 }, 0.3)
        .to(counter, {
          value: 100,
          duration: 1.8,
          ease: 'power2.inOut',
          onUpdate: () => {
            if (count.current) count.current.textContent = String(Math.round(counter.value)).padStart(3, '0')
          },
        }, 0)
        .fromTo('[data-pl-bar]', { scaleX: 0 }, { scaleX: 1, duration: 1.8, ease: 'power2.inOut' }, 0)

      Promise.all([intro.then(), pageLoaded()]).then(() => {
        if (cancelled) return
        gsap
          .timeline({
            onComplete: () => {
              try {
                sessionStorage.setItem(SEEN_KEY, '1')
              } catch {
                // private mode: the intro simply plays again next time
              }
              setShow(false)
            },
          })
          .to('[data-pl-letter]', { yPercent: -110, duration: 0.6, ease: 'power3.in', stagger: 0.02 })
          .to('[data-pl-fade]', { opacity: 0, duration: 0.3 }, 0)
          .to('[data-pl-panel="front"]', { yPercent: -100, duration: 0.9, ease: 'power4.inOut' }, 0.45)
          .to('[data-pl-panel="back"]', { yPercent: -100, duration: 0.9, ease: 'power4.inOut' }, 0.6)
      })
    }, root)

    return () => {
      cancelled = true
      ctx.revert()
      html.style.overflow = prevOverflow
    }
  }, [show])

  if (!show) return null

  return (
    <div ref={root} aria-hidden="true" className="pointer-events-none fixed inset-0 z-[1000]">
      {/* Trailing curtain: a brand-gradient strip that follows the main panel up. */}
      <div
        data-pl-panel="back"
        className="absolute inset-0 bg-[linear-gradient(120deg,#fc5c7d,#6a82fb)]"
      />
      <div
        data-pl-panel="front"
        className="absolute inset-0 flex flex-col justify-between bg-[#0c0f14] p-[3rem] text-white lte-500:p-[2rem]"
      >
        <div className="flex justify-between font-mono text-[1.2rem] tracking-[0.3em] text-white/50 uppercase">
          <span data-pl-fade className="text-[1.2rem]">Portfolio</span>
          <span data-pl-fade className="text-[1.2rem]">©{new Date().getFullYear()}</span>
        </div>

        <div className="text-center">
          <h1 className="m-0 flex justify-center overflow-hidden pb-[0.1em] text-[8rem] leading-[1.05] font-extrabold tracking-[-0.02em] lte-780:text-[5.5rem] lte-440:text-[4.2rem]">
            {[...NAME].map((ch, i) => (
              <span
                key={i}
                data-pl-letter
                className="inline-block bg-[linear-gradient(120deg,#ffffff_30%,#a5b4fc)] bg-clip-text [font-size:inherit] text-transparent"
              >
                {ch === ' ' ? ' ' : ch}
              </span>
            ))}
          </h1>
          <p data-pl-fade className="mt-[1.2rem] mb-0 text-[1.4rem] tracking-[0.45em] text-white/60 uppercase lte-500:text-[1.1rem]">
            Software Developer
          </p>
        </div>

        <div>
          <div className="mb-[1.2rem] flex items-end justify-between">
            <span data-pl-fade className="font-mono text-[1.2rem] tracking-[0.3em] text-white/50 uppercase">
              Loading
            </span>
            <span
              ref={count}
              data-pl-fade
              className="font-mono text-[6rem] leading-none font-bold tabular-nums lte-500:text-[4rem]"
            >
              000
            </span>
          </div>
          <div className="h-[2px] w-full bg-white/10">
            <div data-pl-bar className="h-full w-full origin-left bg-[linear-gradient(90deg,#fc5c7d,#6a82fb)]" />
          </div>
        </div>
      </div>
    </div>
  )
}
