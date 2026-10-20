const hostOf = (url) => {
  try {
    return new URL(url).hostname.replace(/^www\./, '')
  } catch {
    return url
  }
}

/**
 * Project screenshot dressed as a minimal browser window: a chrome bar with the
 * site's domain, the image, and a caption bar. A round arrow button straddles the
 * image/caption seam and opens the live site.
 */
export default function ProjectFrame({ src, alt, url, label, caption = 'Live project', cursorText = 'Live' }) {
  const host = url ? hostOf(url) : ''

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={url ? `Open ${host}` : alt}
      data-cursor-text={url ? cursorText : undefined}
      className="group block w-full overflow-hidden rounded-[10px] border border-black/10 bg-white text-black no-underline shadow-[0_20px_60px_-30px_rgba(0,0,0,0.35)] transition-colors duration-500 hover:border-black/25 dark:border-white/10 dark:bg-[#0c0c0c] dark:text-white dark:hover:border-white/25"
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-[12px] border-b border-black/10 px-[16px] py-[12px] dark:border-white/10">
        <span className="flex shrink-0 gap-[5px]" aria-hidden="true">
          <span className="size-[6px] rounded-full bg-red-500 opacity-40" />
          <span className="size-[6px] rounded-full bg-yellow-400 opacity-40" />
          <span className="size-[6px] rounded-full bg-green-400 opacity-40" />
        </span>
        <span className="min-w-0 flex-1 truncate text-center font-mono text-[11px] tracking-wide opacity-60">{host}</span>
        <i
          className="fa fa-external-link shrink-0 text-[11px] opacity-40 transition-opacity duration-300 group-hover:opacity-90"
          aria-hidden="true"
        />
      </div>

      {/* Screenshot */}
      <div className="relative">
        <div className="aspect-[18/10] overflow-hidden">
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className="block h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        </div>
        <span
          aria-hidden="true"
          className="absolute right-[24px] bottom-0 z-10 flex size-[48px] translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/80 text-white backdrop-blur transition-[transform,background-color] duration-500 group-hover:bg-brand lte-500:size-[40px]"
        >
          <i className="fa fa-arrow-right -rotate-45 text-[18px] transition-transform duration-500 group-hover:rotate-0" />
        </span>
      </div>

      {/* Caption bar */}
      <div className="flex items-center justify-between gap-[16px] border-t border-black/10 px-[24px] py-[14px] pr-[96px] font-mono text-[10px] tracking-[0.18em] text-black/60 uppercase dark:border-white/10 dark:text-white/60 lte-500:pr-[80px]">
        <span className="truncate">{label}</span>
        <span className="shrink-0">{caption}</span>
      </div>
    </a>
  )
}
