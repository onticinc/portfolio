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
          content="Michael Smith - A software developer with a passion for audio engineering."
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
              <p className="text-bold text-lg">
              <span className="text-indigo-300">const</span> <span className="text-blue-300">MichaelSmith</span> = <span className="text-indigo-300">"Software developer and audio engineer."</span> 
              </p>
              <p>I started my software journey in 2017 by getting involved in a project that I probably should have avoided. 
                It was a custom app for hosting audio files that was built from the ground up.
              </p>
              <p>
                We hired someone to build the project in PHP, he ended up being a very flaky developer and after 
                a 2 years of problems, we finally got a "working" app. 
              </p>
              <p>
                During that time I started teaching myself the basics so I could potentially take over the project if necessary. Fortunately, it didn't come to that.
                As part of that project, I had to manually update over 8,000 records in a spreadsheet in order to seed the database. Yay!  
              </p>
              <p>Because of that experience, I figured out that I really enjoyed the development process <span className="italic"> *even though I got super frustrated at times. I feel like its a giant puzzle that never ends.</span></p>
              <p>I attended the General Assembly full stack bootcamp to learn more and I have been hooked ever since.</p>

              <p>I have worked as professional DJ for {date} years. My first paid gig was on new years eve in 1996. In 2015 I went to college for audio engineering at Shoreline Community College, I focus more on that now. 
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
