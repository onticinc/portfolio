import Head from 'next/head'
import ImageSlider from '@/components/ImageSlider'
// import { AvatarImage } from '@/components/Avatar'
import Resume from '@/components/Resume'
import { Container } from '@/components/Container'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import SocialLinks from '@/components/SocialLinks'
import Newsletter from '@/components/Newsletter'
import Bio from '@/components/Bio'
import Avatar from '@/images/avatar.png'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Michael Smith - Create, Document, Produce. </title>
        <meta name="portfolio" content="Portfolio of work by Michael Smith." />
      </Head>
      
      <Container className="mt-16 sm:mt-32 ">
        <div className=" grid lg:p-16  lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-12">
            <div id="avatar">
              <Image
                src={Avatar} alt="Mike Smith - Nome AK"
                className="w-full rounded-lg bg-zinc-100 dark:bg-zinc-800 "
              />
              <h4 className="dark:text-zinc-400">Bering Sea - Nome AK</h4>
            </div>
            
            <div id="bio" className="mt-20">
            
              <Bio />
              <SocialLinks />
            </div>
        </div>
      </Container>

      <div className="flex flex-col">
        <ImageSlider />
      </div>

      <div className="mb-36 flex flex-row p-8">
        {/* PUT ARTICLE HERE */}
        <Container class="h-full">
          <Resume />
       
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
