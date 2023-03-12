import Head from 'next/head'
import ImageSlider from '@/components/ImageSlider'
// import { AvatarImage } from '@/components/Avatar'
import WorkHistory from '@/components/WorkHistory'
import { Container } from '@/components/Container'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import SocialLinks from '@/components/SocialLinks'
import Newsletter from '@/components/Newsletter'
import Bio from '@/components/Bio'
import Avatar from '@/images/avatar.png'
import Image from 'next/image'
import Education from '@/components/Education'

export default function Home() {
  return (
    <>
      <Head>
        <title>Michael Smith - Create, Document, Produce. </title>
        <meta name="portfolio" content="Portfolio of work by Michael Smith." />
      </Head>
      
      <Container className="mt-16 sm:mt-32 ">
        <div className="grid grid-cols-1 p-16 lg:max-width-10xl lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-12">
            <div id="avatar mb-20
            ">
              <div className="rounded-2xl w-2/3 border border-zinc-100 p-6 dark:border-zinc-700/40 ">
                <Image
                  src={Avatar} alt="Mike Smith - Nome AK" className="w-full rounded-2xl h-full object-fill"
                />
                <h4 className="dark:text-zinc-400">Bering Sea - Nome AK</h4>
              </div>
            </div>
            
            <div id="bio" className="divide-solid w-full">
              <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 ">
                <Bio />
                <SocialLinks />
              </div>
              <WorkHistory />
              <Education />
            </div>
        </div>
      </Container>

        <ImageSlider />

        {/* PUT ARTICLE HERE */}
        <Container class="h-full">
          <Newsletter />
        </Container>

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
