import Head from "next/head";
import Pagination from "@/components/Pagination";
import { ArrowLeft, ArrowRight } from "heroicons-react";
import Image from "next/image";

import YoutubeVideoPlayer from "@/components/youtubePlayer";
import { useState, useEffect } from "react";

// Youtube API
const YOUTUBE_PLAYLIST_ITEMS_API =
  "https://www.googleapis.com/youtube/v3/playlistItems";
const YOUTUBE_PLAYLIST_ID = "PLY5aty1hlHsGJZKQ1bb6eadFVAxFEUqEJ";

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

        <div className=" p-5  rounded-2xl bg-neutral-50  dark:bg-zinc-800">
          <h1 className="text-3xl p-5 -ml-3 font-bold text-zinc-700 dark:text-white ">
            Audio and Video Projects
          </h1>
        </div>

        {/* Video Player */}
        <div className="mb-10 justify-center mt-5">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            <div className="rounded-2xl bg-neutral-50 p-5 dark:bg-zinc-800  sm:col-span-2">
              <YoutubeVideoPlayer
                className="left-o absolute top-0"
                id={currentVideo.snippet.resourceId.videoId}
                playing={playing}
              />

              {/* Previous Next Button */}
              <div className="mt-5">
                <nav className="flex items-center grow justify-between px-4 sm:px-0">
                  <div className="-mt-px flex w-0 flex-1 text-purple-500 hover:text-orange-500">
                    <a
                      onClick={handlePreviousVideo}
                      className="inline-flex items-center pr-1 pt-4 text-sm font-medium text-purple-500 hover:border-indigo-300 hover:text-orange-500"
                    >
                      <ArrowLeft id="arrowLeft" className="mr-3 h-5 w-5" aria-hidden="true" />
                      Previous
                    </a>
                  </div>
                  <div className="-mt-px flex w-0 flex-1 justify-end text-purple-500 hover:text-orange-500">
                    <a
                      onClick={handleNextVideo}
                      className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium"
                    >
                      Next
                      <ArrowRight id="arrowRight" className="ml-3 h-5 w-5" aria-hidden="true" />
                    </a>
                  </div>
                </nav>
              </div>
            </div>

            {/* Current Video Description */}
            <div className="gap-5 rounded-2xl border bg-neutral-50 shadow border-zinc-100  p-5 dark:border-zinc-700/40 dark:bg-zinc-800  sm:col-span-1">
              <h3 className="text-2xl font-extrabold text-zinc-700 dark:text-white">
                {currentVideo.snippet.title}
              </h3>
              <div className="relative">
                <div className="flex overscroll-contain overflow-x-scroll max-h-[560px]">
                  <p className="mt-5 text-zinc-700 dark:text-white">
                    {currentVideo.snippet.description}
                  </p>
                </div>
              </div>
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
                  <p>
                    <a onClick={() => setCurrentVideo(item)}>
                    <img 
                      className="mt-5"
                      width={maxres.width}
                      height={maxres.height}
                      src={maxres.url}
                      alt=""
                    />
                    </a>
                  </p>
                  <h4 className="mt-4 italic text-zinc-700 dark:text-zinc-100">
                    {title}
                  </h4>
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