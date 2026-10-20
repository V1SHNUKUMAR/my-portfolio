import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router'

const ENLARGE_SELECTOR = '[data-cursor-enlarge]'
const TEXT_SELECTOR = '[data-cursor-text]'

/**
 * Blend-mode dot that follows the mouse and grows over `data-cursor-enlarge` elements.
 * Over `data-cursor-text="…"` elements the dot is swapped for a label bubble showing that text.
 */
export default function CustomCursor() {
  const ref = useRef(null)
  const labelRef = useRef(null)
  const { pathname } = useLocation()

  useEffect(() => {
    const cursor = ref.current
    const label = labelRef.current
    let mode = 'default'
    gsap.set(label, { xPercent: -50, yPercent: -50, scale: 0 })

    const setMode = (next, text) => {
      if (next === mode && next !== 'text') return
      mode = next
      if (next === 'text') {
        label.textContent = text
        gsap.to(cursor, { transform: 'scale(0)' })
        gsap.to(label, { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(2)' })
        return
      }
      gsap.to(label, { scale: 0, opacity: 0, duration: 0.2 })
      gsap.to(cursor, { transform: next === 'enlarge' ? 'scale(15)' : 'scale(1)' })
    }

    const onMove = (e) => {
      cursor.style.display = 'block'
      label.style.display = 'flex'
      if (
        e.clientX < 1 ||
        e.clientY < 5 ||
        e.clientX > window.innerWidth - 20 ||
        e.clientY > window.innerHeight - 20
      ) {
        gsap.to([cursor, label], { opacity: 0 })
      } else {
        gsap.to(cursor, { left: `${e.x - 5}px`, top: `${e.y - 5}px`, opacity: '1', ease: 'power3' })
        gsap.to(label, { left: `${e.x}px`, top: `${e.y}px`, ease: 'power3' })
      }
    }

    // Resolve the cursor mode from whatever element the pointer just entered.
    const onOver = (e) => {
      const textTarget = e.target.closest?.(TEXT_SELECTOR)
      if (textTarget) setMode('text', textTarget.dataset.cursorText)
      else setMode(e.target.closest?.(ENLARGE_SELECTOR) ? 'enlarge' : 'default')
    }
    const onOut = (e) => {
      if (!e.relatedTarget) setMode('default')
    }

    document.body.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)
    return () => {
      document.body.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
      gsap.killTweensOf([cursor, label])
    }
  }, [])

  // A route change can unmount the hovered element without a mouseout; start the new page small.
  useEffect(() => {
    gsap.to(ref.current, { transform: 'scale(1)' })
    gsap.to(labelRef.current, { scale: 0, opacity: 0 })
  }, [pathname])

  return (
    <>
      <div
        ref={ref}
        aria-hidden="true"
        className="pointer-events-none fixed top-[5px] z-[999] hidden h-[10px] w-[10px] rounded-full bg-white mix-blend-difference [transform:scale(1)] lte-1100:h-0 lte-1100:w-0"
      />
      <div
        ref={labelRef}
        aria-hidden="true"
        className="pointer-events-none fixed z-[999] hidden h-[76px] w-[76px] items-center justify-center rounded-full bg-brand text-[13px] font-semibold tracking-[0.15em] text-white uppercase opacity-0 shadow-[0_10px_30px_rgba(8,144,255,0.45)] lte-1100:hidden!"
      />
    </>
  )
}
