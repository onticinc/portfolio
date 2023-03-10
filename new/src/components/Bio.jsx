import { Container } from "./Container";




export default function BioCard(){
  
  return(
        <>
          <div className="text-base text-zinc-600 dark:text-zinc-400 dark:bg-zinc-600 dark:bg-opacity-60 w-full container">
              <h1 id="title" className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                Create, Document, Produce.
              </h1>
              <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                Software developer, Audio Engineer, Podcast connoisseur... I
                am a software developer with a passion for audio recording and
                everything music. Focused on Next JS, React, Postgres, Mongo,
                TypeScript, and a little bit of python. Currently working on a
                new app for the Eggs Podcast that should be launching soon.
              </p>
            </div>
        </>
    )
}