import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'





export default function Home() {
  return (
    <>
        <title>Michael Smith - Create, Document, Produce. </title>
        <meta name="portfolio" content="Portfolio of work by Michael Smith." />
      
        <div className="grid p-16 lg:gap-12 md:grid md:grid-rows-2 lg:grid-flow-row">
          <div id="avatar mb-20">

            <div className="w-full justify-center rounded-2xl border border-zinc-100 p-6  dark:border-zinc-700/40 ">
              <div className="flex flex-auto flex-row">
                <Image
                  src={Avatar}
                  alt="Mike Smith - Nome AK"
                  className="rounded-l-lg  object-cover h-44 w-44"
                />
                <Bio />
              </div>
              <h4 className="dark:text-zinc-400 ">Bering Sea - Nome AK</h4>
            </div>
          </div>
            <WorkHistory />
            <Education />
        </div>
      
    
    </>
  )
}
