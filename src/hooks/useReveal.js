import { useEffect, useState } from 'react'

// One IntersectionObserver shared by every revealed element (was js/common.js).
const callbacks = new WeakMap()
let observer = null

function getObserver() {
  if (!observer) {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callbacks.get(entry.target)?.()
          observer.unobserve(entry.target)
        }
      })
    })
  }
  return observer
}

/** Returns true once the element behind `ref` has scrolled into view (it stays true). */
export function useReveal(ref) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined
    const io = getObserver()
    callbacks.set(el, () => setVisible(true))
    io.observe(el)
    return () => {
      io.unobserve(el)
      callbacks.delete(el)
    }
  }, [ref])

  return visible
}

export function revealClass(visible) {
  return visible ? 'reveal reveal-visible' : 'reveal'
}
