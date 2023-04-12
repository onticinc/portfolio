import { useEffect, useRef } from 'react'
import ImageSlider from '@/components/ImageSlider'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools  } from '@tanstack/react-query-devtools'


import '@/styles/tailwind.css'
import 'focus-visible'

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
      {/* Background Color */}
      <div className="fixed  dark:bg-zinc-900 inset-0 justify-center flex py-10">
        <div className="flex w-full justify-center">
          <div className="w-full bg-white dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>
    
      {/* Main Content */}
      <div className="relative max-w-prose sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-1xl 2xl:max-w-screen-2xl">
        <main>
              <QueryClientProvider client={queryClient}>
              <Header />
              <Component previousPathname={previousPathname} {...pageProps} />
              <Footer />
              </QueryClientProvider>
        </main>
      </div>
    </>
  )
}
