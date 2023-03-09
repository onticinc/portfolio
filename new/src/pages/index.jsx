import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { AvatarImage } from '@/components/Avatar'
import Resume from '@/components/Resume'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'

import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'
import { formatDate } from '@/lib/formatDate'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import SocialLinks from '@/components/SocialLinks'
import GithubContributions from 'react-github-graph'
import Newsletter from '@/components/Newsletter'
import { SimpleLayout } from '@/components/SimpleLayout'

// Photos.js

function Photos() {
  let rotations = ['rotate-1', '-rotate-0', 'rotate-0', 'rotate-0', '-rotate-1']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home(articles) {
  return (
    <>
      <Head>
        <title>Michael Smith - Create, Document, Produce. </title>
        <meta name="description" content="Hi I'm Mike. Nice to meet you!" />
      </Head>
      
    <SimpleLayout>
        <div className="">
      

        <AvatarImage />
          <div className="">
            <div className="mt-6 flex-auto text-base text-zinc-600 dark:text-zinc-400">
              <div className="max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                  Create, Document, Produce.
                </h1>
                <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                  Software developer, Audio Engineer, Podcast connoisseur... I
                  am a software developer with a passion for audio recording and
                  everything music. Focused on Next JS, React, Postgres, Mongo,
                  TypeScript, and a little bit of python. Currently working on a
                  new app for the Eggs Podcast that should be launching soon.
                </p>

                <SocialLinks />
                <Photos />
                <Newsletter />
                <Resume />
              </div>
            </div>
          </div>
        </div>
        </SimpleLayout>
      
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
