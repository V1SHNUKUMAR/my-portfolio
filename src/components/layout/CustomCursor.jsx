import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router'

const ENLARGE_SELECTOR = '[data-cursor-enlarge]'

/** Blend-mode dot that follows the mouse and grows over `data-cursor-enlarge` elements. */
export default function CustomCursor() {
  const ref = useRef(null)
  const { pathname } = useLocation()

  useEffect(() => {
    const cursor = ref.current

    const onMove = (e) => {
      cursor.style.display = 'block'
      if (
        e.clientX < 1 ||
        e.clientY < 5 ||
        e.clientX > window.innerWidth - 20 ||
        e.clientY > window.innerHeight - 20
      ) {
        gsap.to(cursor, { opacity: 0 })
      } else {
        gsap.to(cursor, { left: `${e.x - 5}px`, top: `${e.y - 5}px`, opacity: '1', ease: 'power3' })
      }
    }

    // Delegated equivalents of mouseenter / mouseleave on each enlarge target.
    const onOver = (e) => {
      const target = e.target.closest?.(ENLARGE_SELECTOR)
      if (target && !target.contains(e.relatedTarget)) {
        gsap.to(cursor, { transform: 'scale(15)' })
      }
    }
    const onOut = (e) => {
      const target = e.target.closest?.(ENLARGE_SELECTOR)
      if (target && !target.contains(e.relatedTarget)) {
        gsap.to(cursor, { transform: 'scale(1)', backgroundColor: 'white' })
      }
    }

    document.body.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)
    return () => {
      document.body.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
      gsap.killTweensOf(cursor)
    }
  }, [])

  // A route change can unmount the hovered element without a mouseout; start the new page small.
  useEffect(() => {
    gsap.to(ref.current, { transform: 'scale(1)' })
  }, [pathname])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed top-[5px] z-[999] hidden h-[10px] w-[10px] rounded-full bg-white mix-blend-difference [transform:scale(1)] lte-1100:h-0 lte-1100:w-0"
    />
  )
}
