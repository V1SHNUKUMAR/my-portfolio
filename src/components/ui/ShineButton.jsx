import { Link } from 'react-router'

// Pill button with the white "shine" sweep on hover (was `.buttons button`).
// `overflow-clip` (not hidden) keeps the text baseline, matching how a native <button> sits in a line.
const BASE =
  "relative inline-block cursor-pointer overflow-clip rounded-[8px] px-[1em] py-[0.8em] text-[1.3em] no-underline [transition:.2s_ease-out] hover:-translate-y-[5px] before:absolute before:top-0 before:-left-[20%] before:-z-1 before:h-full before:w-[30%] before:skew-x-30 before:rounded-[30px] before:bg-white/50 before:shadow-[0_0_20px_30px_rgba(255,255,255,0.5)] before:[transition:all_.4s_ease] hover:before:left-[160%]"

const VARIANTS = {
  primary: 'border-none bg-brand font-normal text-white',
  tomato: 'border-none bg-tomato font-normal text-white',
  live: 'border border-[rgba(255,255,255,0.493)] bg-brand font-normal text-white',
  code: 'border border-[rgba(8,144,255,0.493)] bg-white/30 font-bold text-brand dark:bg-white/10',
}

/**
 * Renders a router <Link> (`to`), an external <a> (`href`) or a <button> (neither).
 * `icon` is a Font Awesome class list; `iconAfter` puts it after the label.
 */
export default function ShineButton({
  to,
  href,
  newTab = false,
  variant = 'primary',
  icon,
  iconAfter = false,
  iconClassName = 'text-[1.1em]',
  className = '',
  children,
  ...rest
}) {
  const classes = `${BASE} ${VARIANTS[variant]} ${className}`
  const iconEl = icon && <i className={`${icon} mx-[0.2em] ${iconClassName}`} aria-hidden="true" />
  const content = iconAfter ? (
    <>
      {children} {iconEl}
    </>
  ) : (
    <>
      {iconEl} {children}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    )
  }
  if (href) {
    const tabProps = newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {}
    return (
      <a href={href} className={classes} {...tabProps} {...rest}>
        {content}
      </a>
    )
  }
  return (
    <button className={classes} {...rest}>
      {content}
    </button>
  )
}
