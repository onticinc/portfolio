import Head from "next/head";
import { SimpleLayout } from "@/components/SimpleLayout";
import { Card } from "@/components/Card";
import Image from "next/image";

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
          content="I have been able to record many great bands over the years, here are a few of my favorites. "
        />
      </Head>
      <SimpleLayout
        title="Audio and Video projects that I have worked on..."
        intro="I have had the opportunity to work with many great bands over the years. Here are a few of my favorites."
      >
        {/* Video Player */}
        <div className="justify-center border border-zinc-100 p-5 dark:border-zinc-700/40 lg:-ml-9 lg:mb-10 lg:-mr-9">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            <div className="rounded-2xl border border-zinc-100  p-5 dark:border-zinc-700/40 dark:bg-zinc-800  sm:col-span-2">
              <YoutubeVideoPlayer
                className="left-o absolute top-0"
                id={currentVideo.snippet.resourceId.videoId}
                playing={playing}
              />
            </div>

            {/* Current Video Description */}
            <div className="gap-5 rounded-2xl border  border-zinc-100  p-5 dark:border-zinc-700/40 dark:bg-zinc-800  sm:col-span-1">
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

        {/* Video Grid */}
        <div className="justify-center border border-zinc-100 p-5 dark:border-zinc-700/40 lg:-ml-9 lg:mb-10 lg:-mr-9">
          <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {data.items.map((item) => {
              const { id, snippet = {} } = item;
              console.log(item);
              const { title, thumbnails = {} } = snippet;
              const { maxres = {} } = thumbnails;

              return (
                <li
                  key={id}
                  className="gap-5 rounded-2xl border  border-zinc-100 p-5 dark:border-zinc-700/40  dark:bg-zinc-800"
                >
                  <p>
                    <img
                      className="mt-5"
                      width={maxres.width}
                      height={maxres.height}
                      src={maxres.url}
                      alt=""
                    />
                  </p>
                  <h3 className="font-2xl mt-5 font-extrabold text-zinc-700 dark:text-white">
                    {title}
                  </h3>
                </li>
              );
            })}
          </ul>
        </div>
      </SimpleLayout>
    </>
  );
}
