import { useCallback, useLayoutEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router'
import CustomCursor from './CustomCursor'
import Footer from './Footer'
import FullscreenMenu from './FullscreenMenu'
import Header from './Header'

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()
  const closeMenu = useCallback(() => setMenuOpen(false), [])

  // Each page used to be a fresh document load, so always start at the top.
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return (
    <>
      <FullscreenMenu open={menuOpen} onClose={closeMenu} />
      <Header menuOpen={menuOpen} onOpenMenu={() => setMenuOpen(true)} />
      <main>
        <Outlet />
      </main>
      <Footer />
      <CustomCursor />
    </>
  )
}
