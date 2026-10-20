import { Link } from 'react-router'

/** Gradient "V1SHNU" wordmark used in the header and footer. */
export default function Logo({ className = '' }) {
  return (
    <h1 className={className}>
      <Link
        to="/"
        className="bg-[linear-gradient(to_right,#fc5c7d,#6a82fb)] bg-clip-text font-logo text-[3em] font-bold no-underline [-webkit-text-fill-color:transparent]"
      >
        V1SHNU
      </Link>
    </h1>
  )
}
