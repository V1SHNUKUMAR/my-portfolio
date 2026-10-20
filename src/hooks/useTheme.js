import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'theme'
const root = document.documentElement

function readStored() {
  try {
    return localStorage.getItem(STORAGE_KEY)
  } catch {
    return null
  }
}

/**
 * Light / dark theme as a `.dark` class on <html>. index.html sets the initial class
 * before paint; this keeps it in sync, persists explicit choices and follows the OS
 * setting until the visitor picks one.
 */
export function useTheme() {
  const [theme, setTheme] = useState(() => (root.classList.contains('dark') ? 'dark' : 'light'))

  useEffect(() => {
    root.classList.toggle('dark', theme === 'dark')
  }, [theme])

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = (e) => {
      if (!readStored()) setTheme(e.matches ? 'dark' : 'light')
    }
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next = current === 'dark' ? 'light' : 'dark'
      try {
        localStorage.setItem(STORAGE_KEY, next)
      } catch {
        // storage blocked (private mode etc.) — the choice just won't persist
      }
      return next
    })
  }, [])

  return { theme, toggleTheme }
}
