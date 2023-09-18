import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Toggle from "@/components/ToggleButton";
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
    id: "1",
    name: "Eggs The Podcast Website",
    description:
      "In order to simplify our publishing process I rebuilt our website to pull content from the YouTube API. Now the website updates automatically when we publish.",
    tech: ["NextJS13", "Javascript", "Tailwind CSS", "", "PostgreSQL"],
    link_01: {
      href: "http://www.eggscast.com",
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
    id: "2",
    name: "Memory Game",
    description:
      "I made this game as a Christmas present for my niece and nephews. Eventually, I would like to redesign it and add more functionality. It would be nice to choose how many pairs of cards you want and add extra players.",
    tech: ["Javascript", "CSS", "HTML", "Font Awesome"],
    link_01: {
      href: "https://onticinc.github.io/card_match_game/",
      label: "Play The Game",
    },
    link_02: { href: "", label: "github.com" },
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
    id: "3",
    name: "Audiostar Website",
    description: "This is a website that I built for Audiostar.",
    tech: ["Wordpress", "Custom CSS"],
    link_01: { href: "www.audiostarinc.com", label: "www.audiostarinc.com" },
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
    id: "4",
    name: "DJ Ontic Website",
    description: "Website for DJ Ontic.",
    tech: ["Wordpress", "Custom CSS"],
    link_01: { href: "https://www.djontic.com", label: "website link" },
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
    id: "5",
    name: "Mountain View Lawn Website",
    description: "Website for Mountain View Lawncare.",
    tech: ["Wordpress", "Custom CSS"],
    link_01: { href: "https://www.mtnviewlawn.com", label: "website link" },
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
  // Website Template
  {
    id: "6",
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
];

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      {/* ... your SVG path ... */}
    </svg>
  );
}

export default function Projects() {
  const [showProjectDetails, setShowProjectDetails] = useState({});

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
              <div
                className="relative gap-1 rounded-2xl border border-zinc-100 bg-neutral-50 p-5 shadow-md dark:border-zinc-700/40  dark:bg-zinc-800"
                as="li"
                key={project.name}
              >
                <h3 className="font-2xl font-extrabold text-zinc-800 dark:text-white">
                  {project.name}
                </h3>

                <div className="relative mt-10 mr-4 flex gap-2 overflow-x-scroll overscroll-contain rounded-2xl border border-zinc-100 p-4 dark:border-zinc-700/40 dark:bg-zinc-800  dark:hover:bg-zinc-700 ">
                  {project.images.map((role, roleIndex) => (
                    <Image
                      src={role.src}
                      alt={role.alt}
                      width={500}
                      height={500}
                      className="w-full rounded-2xl"
                      key={role.src}
                    />
                  ))}
                </div>

                {/* Use the Toggle component to toggle project details */}
                <div
                  className={showProjectDetails[project.id] ? "" : "hidden"}
                  id="showHide"
                >
                  <div>{project.description}</div>

                  <ul className="mt-4 text-gray-400">
                    {project.tech.map((tech) => (
                      <li key={tech}>-{tech}</li>
                    ))}
                  </ul>
                </div>

                {/* Use the Toggle component to toggle project details */}
                <div className="justify-end p-5 font-semibold text-zinc-800 dark:text-zinc-100">
                  <h1 className="mb-3">Show More:</h1>
                  <Toggle
                    enabled={showProjectDetails[project.id]} // Pass the enabled prop
                    setEnabled={(enabled) =>
                      setShowProjectDetails({
                        ...showProjectDetails,
                        [project.id]: enabled,
                      })
                    }
                  />
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
