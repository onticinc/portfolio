import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import avatarImage from '@/images/avatar.png'

// Begin Avatar

function clamp(number, a, b) {
  let min = Math.min(a, b)
  let max = Math.max(a, b)
  return Math.min(Math.max(number, min), max)
}

function AvatarContainer({ className, ...props }) {
  return (
    <div
      className={clsx(
        className,
        'h-32 w-32 rounded-md bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-orange-500/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10'
      )}
      {...props}
    />
  )
}

function Avatar({ large = true, className, ...props }) {
  return (
    <Link
      href="/"
      aria-label="Home"
      className={clsx(className, 'pointer-events-auto')}
      {...props}
    >
      <Image
        src={avatarImage}
        alt=""
       
        className={clsx(
          'mt-20 rounded-md bg-zinc-100 dark:bg-zinc-800',
          large ? 'h-16 w-16' : 'h-9 w-9'
        )}
        priority
      />
    </Link>
  )
}

export function AvatarImage() {
  let avatarRef = useRef()
  let isInitial = useRef(true)

  useEffect(() => {
    let downDelay = avatarRef.current?.offsetTop ?? 1
    let upDelay = 64

    function setProperty(property, value) {
      document.documentElement.style.setProperty(property, value)
    }

    function removeProperty(property) {
      document.documentElement.style.removeProperty(property)
    }

    function updateAvatarStyles() {
      let fromScale = 6
      let toScale = 60 / 50
      let fromX = 28
      let toX = 70 

      let scrollY = downDelay - window.scrollY

      let scale = (scrollY * (fromScale - toScale)) / downDelay + toScale
      scale = clamp(scale, fromScale, toScale)

      let x = (scrollY * (fromX - toX)) / downDelay + toX
      x = clamp(x, fromX, toX)

      setProperty(
        '--avatar-image-transform',
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
  return (
    <>
    
    <div className="mx-auto max-w-2xl mt-36">
      <div
        ref={avatarRef}
        className="mt-[calc(theme(spacing.16)-theme(spacing.3))]"
      />

        <AvatarContainer
          className="transition-opacity animate-ping"
          style={{
            opacity: 'var(--avatar-border-opacity, 0)',
            transform: 'var(--avatar-border-transform)',
          }}
        />
        <Avatar
          className="block h-32 w-32"
          style={{ transform: 'var(--avatar-image-transform)' }}
        />
      </div>
    </>
  )
}
