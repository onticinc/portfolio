import Head from "next/head";
import { SimpleLayout } from "@/components/SimpleLayout";
import Image from "next/image";
import Pagination from "@/components/Pagination";
import YoutubeVideoPlayer from "@/components/youtubePlayer";
import { useState, useEffect } from "react";

// Youtube API
const YOUTUBE_PLAYLIST_ITEMS_API = "https://www.googleapis.com/youtube/v3/playlistItems";
const EGGS_PODCAST_ID = "PLFuguIxw8CGVYA3YUyQBhXIFLAUePwfV6";

export async function getStaticProps() {
  const res = await fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&key=${process.env.YOUTUBE_API_KEY}&playlistId=${EGGS_PODCAST_ID}&maxResults=9`
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

// Page Content
export default function Podcast({ data }) {
  // console.log('data', data)
  const [currentVideo, setCurrentVideo] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);

  useEffect(() => {
    if (data.items.length > 0) {
      setCurrentVideo(data.items[0]);
    }
  }, [data.items]);

  if (!currentVideo) {
    return <div className="text-2xl">Loading...</div>;
  }

  let handleNextVideo = () => {
    const currentIndex = data.items.findIndex(
      (item) =>
        item.snippet.resourceId.videoId ===
        currentVideo.snippet.resourceId.videoId
    );
    setCurrentVideo(data.items[currentIndex + 1]);
    setPlaying(false);
  };

  let handlePreviousVideo = () => {
    const currentIndex = data.items.findIndex(
      (item) =>
        item.snippet.resourceId.videoId ===
        currentVideo.snippet.resourceId.videoId
    );
    setCurrentVideo(data.items[currentIndex - 1]);
    setPlaying(false);
  };

  function handlePageChange(page) {
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = data.items.slice(firstPostIndex, lastPostIndex);
    setCurrentPage(page);
  }

  return (
    <>
      <div className="p-8">
           {/* Header  */}
        <div className="flex justify-center bg-zinc-800 p-5 rounded-xl">
          <h1 className="text-3xl p-10 font-bold text-zinc-700 dark:text-white">
            Landscaping Projects
          </h1>
        </div>
        
        {/* Video Player */}
        <div className="mb-10 justify-center mt-5">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            <div className="rounded-2xl p-5 dark:bg-zinc-800 sm:col-span-2">
              <YoutubeVideoPlayer
                className="left-o absolute top-0"
                id={currentVideo.snippet.resourceId.videoId}
                playing={playing}
              />
            </div>

            {/* Current Video Description */}
            <div className="gap-5 rounded-2xl p-5 dark:bg-zinc-800  sm:col-span-1">
              <h3 className="font-2xl mb-2 font-extrabold text-zinc-700 dark:text-white">
                {currentVideo.snippet.title}
              </h3>
              <div className="relative">
                <div className="flex max-h-[415px] overflow-x-scroll overscroll-contain">
                  <p className="mt-5 text-zinc-700 dark:text-white">
                    {currentVideo.snippet.description}
                  </p>
                </div>
              </div>

              {/* Previous Next Button */}
              <nav className="mb-auto mt-5 flex items-center justify-between px-4 sm:px-0">
                <div className="-mt-px flex w-0 flex-1">
                  <button
                    onClick={handlePreviousVideo}
                    className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-indigo-500 hover:border-indigo-300 hover:text-orange-500"
                  >
                    {/* <ArrowLongLeftIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" /> */}
                    Previous
                  </button>
                </div>
                <div className="-mt-px flex w-0 flex-1 justify-end">
                  <button
                    onClick={handleNextVideo}
                    className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
                    Next
                    {/* <ArrowLongRightIcon className="ml-3 h-5 w-5 text-gray-400" aria-hidden="true" /> */}
                  </button>
                </div>
              </nav>
            </div>
          </div>
        </div>

        {/* Main Div */}
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
