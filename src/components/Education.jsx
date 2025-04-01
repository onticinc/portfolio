import Image from "next/image";
import Link from "next/link";

import logoShoreline from "@/images/logos/shoreline_logo.png";
import logoGa from "@/images/logos/GaLogo.jpeg";
import logoIsu from "@/images/logos/isu_logo.jpeg";
import logoTcc from "@/images/logos/tcc_logo.jpeg";
function CapIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
      />
    </svg>
  );
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5" />
    </svg>
  );
}

export default function Education() {
  let resume = [
    {
      company: "General Assembly",
      title: "Software Immersive",
      logo: logoGa,
      link: "https://www.generalassemb.ly",
      start: "2021",
      end: "2022",
    },
    {
      company: "Shoreline Community College",
      title: "Audio Engineering Production AAAS Student",
      logo: logoShoreline,
      link: "https://www.shoreline.edu/programs/music-technology/digital-audio-engineering-aaas.aspx",
      start: "2016",
      end: "2018",
    },
    {
      company: "Idaho State University",
      title: "General Studies",
      logo: logoIsu,
      link: "https://www.isu.edu/",
      start: "2003",
      end: "2004",
    },
    {
      company: "Tacoma Community College",
      title: "Business Management",
      logo: logoTcc,
      link: "https://www.tacomacc.edu/",
      start: "1998",
      end: "2000",
    },
  ];

  return (
    <>
      <div className="rounded-sm  bg-zinc-200 p-1 mt-3 shadow dark:border-zinc-700/40 dark:bg-zinc-700">
        <div className="rounded-lg border border-zinc-100 bg-zinc-100 p-3 shadow dark:border-zinc-700/40 dark:bg-zinc-800">
          <h2 className="flex flex-auto text-sm font-semibold text-zinc-900 py-3 dark:text-zinc-100">
            <CapIcon className="h-6 w-6 flex-none" />
            <span className="ml-3">Education</span>
          </h2>
          <div className="bg-zinc-200 dark:bg-zinc-900">
            <ol className="space-y-3">
              {resume.map((role, roleIndex) => (
                <li key={roleIndex} className="flex gap-4 p-3 hover:bg-zinc-300 dark:hover:bg-zinc-700 ">
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
          </div>
        </div>
      </div>
    </>
  );
}
