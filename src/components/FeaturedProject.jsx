import Image from "next/image";

import podcast_template_01 from "@/images/software/podcast_template_01.png";

export default function FeaturedProject() {
  return (
    <>
      <div id="avatar" className="m-4 md:col-span-2">
        <div className="w-full justify-center rounded-2xl border border-zinc-100 p-10   dark:border-zinc-700/40 ">
          <h1 className="mt-3 hidden text-xl dark:text-zinc-400 lg:block">
            Featured Project: 
          </h1>
          {/* <h4 className="dark:text-zinc-400 hidden mt-3 italic lg:block">Randomly Generated </h4> */}
          <div className="lg:flex lg:flex-auto lg:flex-row mt-5">
            <Image src={podcast_template_01} alt="Podcast Template" />
          </div>

        </div>
      </div>
    </>
  );
}
