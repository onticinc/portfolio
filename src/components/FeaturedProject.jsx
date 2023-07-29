import Image from "next/image";
import Link from "next/link";

import podcast_template_01 from "@/images/software/podcast_template_01.png";

export default function FeaturedProject() {
  return (
    <>
        <div className="w-full justify-center rounded-2xl border bg-neutral-50 shadow border-zinc-100 p-10 dark:border-zinc-700/40 lg:mt-10"> 
          <h1 className="mt-3 text-sm font-semibold text-zinc-900 dark:text-zinc-100 lg:block">
            Featured Project: 
          </h1>
          {/* <h4 className="dark:text-zinc-400 hidden mt-3 italic lg:block">Randomly Generated </h4> */}
          <div className="lg:flex bg-white p-5 lg:flex-auto lg:flex-row mt-5">
            <Link href={'/software'} >
                <Image src={podcast_template_01} alt="Podcast Template" />
            </Link>
          </div>
        </div>
    </>
  );
}
