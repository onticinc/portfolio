import Head from "next/head";
import Image from "next/image";
import { ImageLoader } from "next/image";
import Link from "next/link";
import SoftwareTabs from "@/components/SoftwareTabs";

import { Card } from "@/components/Card";
import logoPodcast from "@/images/logos/podcast_template_logo.png";
import podcast_template_01 from "@/images/software/podcast_template_01.png";
import podcast_template_02 from "@/images/software/podcast_template_02.png";
import podcast_template_03 from "@/images/software/podcast_template_03.png";
import memory_01 from "@/images/software/memory_01.png";
import memory_02 from "@/images/software/memory_02.png";
import memory_03 from "@/images/software/memory_03.png";
import audiostar_01 from "@/images/software/audiostar_01.png";
import audiostar_02 from "@/images/software/audiostar_02.png";
import audiostar_03 from "@/images/software/audiostar_03.png";
import ontic_01 from "@/images/software/ontic_01.png";
import ontic_02 from "@/images/software/ontic_02.png";
import ontic_03 from "@/images/software/ontic_03.png";
import mtn_view_01 from "@/images/software/mtn_view_01.png";
import mtn_view_02 from "@/images/software/mtn_view_02.png";
import mtn_view_03 from "@/images/software/mtn_view_03.png";

const projects = [
  // Website Template
  {
    name: "Podcast Website Template",
    description:
      'This project is built with Django and it has a fully functioning blog with auth and password reset on your profile. It has email verification on signup and it will also compress the uploaded profile picture and scale it to the correct size. The show list populates from the rss feed for the podcast, which eliminates the need to update the website everytime a new show is published. I used the "Eggs Podcast" to demonstrate functionality and I worked on this with Patrick Brennan. ',
    tech: ["Django", "Linode", "Python", "Bootstrap", "PostgreSQL"],
    link_01: {
      href: "https://github.com/onticinc/podcast_template",
      label: "github",
    },
    link_02: {
      href: "https://github.com/onticinc/podcast_template",
      label: "github",
    },
    logo: logoPodcast,
    images: [
      {
        src: podcast_template_01,
        alt: "Screenshot of Podcast Website Template",
      },
      {
        src: podcast_template_02,
        alt: "Screenshot of Podcast Website Template",
      },
      {
        src: podcast_template_03,
        alt: "Screenshot of Podcast Website Template",
      },
    ],
  },

  // Memory Game
  {
    name: "Memory Game",
    description:
      "I made this game as a Christmas present for my niece and nephews. Eventually, I would like to redesign it and add more functionality. It would be nice to choose how many pairs of cards you want and add extra players.",
    tech: ["Javascript", "CSS", "HTML", "Font Awesome"],
    link_01: {
      href: "https://onticinc.github.io/card_match_game/",
      label: "Play The Game",
    },
    link_02: { href: "#", label: "github.com" },
    logo: memory_01,
    images: [
      {
        src: memory_02,
        alt: "Screenshot of Memory Game",
      },
      {
        src: memory_01,
        alt: "Screenshot of Memory Game",
      },
      {
        src: memory_03,
        alt: "Screenshot of Memory Game",
      },
    ],
  },

  // Audiostar
  {
    name: "Audiostar Website",
    description: "This is a website that I built for Audiostar.",
    tech: ["Wordpress", "Custom CSS"],
    link: { href: "www.audiostarinc.com", label: "www.audiostarinc.com" },
    images: [
      {
        src: audiostar_01,
        alt: "Screenshot of Audiostar Website Template",
      },
      {
        src: audiostar_02,
        alt: "Screenshot of Audiostar Website Template",
      },
      {
        src: audiostar_03,
        alt: "Screenshot of Audiostar Website Template",
      },
    ],
  },

  // DJ Ontic
  {
    name: "DJ Ontic Website",
    description: "Website for DJ Ontic.",
    tech: ["Wordpress", "Custom CSS"],
    link: { href: "https://www.djontic.com", label: "website link" },
    images: [
      {
        src: ontic_01,
        alt: "Screenshot of DJ Ontic website",
      },
      {
        src: ontic_02,
        alt: "Screenshot of DJ Ontic website",
      },
      {
        src: ontic_03,
        alt: "Screenshot of DJ Ontic website",
      },
    ],
  },
  // Mtn View Lawn Care
  {
    name: "Mountain View Lawn Website",
    description: "Website for Mountain View Lawncare.",
    tech: ["Wordpress", "Custom CSS"],
    link: { href: "https://www.mtnviewlawn.com", label: "website link" },
    images: [
      {
        src: mtn_view_01,
        alt: "Screenshot of Mountain View Lawncare website",
      },
      {
        src: mtn_view_02,
        alt: "Screenshot of Mountain View Lawncare website",
      },
      {
        src: mtn_view_03,
        alt: "Screenshot of Mountain View Lawncare website",
      },
    ],
  },
];

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Software Projects - Michael Smith</title>
        <meta name="description" content="Projects I have worked on..." />
      </Head>
      <div className="relative -mt-9 p-12">
        <div className="-ml-9 -mr-9 justify-center p-5">
          <ul role="list" className="grid grid-cols-1 gap-5 xl:grid-cols-3">
            {projects.map((project) => (
              <Card
                className="relative gap-1 rounded-2xl border border-zinc-100 bg-neutral-50 p-5 shadow-md dark:border-zinc-700/40  dark:bg-zinc-800"
                as="li"
                key={project.name}
              >
                <h3 className="font-2xl font-extrabold text-zinc-800 dark:text-white">
                  {project.name}
                </h3>

                <div className="overscroll-containmt-10 relative mr-4 flex gap-2 overflow-x-scroll rounded-2xl border border-zinc-100 p-4 dark:border-zinc-700/40 dark:bg-zinc-800  dark:hover:bg-zinc-700 ">
                  {project.images.map((role, roleIndex) => (
                    <Image
                      src={role.src}
                      alt={role.alt}
                      width={500}
                      height={500}
                      className="w-full rounded-2xl"
                    />
                  ))}
                </div>

                <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                  {/* <Card.Link target="_blank" href={project.link_01.href}>{project.name}</Card.Link> */}
                </h2>

                <Card.Description>{project.description}</Card.Description>

                <ul className="mt-4 text-gray-400">
                  {project.tech.map((tech) => (
                    <li>- {tech}</li>
                  ))}
                </ul>

                <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-orange-500 dark:text-zinc-200">
                  <LinkIcon className="h-6 w-6 flex-none" />
                  {/* <span className="ml-2">{project.link_01.label}</span> */}
                </p>
              </Card>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
