import { Button } from "@/components/Button";
import Image from "next/image";
import Link from "next/link";

import logoZ103 from "@/images/logos/z103.png";
import logoEggs from "@/images/logos/eggsLogo.jpeg";
import logoOntic from "@/images/logos/ontic_logo.jpg";
import logoAudiostar from "@/images/logos/audiostar.png";
import wspLogo from "@/images/logos/wsp_logo.jpeg";

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
        className=" stroke-zinc-400  dark:stroke-zinc-100"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-100"
      />
    </svg>
  );
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
  );
}

export default function WorkHistory() {
  let resumeDetails = [
    {
      company: "Eggs The Podcast",
      title: "Host | Producer | Co-Owner",
      logo: logoEggs,
      link: "https://www.eggscast.com/",
      start: "2018",
      end: {
        label: "Present",
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: "DJ Ontic",
      title: "Mixshow | Event DJ",
      logo: logoOntic,
      link: "https://www.djontic.com/",
      start: "2014",
      end: {
        label: "Present",
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: "Audiostar Inc",
      title: "Owner",
      logo: logoAudiostar,
      link: "https://www.audiostarinc.com/",
      start: "1996",
      end: {
        label: "Present",
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: "Riverbend Communications",
      title: "On-Air Personality for Z103fm",
      logo: logoZ103,
      link: "https://www.z103.fm",
      start: "2022",
      end: "2023",
    },
  ];

  return (
    <>
      <div className="rounded-sm border border-zinc-300 bg-zinc-200 p-1 shadow dark:border-zinc-700/40  dark:bg-zinc-700/90">
        <div className="rounded-lg bg-zinc-100 p-3 shadow dark:border-zinc-700/40  dark:bg-zinc-800/90">
          <h2 className="flex flex-auto text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            <BriefcaseIcon className="h-6 w-6 flex-none" />
            <span className="ml-3">Work History</span>
          </h2>
          <ol className="mt-3 space-y-4 bg-zinc-200 dark:bg-zinc-900">
            {resumeDetails.map((role, roleIndex) => (
              <li key={roleIndex} className="flex gap-3 hover:bg-zinc-300 dark:hover:bg-zinc-700 p-3">
                <Link href={role.link} target="_blank">
                  <div className="relative mt-1 flex h-12 w-12 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                    <Image
                      src={role.logo}
                      alt=""
                      className="h-12 w-12"
                      unoptimized
                    />
                  </div>
                </Link>
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
                    </time>{" "}
                    <span aria-hidden="true">—</span>{" "}
                    <time dateTime={role.end.dateTime ?? role.end}>
                      {role.end.label ?? role.end}
                    </time>
                  </dd>
                </dl>
              </li>
            ))}
          </ol>
          <a href="/documents/mds_resume.pdf" download="mds_resume.pdf">
            <Button
              variant="secondary"
              className="group mt-3 w-full bg-zinc-200 dark:bg-zinc-900/50 dark:ring-1  dark:ring-indigo-500/40"
            >
              Download CV
              <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 p-5 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
            </Button>
          </a>
        </div>
      </div>
    </>
  );
}
