import { useRef } from 'react'
import { revealClass, useReveal } from '../../hooks/useReveal'

/** Fades/slides its element in the first time it enters the viewport. */
export default function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const ref = useRef(null)
  const visible = useReveal(ref)

  return (
    <Tag ref={ref} className={`${revealClass(visible)} ${className}`} {...rest}>
      {children}
    </Tag>
  )
}
