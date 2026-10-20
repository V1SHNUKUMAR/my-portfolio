import { useState } from 'react'

/** The 3s "< Welcome />" intro shown when the home page loads. */
export default function Preloader() {
  const [done, setDone] = useState(false)
  if (done) return null

  return (
    <div
      aria-hidden="true"
      onAnimationEnd={(e) => e.target === e.currentTarget && setDone(true)}
      className="fixed top-0 left-0 z-[999] flex h-[calc(100vh_+_7vh)] w-full animate-starter items-center justify-center bg-[linear-gradient(to_top,#0206177b,#94a3b887)] backdrop-blur-[30px] [transform:translateY(-10%)]"
    >
      <div className="flex items-center text-[4rem] text-white">
        <p className="text-[4rem] text-white">&lt;</p>
        <h1 className="w-0 animate-open-text overflow-hidden text-[4rem] whitespace-nowrap text-white lte-780:text-[3rem]">
          Welcome
        </h1>
        <p className="text-[4rem] text-white">/&gt;</p>
      </div>
    </div>
  )
}
