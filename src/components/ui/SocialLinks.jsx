import { SOCIAL_LINKS } from '../../data/site'

export default function SocialLinks({ className = '' }) {
  return (
    <div className={`flex w-full flex-wrap justify-center ${className}`}>
      {SOCIAL_LINKS.map((link) => (
        <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
          <div className="m-[0.5em] inline-block h-[3em] w-[3em] rounded-full hover:opacity-50">
            <img src={link.icon} alt={link.alt} className="h-full w-full" />
          </div>
        </a>
      ))}
    </div>
  )
}
