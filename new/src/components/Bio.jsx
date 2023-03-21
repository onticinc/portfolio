import { Container } from "./Container";




export default function BioCard(){
  
  return(
        <>
          <div className="text-base text-zinc-600 dark:text-zinc-400 dark:bg-zinc-600 dark:bg-opacity-60 w-full container p-5">
              <h1 id="title" className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                Create, Document, Produce.
              </h1>
              <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                Software developer, Audio Engineer, and Podcast connoisseur. Michael
                is a software developer with a passion for audio recording and
                everything music related. Focused on the MERN stack with Next JS 13,
                TypeScript, and a little bit of python when needed. 
              </p>
            </div>
        </>
    )
}