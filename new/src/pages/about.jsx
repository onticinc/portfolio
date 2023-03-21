import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import Avatar from '@/images/avatar.png'

const date = new Date().getFullYear() - 1996



export default function About() {
  return (
    <>
      <Head>
        <title>About - Michael Smith</title>
        <meta
          name="description"
          content="Michael Smith - A software develioer with a passion audio engineering."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={ Avatar }
                alt=""
                sizes=""
                className="aspect-square xl:rotate-2 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Create, Document, Produce.   
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
              const MichaelSmith = "Software developer, audio engineer, and podcast host..." 
              </p>
              <p>I started my software journey in 2017 by getting involved in a project that I should have avoided. It was a custom app for hosting audio files built from the ground up... We hired someone to build the project, he ended up being a very flaky developer and after a year problems we finally got a working website. During that time I was teaching myself PHP and SQL so I could communicate with the developer when needed. I also manually updated over 8,000 records in a spreadsheet to seed the database with. Lets just say, I learned what not to do with that project.</p>
              
              <p>I have worked as professional DJ for {date} years. My first paid gig was on new years eve in 1996. 
              Michael is committed to bringing high-quality audio, video, and lighting experiences to audiences from around the world. 
              </p>
              <p>He first discovered a passion for music in 1996, when he started DJ'ing at local events. This led him to pursue a formal education in audio engineering at Shoreline Community College, where he honed his skills in recording, mixing, and mastering audio.
              </p>
              <p>During college he started Audiostar, a audio recording and editing company that has served clients in a variety of industries, from music and film, to advertising and corporate communications.</p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
            <div className="mt-6 flex gap-6">
            
          </div>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
