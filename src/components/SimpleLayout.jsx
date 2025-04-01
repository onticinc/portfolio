import { Container } from '@/components/Container'
import { AvatarImage } from './Avatar'

export function SimpleLayout({ title, intro, children }) {
  return (
    <Container className="mt-10 grid gap-4 p-5 xl:m-0 xl:grid-cols-3 ">
      <header className="bg-neutral-50 shadow p-10 rounded-xl -mx-4  dark:bg-zinc-800/90">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          {intro}
        </p>
      </header>
      <div className="mt-10">
        {children}
        </div>
    </Container>
  )
}
