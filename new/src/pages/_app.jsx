import { useEffect, useRef } from 'react'
import ImageSlider from '@/components/ImageSlider'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

import '@/styles/tailwind.css'
import 'focus-visible'
import { Container } from '@/components/Container'

function usePrevious(value) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

export default function App({ Component, pageProps, router }) {
  let previousPathname = usePrevious(router.pathname)

  return (
    <>
      <div className="fixed inset-0 flex min-w-0  justify-center">
        <div className="flex w-full">
          <div className="w-full  bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>
      <div className="relative">
        <main>
          <Header />
          <Component previousPathname={previousPathname} {...pageProps} />
        </main>
        
          <ImageSlider/>
        
        <Footer />
      </div>
    </>
  )
}
