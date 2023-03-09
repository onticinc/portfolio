import clsx from 'clsx'

export default function BioCard(){

function clamp(number, a, b) {
  let min = Math.min(a, b)
  let max = Math.max(a, b)
  return Math.min(Math.max(number, min), max)
}

function BioContainer({ className, ...props }) {
  return (
    <div
      className={clsx(
        className,
        'rounded-md p-2 bg-white/90 shadow-lg shadow-zinc-800/5 ring-1 ring-orange-500/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10'
      )}
      {...props}
    />
  )
}

function Bio() {
  let bioRef = useRef()
  let isInitial = useRef(true)

  useEffect(() => {
    let downDelay = bioRef.current?.offsetTop ?? 1
    let upDelay = 64

    function setProperty(property, value) {
      document.documentElement.style.setProperty(property, value)
    }

    function removeProperty(property) {
      document.documentElement.style.removeProperty(property)
    }

    function updateBioStyles() {
      let fromScale = 8
      let toScale = 60 / 15
      let fromX = 35
      let toX = 20 

      let scrollY = downDelay - window.scrollY

      let scale = (scrollY * (fromScale - toScale)) / downDelay + toScale
      scale = clamp(scale, fromScale, toScale)

      let x = (scrollY * (fromX - toX)) / downDelay + toX
      x = clamp(x, fromX, toX)

      setProperty(
        'transform',
        `translate3d(${x}rem, 0, 0) scale(${scale})`
      )
    }

    function updateStyles() {
      updateAvatarStyles()
      isInitial.current = true
    }

    updateStyles()
    window.addEventListener('scroll', updateStyles, { passive: false })
    window.addEventListener('resize', updateStyles)

    return () => {
      window.removeEventListener('scroll', updateStyles)
      window.removeEventListener('resize', updateStyles)
    }
  })
}

return(
        <>
        <BioContainer>
            <div className="text-base text-zinc-600 dark:text-zinc-400" style={{ transform: 'var(transform)' }}>
                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                  Create, Document, Produce.
                </h1>
                <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                  Software developer, Audio Engineer, Podcast connoisseur... I
                  am a software developer with a passion for audio recording and
                  everything music. Focused on Next JS, React, Postgres, Mongo,
                  TypeScript, and a little bit of python. Currently working on a
                  new app for the Eggs Podcast that should be launching soon.
                </p>
              </div>
              </BioContainer>
        </>
    )
}