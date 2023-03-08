import { Button } from '@/components/Button'
import Image from 'next/image'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'



import logoZ103 from '@/images/logos/z103-logo.svg'
import logoShoreline from '@/images/logos/shorelineLogo.svg'
import logoEggs from '@/images/logos/eggsLogo.jpeg'
import logoAudiostar from '@/images/logos/audiostarLogo.png'

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Resume() {
  let resume = [
    {
      company: 'Eggs The Podcast',
      title: 'Host | Producer | Co-Owner',
      logo: logoEggs,
      link: 'https://www.eggscast.com/',
      start: '2022',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'DJ Ontic',
      title: 'Mixshow DJ | Event DJ',
      logo: logoEggs,
      link: 'https://www.djontic.com/',
      start: '2014',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'Audiostar Inc',
      title: 'Owner',
      logo: logoAudiostar,
      link: 'https://www.audiostarinc.com/',
      start: '1996',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'Riverbend Communications',
      title: 'Radio DJ | On-Air Personality for Z103fm',
      logo: logoZ103,
      link: 'https://www.z103fm.com/',
      start: '2022',
      end: '2023',
    },
    {
      company: 'Shoreline Community College',
      title: 'Audio Engineering Production AAAS Student',
      logo: logoShoreline,
      link: 'https://www.shoreline.edu/programs/music-technology/digital-audio-engineering-aaas.aspx',
      start: '2016',
      end: '2018',
    },
  ]

  return (
    <>
      <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
        <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          <BriefcaseIcon className="h-6 w-6 flex-none" />
          <span className="ml-3">Work</span>
        </h2>
        <ol className="mt-6 space-y-4">
          {resume.map((role, roleIndex) => (
            <li key={roleIndex} className="flex gap-4">
              <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
              </div>
              <dl className="flex flex-auto flex-wrap gap-x-2">
                <dt className="sr-only">Company</dt>
                <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  {role.company}
                </dd>
                <dt className="sr-only">Role</dt>
                <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                  {role.title}
                </dd>
                <dt className="sr-only">Date</dt>
                <dd
                  className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                  aria-label={`${role.start.label ?? role.start} until ${
                    role.end.label ?? role.end
                  }`}
                >
                  <time dateTime={role.start.dateTime ?? role.start}>
                    {role.start.label ?? role.start}
                  </time>{' '}
                  <span aria-hidden="true">—</span>{' '}
                  <time dateTime={role.end.dateTime ?? role.end}>
                    {role.end.label ?? role.end}
                  </time>
                </dd>
              </dl>
            </li>
          ))}
        </ol>
        <Button href="#" variant="secondary" className="group mt-6 w-full">
          Download CV
          <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
        </Button>
      </div>
    </>
  )
}
