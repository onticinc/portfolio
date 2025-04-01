import Link from 'next/link' 
import SocialLinks from './SocialLinks'

import { Container } from '@/components/Container'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition text-zinc-800 hover:text-orange-500 dark:text-white dark:hover:text-orange-500"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="">
    
        <div className="bg-zinc-200 w-full mt-2 p-1 dark:bg-zinc-700">
        <div className="rounded-lg border-zinc-100 bg-neutral-50 p-3   dark:bg-zinc-800">
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/software">Software</NavLink>
                <NavLink href="/audio">Audio</NavLink>
                <NavLink href="/podcast">Podcast</NavLink>
              </div>
              <SocialLinks />
              <p className="text-sm text-zinc-800 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} Ontic Llc. All rights
                reserved.
              </p>
            </div>
          </div>
        
        </div>

    </footer>
  )
}
