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
import { Header } from '@/components/Header'



export default function Home(articles) {


  return (
    <>
      <Head>
        <title>Michael Smith - Create, Document, Produce. </title>
        <meta name="portfolio" content="Portfolio of work by Michael Smith." />
        
      </Head>
      <div className="sticky top-0">
      <Header />
      </div>

      <div className="flex flex-row justify-center mt-20 items-center">
        <div id="avatar" className="col-span-1 hidden lg:block w-1/3">
          <AvatarImage />
        </div>
       <Container className="w-2/3 ">
          <div id="bio" className="col-span-1 mr-5">
            <Bio />
            <SocialLinks />
          </div>    
        </Container>
      </div>  
      <div className="flex flex-col">
          <ImageSlider />      
      </div>

      <div className="flex flex-row p-8">
        <Container class="w-1/2">
          <Newsletter className="pt-64" />
        </Container>
        <Container class="w-1/2">
          <Resume />
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
