import { useEffect, useState } from 'react'

/** True while the page is scrolled away from the very top (was js/navbar.js). */
export function useScrolled() {
  const [scrolled, setScrolled] = useState(() => window.scrollY > 0)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0)
    onScroll()
    document.addEventListener('scroll', onScroll, { passive: true })
    return () => document.removeEventListener('scroll', onScroll)
  }, [])

  return scrolled
}
