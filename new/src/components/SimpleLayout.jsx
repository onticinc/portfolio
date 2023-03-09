import { Container } from '@/components/Container'
import { AvatarImage } from './Avatar'

export function SimpleLayout({ title, intro, AvatarImage, children }) {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          {intro}
        </p>
      </header>
      <div className="mt-16 sm:mt-20">
        {AvatarImage}
        {children}
        </div>
    </Container>
  )
}
