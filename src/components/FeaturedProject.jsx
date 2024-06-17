import Image from "next/image";
import Link from "next/link";

import eggs_01 from "@/images/software/eggs_01.png";
import eggs_02 from "@/images/software/eggs_02.png";
import eggs_03 from "@/images/software/eggs_03.png";

let image = [
  {
    title: "Screen Shot of Eggs The Podcast Website",
    image: eggs_01,
    altTag: "Screen Shot of Eggs The Podcast Website",
    link: "https://www.eggscast.com/",
  },

  {
    title: "Screen Shot of Eggs The Podcast Website",
    image: eggs_02,
    altTag: "Screen Shot of Eggs The Podcast Website",
    link: "https://www.eggscast.com/",
  },
  {
    title: "Screen Shot of Eggs The Podcast Website",
    image: eggs_03,
    altTag: "Screen Shot of Eggs The Podcast Website",
    link: "https://www.eggscast.com/",
  },
];

export default function FeaturedProject() {
  return (
    <>
      <div className="relative mt-3 justify-center rounded-sm border border-zinc-100 bg-neutral-50 p-1 shadow dark:border-zinc-700/40  dark:bg-zinc-700 ">
        <div className="rounded-lg p-3  dark:bg-zinc-800 ">
          <h3 className="font-2xl font-extrabold text-zinc-900 dark:text-zinc-300">
            Featured Project:
          </h3>
          <div class="flex overflow-x-scroll overscroll-contain ">
            {image.map((role, roleIndex) => (
              <div
                key={roleIndex}
                className="mt-3 mr-4 gap-2 rounded-2xl border border-zinc-100 p-2 dark:border-zinc-700/40 dark:bg-zinc-600/30  dark:hover:bg-zinc-700 "
              >
                <Link href={role.link} target="_blank">
                  <div className="relative w-64 items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 md:w-96">
                    <Image
                      src={role.image}
                      alt={role.altTag}
                      className="w-full rounded-2xl"
                    />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
