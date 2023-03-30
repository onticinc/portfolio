import Head from 'next/head'
import Image from 'next/image'
import { unsplashLoader } from '@/utils/unsplashLoader'
import { ImageLoader } from 'next/image'
import Link from 'next/link'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoCosmos from '@/images/logos/cosmos.svg'
import logoHelioStream from '@/images/logos/helio-stream.svg'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import logoPodcast from '@/images/logos/podcast_template_logo.png'
import podcast_template from '@/images/software/podcast_template_01.png'

const projects = [
  {
    name: 'Podcast Website Template',
    description:
      'I worked on this with Patrick Brennan. This project is built with Django and it has a fully functioning blog with auth and password reset on your profile. It has email verification on signup and it will also compress the uploaded profile picture and scale it to the correct size. The show list populates from the rss feed for the podcast, which eliminates the need to update the website everytime a new show is published. I used the "Eggs Podcast" to demonstrate functionality.',
    tech: ['Django', 'Linode', 'Python', 'Bootstrap', 'PostgreSQL'],
    link: { href: 'https://github.com/onticinc/podcast_template', label: 'github' },
    logo: logoPodcast,
    images: [
      {
        src: 'https://unsplash.com/photos/ZDNyhmgkZlQ',
        alt: 'Podcast Website Template',
      },
      {
        src: 'https://unsplash.com/photos/ZDNyhmgkZlQ',
        alt: 'Podcast Website Template',
      },
    ],
  },
  {
    name: 'Memory Game',
    description:
      'I made this game as a present for Christmas for the kids of my friends and family to play. Eventually, I would like to redesign this and add more functionality. Like choosing how many pairs of cards you want, adding extra players, and making custom icons.',
    tech: ['Font Awesome', 'Javascript', 'CSS', 'HTML'],
    link: { href: '#', label: 'github.com' },
    logo: logoHelioStream,
    images: [
      {
        src: 'https://unsplash.com/photos/ZDNyhmgkZlQ',
        alt: 'Podcast Website Template',
      },
      {
        src: 'https://unsplash.com/photos/ZDNyhmgkZlQ',
        alt: 'Podcast Website Template',
      },
    ],
  },
  {
    name: 'HelioStream',
    description:
      'Real-time video streaming library, optimized for interstellar transmission.',
    tech: ['Django', 'Linode', 'Python', 'Bootstrap', 'PostgreSQL'],
    link: { href: '#', label: 'github.com' },
    logo: logoHelioStream,
    images: [
      {
        src: 'https://unsplash.com/photos/ZDNyhmgkZlQ',
        alt: 'Podcast Website Template',
      },
      {
        src: 'https://unsplash.com/photos/ZDNyhmgkZlQ',
        alt: 'Podcast Website Template',
      },
    ],
  },
  {
    name: 'cosmOS',
    description:
      'The operating system that powers our Planetaria space shuttles.',
    tech: ['Django', 'Linode', 'Python', 'Bootstrap', 'PostgreSQL'],
    link: { href: '#', label: 'github.com' },
    logo: logoCosmos,
    images: [
      {
        src: 'https://unsplash.com/photos/ZDNyhmgkZlQ',
        alt: 'Podcast Website Template',
      },
      {
        src: 'https://unsplash.com/photos/ZDNyhmgkZlQ',
        alt: 'Podcast Website Template',
      },
    ],
  },
  {
    name: 'OpenShuttle',
    description:
      'The schematics for the first rocket I designed that successfully made it to orbit.',
    tech: ['Django', 'Linode', 'Python', 'Bootstrap', 'PostgreSQL'],
    link: { href: '#', label: 'github.com' },
    logo: logoOpenShuttle,
    images: [
      {
        src: 'https://unsplash.com/photos/ZDNyhmgkZlQ',
        alt: 'Podcast Website Template',
      },
      {
        src: 'https://unsplash.com/photos/ZDNyhmgkZlQ',
        alt: 'Podcast Website Template',
      },
    ],
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - MIchael Smith</title>
        <meta
          name="description"
          content="Projects I have worked on..."
        />
      </Head>
      <SimpleLayout
        title="Projects I have worked on..."
        intro="I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card className="rounded-2xl border border-zinc-100 p-5 dark:border-zinc-700/40 gap-2  dark:bg-zinc-800" as="li" key={project.name}>
              <div className="relative border p-4 m-4 border-zinc-100 justify-center  dark:border-zinc-700/40 ">
                <h3 className="text-white">Event | Production Photos:</h3>
                <div class="flex overscroll-contain overflow-x-scroll ">
                    {project.images.map((role, roleIndex) => (
                      <div className="rounded-2xl border border-zinc-100 p-4 dark:border-zinc-700/40 mt-10 gap-2 mr-4 dark:bg-zinc-800  dark:hover:bg-zinc-700 ">
                          <div key={roleIndex}  className="relative mt-1 w-64 md:w-96 items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                          {project.images.map((role, roleIndex) => (
                            <Image src={role.src} alt={role.alt} width={500}
                            height={500} className="rounded-2xl w-full" />
                          ))}
                          </div>
                      </div>
                    ))}
                </div>
              </div>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-500  dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-10 w-10 rounded-full"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link target="_blank" href={project.link.href}>{project.name}</Card.Link>
              </h2>
              
              <Card.Description>{project.description}</Card.Description>

              <ul className="text-gray-400 mt-4">{project.tech.map((tech) => (
                <li>- {tech}</li>
              ))}
              </ul>

              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-orange-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
              </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
