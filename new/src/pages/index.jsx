import Head from 'next/head'
// import { AvatarImage } from '@/components/Avatar'
import WorkHistory from '@/components/WorkHistory'
import { Container } from '@/components/Container'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
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

      <Container className="">
        <div className="grid p-16 lg:gap-12">
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
            <WorkHistory />
            <Education />
          </div>
        </div>
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
