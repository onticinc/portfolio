import Head from 'next/head'
import ImageSlider from '@/components/ImageSlider'
import { AvatarImage } from '@/components/Avatar'
import Resume from '@/components/Resume'
import { Container } from '@/components/Container'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import SocialLinks from '@/components/SocialLinks'
import Newsletter from '@/components/Newsletter'
import Bio from '@/components/Bio'
import Portriat from '@/components/Portriat'



export default function Home() {


  return (
    <>
      <Head>
        <title>Michael Smith - Create, Document, Produce. </title>
        <meta name="portfolio" content="Portfolio of work by Michael Smith." /> 
      </Head>

      <div className="flex flex-col m-10 min-w-min justify-center">
        <Portriat className="justify-center"/>
      </div>  

      <div className="flex flex-row justify-center lg:mt-20 items-center">
        <div id="avatar" className="col-span-1 hidden lg:block lg:w-1/3">
          <AvatarImage />
        </div>
       <div className="w-full lg:w-2/3">
          <div id="bio" className="col-span-1 m-36">
            <Bio />
            <SocialLinks />
          </div>    
        </div>
      </div>  
      <div className="flex flex-col">
          <ImageSlider />      
      </div>

      <div className="flex flex-row p-8 mb-36">
       
       {/* PUT ARTICLE HERE */}
        <Container class="w-1/2 h-full">
          <Resume />
        </Container>
        <Container class="w-1/2 h-full">
          <Newsletter />
        </Container>
      </div>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}
