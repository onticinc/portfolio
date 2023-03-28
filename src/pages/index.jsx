import Head from 'next/head'
// import { AvatarImage } from '@/components/Avatar'
import WorkHistory from '@/components/WorkHistory'
import Bio from '@/components/Bio'
import Avatar from '@/images/avatar.png'
import Image from 'next/image'
import Education from '@/components/Education'
import Newsletter from '@/components/Newsletter'

export default function Home() {
  return (
    <>
      <Head>
        <title>Michael Smith - Create, Document, Produce. </title>
        <meta name="portfolio" content="Portfolio of work by Michael Smith." />
      </Head>
    
        <div className="grid mt-10 p-5 xl:m-0 xl:grid-cols-3 gap-4 ">
          
          {/* Left Column */}
          <div id="avatar" className="md:col-span-2 m-4">
            <div className="w-full justify-center rounded-2xl border border-zinc-100 p-10   dark:border-zinc-700/40 ">
              <div className="lg:flex lg:flex-auto lg:flex-row">
                <Image
                  src={Avatar}
                  alt="Mike Smith - Nome AK"
                  className=" object-cover w-full lg:h-80 lg:w-80"
                />
              
                <Bio className="rounded-bl-lg"/>
              </div>
              <h4 className="dark:text-zinc-400 hidden mt-3 lg:block">Michael Smith - Bering Sea, Nome AK</h4>
            </div>
            <Newsletter />
          </div>
         
          {/* Right Column */}
          <div id="avatar" className="md:col-span-2 m-4 xl:m-0 xl:col-span-1">
      
            <WorkHistory />
            
            <Education />
          </div>
            
        </div>
       
      
      
    
    </>
  )
}

