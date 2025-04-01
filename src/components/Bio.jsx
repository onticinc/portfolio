export default function BioCard(){
  
  return(
        <>
          <div className="text-base text-zinc-600 dark:text-zinc-400 w-full container">
            <div className="p-3 mt-3 bg-zinc-200 dark:bg-zinc-900 rounded-lg">
            <h1 id="title" className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-300 sm:text-5xl">
              Create, Document, Produce.
            </h1>
            <p className="mt-3 text-xl font-bold text-zinc-600 dark:text-zinc-400">
              Software developer, Audio Engineer, and Event Professional. 
            </p>
            <p className=" text-base mt-5 text-zinc-600 dark:text-zinc-400">
              <span className="font-bold">Software:</span> Focused on MERN | JAM stack with Next JS,
              TypeScript, and Python when needed. 
            </p>
            <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400">
              <span className="font-bold">Editing:</span> Protools, Reaper, Ableton, Creative Cloud.  
            </p>
            <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400">
              <span className="font-bold">Hardware:</span> ShowExpress, Hog-500, Midas M32, Behringer x32, Chauvet Products, QSC K Series.  
            </p>
            </div>
              
          </div>
      </>
    )
}