/** Centered heading with a short bar underneath (about page `.heading`). */
export default function SectionHeading({ children, light = false }) {
  return (
    <div className="my-[5em]">
      <h1 className="mx-auto my-[0.2em] text-center text-[4em] lte-500:text-[3em] lte-350:text-[2.5em]">
        {children}
      </h1>
      <hr className={`m-auto h-[0.5em] w-[7em] ${light ? 'bg-white' : 'bg-black dark:bg-white'}`} />
    </div>
  )
}
