import Head from 'next/head'
// import { AvatarImage } from '@/components/Avatar'
import WorkHistory from '@/components/WorkHistory'
import Bio from '@/components/Bio'
import Avatar from '@/images/avatar.png'
import Image from 'next/image'
import FeaturedProject from '@/components/FeaturedProject'
import Education from '@/components/Education'
import Newsletter from '@/components/Newsletter'
import ShortIntro from '@/components/ShortIntro'

export default function Home() {
  return (
    <>
      <Head>
        <title>Michael Smith - Create, Document, Produce. </title>
        <meta name="portfolio" content="Portfolio of work by Michael Smith." />
      </Head>
        <div className="grid mt-10 p-5 xl:m-0 xl:grid-cols-3 gap-4 ">
          {/* Left Column */}
          
            {/* Short Intro */}
            <div id="avatar" className="md:col-span-2 m-4">
              <ShortIntro />
              <FeaturedProject />
            </div>

          {/* End Left Column */}
         
          {/* Right Column */}
          <div id="avatar" className="md:col-span-2 m-4 xl:m-0 xl:col-span-1">
      
            <WorkHistory />
            
            <Education />
          </div>
            
        </div>
       
      
      
    
    </>
  )
}

