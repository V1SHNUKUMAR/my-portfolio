import { useEffect } from 'react'
import Typed from 'typed.js'

/** Runs a Typed.js typing animation inside the element behind `ref`. */
export function useTyped(ref, options) {
  useEffect(() => {
    if (!ref.current) return undefined
    const typed = new Typed(ref.current, options)
    return () => typed.destroy()
    // options are static object literals at every call site
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref])
}
