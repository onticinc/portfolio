import Image from "next/image";
import Link from "next/link";

import podcast_template_01 from "@/images/software/podcast_template_01.png";

export default function FeaturedProject() {
  return (
    <>
        <div className="w-full justify-center dark:bg-zinc-700 rounded-2xl border bg-neutral-50 shadow border-zinc-100 p-2 dark:border-zinc-700/40"> 
        <div className=" dark:bg-zinc-800 rounded-2xl bg-neutral-50 p-4"> 
          
          <h1 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 lg:block">
            Featured Project: 
          </h1>
          {/* <h4 className="dark:text-zinc-400 hidden mt-3 italic lg:block">Randomly Generated </h4> */}
          <div className="lg:flex bg-white rounded-2xl dark:bg-zinc-600/30 mt-5 lg:flex-auto lg:flex-row p-5">
            <Link href={'/software'} >
                <Image className="flex relative rounded-2xl" src={podcast_template_01} alt="Podcast Template" />
            </Link>
          </div>
    </div>
        </div>
    </>
  );
}
