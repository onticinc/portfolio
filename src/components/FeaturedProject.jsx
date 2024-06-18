import Image from "next/image";
import Link from "next/link";
import YoutubeVideoPlayer from "./youtubePlayer";

export default function FeaturedProject() {
  return (
    <>
      <div className="relative mt-3 justify-center rounded-sm border border-zinc-100 bg-neutral-50 p-1 shadow dark:border-zinc-700/40  dark:bg-zinc-700 ">
        <div className="rounded-lg p-3  dark:bg-zinc-800 ">
          <h3 className="font-2xl font-extrabold text-zinc-900 dark:text-zinc-300">
            Featured Project:
          </h3>
          <div class="flex overflow-x-scroll overscroll-contain ">
            <div className="mt-3 mr-4 gap-2 rounded-2xl border border-zinc-100 p-2 dark:border-zinc-700/40 dark:bg-zinc-600/30  dark:hover:bg-zinc-700 ">
              {/* Video Player */}
              <div className="mt-3 justify-center">
                <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
                  {/* <div className="rounded-2xl bg-neutral-50 p-5 dark:bg-zinc-800  sm:col-span-2">
                    <YoutubeVideoPlayer
                      className="left-o absolute top-0"
                      id={currentVideo.snippet.resourceId.videoId}
                      playing={playing}
                    />
                  </div> */}

                  {/* Current Video Description */}
                  {/* <div className="gap-5 rounded-2xl border border-zinc-100 bg-neutral-50 p-5  shadow dark:border-zinc-700/40 dark:bg-zinc-800  sm:col-span-1">
                    <h3 className="text-2xl font-extrabold text-zinc-700 dark:text-white">
                      {currentVideo.snippet.title}
                    </h3>
                    <div className="relative">
                      <div className="flex max-h-[560px] overflow-x-scroll overscroll-contain">
                        <p className="mt-5 text-zinc-700 dark:text-white">
                          {currentVideo.snippet.description}
                        </p>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
