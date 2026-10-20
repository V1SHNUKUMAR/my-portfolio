import { useEffect } from 'react'
import VanillaTilt from 'vanilla-tilt'

/** Applies the VanillaTilt hover effect to the element behind `ref`. */
export function useTilt(ref, options) {
  useEffect(() => {
    const el = ref.current
    if (!el) return undefined
    VanillaTilt.init(el, options)
    return () => el.vanillaTilt?.destroy()
    // options are static object literals at every call site
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref])
}
