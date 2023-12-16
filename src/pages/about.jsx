import Head from "next/head";
import Image from "next/image";

import Avatar from "@/images/avatar.png";

const date = new Date().getFullYear() - 1996;

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
      <div className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={Avatar}
                alt=""
                sizes=""
                className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800 xl:rotate-2"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Create, Document, Produce.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p className="text-bold text-lg">
                <span className="text-indigo-300">const</span>{" "}
                <span className="text-blue-300">MichaelSmith</span> ={" "}
                <span className="text-indigo-300">
                  Software developer and audio engineer.
                </span>
              </p>
              <p>
                I started my software journey in 2017 by getting involved in a
                project that I probably should have avoided. It was a custom app
                for hosting audio files that was built from the ground up.
              </p>
            
              
              <p>
                I attended the General Assembly full stack bootcamp to learn
                more and I have been hooked ever since.
              </p>

              <p>
                I have worked as professional DJ for {date} years. My first paid
                gig was on new years eve in 1996. In 2015 I went to college for
                audio engineering at Shoreline Community College, I focus more
                on that now.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
