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

      <div className="p-10">
        <div className="flex flex-row items-center justify-center lg:mt-20">
          <div id="avatar" className="col-span-1 justify-center lg:w-1/3">
            <Image
              src={Avatar}
              className="w-full rounded-md bg-zinc-100 dark:bg-zinc-800 "
            />
            <h4 className="dark:text-zinc-400">Bering Sea - Nome AK</h4>
          </div>
          <div className="w-full lg:w-2/3">
            <div id="bio" className="col-span-1 m-36">
              <Bio />
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <ImageSlider />
      </div>

      <div className="mb-36 flex flex-row p-8">
        {/* PUT ARTICLE HERE */}
        <Container class="h-full w-1/2">
          <Resume />
        </Container>
        <Container class="h-full w-1/2">
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
