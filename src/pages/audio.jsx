import Head from "next/head";
import Pagination from "@/components/Pagination";

import YoutubeVideoPlayer from "@/components/youtubePlayer";
import { useState, useEffect } from "react";

// Youtube API
const YOUTUBE_PLAYLIST_ITEMS_API =
  "https://www.googleapis.com/youtube/v3/playlistItems";
const YOUTUBE_PLAYLIST_ID = "PLY5aty1hlHsH4DiIKl4Mj4ZIUbE06A4E2";

export async function getStaticProps() {
  const res = await fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&key=${process.env.YOUTUBE_API_KEY}&playlistId=${YOUTUBE_PLAYLIST_ID}&maxResults=50`
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

// Page Content
export default function Audio({ data }) {
  const [currentVideo, setCurrentVideo] = useState(null);
  const [playing, setPlaying] = useState(false);
  let showBackButton = useState(false);

  useEffect(() => {
    if (data.items.length > 0) {
      setCurrentVideo(data.items[0]);
    }
  }, [data.items]);

  if (!currentVideo) {
    return <div>Loading...</div>;
  }

  if (currentVideo === data.items[0]) {
    showBackButton = false;
  } else {
    showBackButton = true;
  }

  if (currentVideo === data.items[data.items.length - 1]) {
    showNextButton = false;
  }

  const handleNextVideo = () => {
    const currentIndex = data.items.findIndex(
      (item) => item.snippet.resourceId.videoId === currentVideo.snippet.resourceId.videoId
    );
    setCurrentVideo(data.items[currentIndex + 1]);
    setPlaying(true);
  };

  const handlePreviousVideo = () => {
    const currentIndex = data.items.findIndex(
      (item) => item.snippet.resourceId.videoId === currentVideo.snippet.resourceId.videoId
    );
    setCurrentVideo(data.items[currentIndex - 1]);
    setPlaying(true);
  };

  return (
    <>
      <Head>
        <title>Audio and Video Projects - Michael Smith</title>
        <meta
          name="description"
          content="I have worked with many great bands over the years, here are a few of my favorites."
        />
      </Head>
  
        {/* Header */}

        <div className="p-8">

        <div className="flex justify-center bg-zinc-800 p-5 rounded-xl">
          <h1 className="text-3xl p-10 font-bold text-zinc-700 dark:text-white">
            Audio and Video Projects
          </h1>
        </div>

        {/* Video Player */}
        <div className="mb-10 justify-center mt-5">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            <div className="rounded-2xl bg-neutral-50 shadow border border-zinc-100  p-5 dark:border-zinc-700/40 dark:bg-zinc-800  sm:col-span-2">
              <YoutubeVideoPlayer
                className="left-o absolute top-0"
                id={currentVideo.snippet.resourceId.videoId}
                playing={playing}
              />
            </div>

            {/* Current Video Description */}
            <div className="gap-5 rounded-2xl border bg-neutral-50 shadow border-zinc-100  p-5 dark:border-zinc-700/40 dark:bg-zinc-800  sm:col-span-1">
              <h3 className="font-2xl font-extrabold text-zinc-700 dark:text-white">
                {currentVideo.snippet.title}
              </h3>
              <div className="relative">
                <div className="flex overscroll-contain overflow-x-scroll max-h-[560px]">
                  <p className="mt-5 text-zinc-700 dark:text-white">
                    {currentVideo.snippet.description}
                  </p>
                </div>
              </div>

              {/* Previous Next Button */}
              <nav className="flex items-center justify-between px-4 sm:px-0">
                <div className="-mt-px flex w-0 flex-1">
                  <a
                    href="#"
                    className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-indigo-500 hover:border-indigo-300 hover:text-orange-500"
                  >
                    {/* <ArrowLongLeftIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" /> */}
                    Previous
                  </a>
                </div>
                <div className="-mt-px flex w-0 flex-1 justify-end">
                  <a
                    href="#"
                    className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
                    Next
                    {/* <ArrowLongRightIcon className="ml-3 h-5 w-5 text-gray-400" aria-hidden="true" /> */}
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>

        {/* Video List */}
        <div className="justify-center mb-5">
          {/* Card */}
          <ul className="mb-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {data.items.map((item) => {
              // console.log('item', item);

              const { id, snippet = {} } = item;
              const { title, thumbnails = {} } = snippet;
              const { maxres = {} } = thumbnails;

              return (
                <li
                  key={id}
                  className="gap-5 rounded-2xl p-5 dark:bg-zinc-800"
                >
                  <h4 className="mt-4 italic text-zinc-700 dark:text-zinc-100">
                    {title}
                  </h4>
                  <p>
                    <img
                      className="mt-5"
                      width={maxres.width}
                      height={maxres.height}
                      src={maxres.url}
                      alt=""
                    />
                  </p>
                </li>
              );
            })}
          </ul>
          <Pagination />
        </div>
      </div>
      
    </>
  );
}
