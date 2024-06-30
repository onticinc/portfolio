import Head from "next/head";
import { SimpleLayout } from "@/components/SimpleLayout";
import Pagination from "@/components/Pagination";
import YoutubeVideoPlayer from "@/components/youtubePlayer";
import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "heroicons-react";

// Youtube API
const YOUTUBE_PLAYLIST_ITEMS_API =
  "https://www.googleapis.com/youtube/v3/playlistItems";
const EGGS_PODCAST_ID = "PLkk4WlaE-9QQiq_8gcwjuY87ZW_-QKqUj";

export async function getStaticProps() {
  const res = await fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&key=${process.env.YOUTUBE_API_KEY}&playlistId=${EGGS_PODCAST_ID}&maxResults=50`,
    { next: { revalidate: 86400 } }
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
  const [currentVideo, setCurrentVideo] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

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
      (item) =>
        item.snippet.resourceId.videoId ===
        currentVideo.snippet.resourceId.videoId
    );
    setCurrentVideo(data.items[currentIndex + 1]);
    setPlaying(true);
  };

  const handlePreviousVideo = () => {
    const currentIndex = data.items.findIndex(
      (item) =>
        item.snippet.resourceId.videoId ===
        currentVideo.snippet.resourceId.videoId
    );
    setCurrentVideo(data.items[currentIndex - 1]);
    setPlaying(true);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleVideoClick = (video) => {
    setCurrentVideo(video);
    setPlaying(true);
    window.scrollTo(0, 0);
  };

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = data.items.slice(firstPostIndex, lastPostIndex);
  const totalPages = Math.ceil(data.items.length / postsPerPage);

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
      <div className="mt-3 bg-zinc-200 p-1 dark:bg-zinc-700">
        <div className="rounded-lg bg-zinc-100 p-2 dark:bg-zinc-800">
          <h1 className="-ml-3 p-5 text-3xl font-bold text-zinc-700 dark:text-white">
            Podcast Interviews
          </h1>
        </div>
      </div>

      {/* Video Player */}
      <div className="mt-2 justify-center">
        <div className="grid grid-cols-1">
          <div className="bg-zinc-200 p-1 dark:bg-zinc-700 sm:col-span-2">
            <div className="rounded-lg bg-zinc-100 p-2 dark:bg-zinc-800">
              <YoutubeVideoPlayer
                className="left-o absolute top-0"
                id={currentVideo.snippet.resourceId.videoId}
                playing={playing}
              />

              {/* Previous Next Button */}
              <div className="mt-5">
                <nav className="flex grow items-center justify-between sm:px-0">
                  <div className="-mt-px flex w-0 flex-1 text-purple-500 hover:text-orange-500 dark:text-orange-500">
                    <a
                      onClick={handlePreviousVideo}
                      className="inline-flex items-center pr-1 pt-4 text-sm font-medium text-purple-500 hover:border-indigo-300 hover:text-orange-500 dark:text-orange-500"
                    >
                      <ArrowLeft
                        id="arrowLeft"
                        className="mr-3 h-5 w-5"
                        aria-hidden="true"
                      />
                      Previous
                    </a>
                  </div>
                  <div className="-mt-px flex w-0 flex-1 justify-end text-purple-500 hover:text-orange-500 dark:text-orange-500">
                    <a
                      onClick={handleNextVideo}
                      className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium"
                    >
                      Next
                      <ArrowRight
                        id="arrowRight"
                        className="ml-3 h-5 w-5"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </nav>
              </div>
            </div>
          </div>

          {/* Current Video Description */}
          <div className="w-full bg-zinc-200 p-1 dark:bg-zinc-700">
            <div className="rounded-lg border border-zinc-100 bg-zinc-100 p-2 shadow dark:border-zinc-700/40 dark:bg-zinc-800 sm:col-span-1">
              <div className="relative bg-zinc-200 p-2 dark:bg-zinc-900">
                <h3 className="text-1xl mb-3 font-extrabold text-zinc-800 dark:text-zinc-100">
                  {currentVideo.snippet.title}
                </h3>
                <div className="flex max-h-[100px] overflow-x-scroll overscroll-contain">
                  <p className="text-zinc-700 dark:text-white">
                    {currentVideo.snippet.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video List */}
      <div className="mb-3 mt-2 justify-center">
        {/* Card */}
        <div className="w-full bg-zinc-200 p-1 dark:bg-zinc-700">
          <div className="bg-zinc-100 p-2 dark:bg-zinc-800">
            <h3 className="text-1xl mb-3 font-extrabold text-zinc-800 dark:text-zinc-100">
              Previous Interviews:
            </h3>
            <ul className="grid grid-cols-1 gap-2 p-2 dark:bg-zinc-700  sm:grid-cols-2 lg:grid-cols-3">
              {currentPosts.map((item) => {
                const { id, snippet = {} } = item;
                const { title, thumbnails = {} } = snippet;
                const { maxres = {} } = thumbnails;

                return (
                  <li
                    key={id}
                    className="rounded-lg bg-zinc-200 p-2 dark:bg-zinc-800"
                  >
                    <p>
                      <a onClick={() => handleVideoClick(item)}>
                        <img
                          className="mt-2"
                          width={maxres.width}
                          height={maxres.height}
                          src={maxres.url}
                          alt=""
                        />
                      </a>
                    </p>
                    <h4 className="mt-3 font-bold text-zinc-700 dark:text-zinc-100">
                      {title}
                    </h4>
                  </li>
                );
              })}
            </ul>
            <div className="w-full rounded-lg bg-zinc-100 p-2 dark:bg-zinc-800">
              <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
