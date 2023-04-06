import Head from 'next/head'
import { SimpleLayout } from '@/components/SimpleLayout';
import Image from 'next/image';
import Pagination from '@/components/Pagination';
import YoutubeVideoPlayer from "@/components/youtubePlayer";
import { useState, useEffect } from "react";



// Youtube API 
const YOUTUBE_PLAYLIST_ITEMS_API = "https://www.googleapis.com/youtube/v3/playlistItems";
const EGGS_PODCAST_ID = "UULFz53WsQ9KmEJb5yKeMTsmGg";


export async function getStaticProps() {
  const res = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&key=${process.env.YOUTUBE_API_KEY}&playlistId=${EGGS_PODCAST_ID}&maxResults=9`); 
  const data = await res.json();
  return {
    props: {
      data
    }
  }
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
      (item) => item.snippet.resourceId.videoId === currentVideo.snippet.resourceId.videoId
    );
    setCurrentVideo(data.items[currentIndex + 1]);
    setPlaying(false);
  };

  let handlePreviousVideo = () => {
    const currentIndex = data.items.findIndex(
      (item) => item.snippet.resourceId.videoId === currentVideo.snippet.resourceId.videoId
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
      <Head>
        <title>Eggs The Podcast - Michael Smith</title>
        <meta
          name="description"
          content="I have been able to record many great bands over the years, here are a few of my favorites. "
        />
      </Head>
      <SimpleLayout
        title="Eggs The Podcast"
        intro="Co-Host and Business Partner."
      >

        {/* Video Player */}
        <div className="justify-center border border-zinc-100 p-5 dark:border-zinc-700/40 lg:-ml-9 lg:mb-10 lg:-mr-9 mb-10">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            <div className="rounded-2xl border border-zinc-100  p-5 dark:border-zinc-700/40 dark:bg-zinc-800  sm:col-span-2">
              <YoutubeVideoPlayer
                className="left-o absolute top-0"
                id={currentVideo.snippet.resourceId.videoId}
                playing={playing}
              />
            </div>

            {/* Current Video Description */}
            <div className="gap-5 rounded-2xl border border-zinc-100  p-5 dark:border-zinc-700/40 dark:bg-zinc-800  sm:col-span-1">
              <h3 className="font-2xl font-extrabold text-zinc-700 dark:text-white mb-2">
                {currentVideo.snippet.title}
              </h3>
              <div className="relative">
                <div className="flex overscroll-contain overflow-x-scroll max-h-[415px]">
                  <p className="mt-5 text-zinc-700 dark:text-white">
                    {currentVideo.snippet.description}
                  </p>
                </div>
              </div>

              {/* Previous Next Button */}
              <nav className="flex items-center justify-between px-4 sm:px-0 mb-auto mt-5">
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
        <div className="border border-zinc-100 justify-center p-5  dark:border-zinc-700/40 lg:-ml-9 lg:mb-10 lg:-mr-9">
          
          {/* Card */}
          <ul className="grid mb-10 grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {data.items.map((item) => {
              
              // console.log('item', item);
              
              const { id, snippet = {} } = item;
              const { title, thumbnails = {} } = snippet;
              const { maxres = {} } = thumbnails;

              return(
                  <li key={id} className="gap-5 rounded-2xl border  border-zinc-100 p-5 dark:border-zinc-700/40  dark:bg-zinc-800"> 
                    <h4 className="mt-4 italic text-zinc-700 dark:text-zinc-100">{title}</h4>
                      <p>
                        <img className="mt-5" width={maxres.width} height={maxres.height} src={maxres.url} alt="" />
                      </p>
                  </li>
                )
              })}

          </ul>
            <Pagination />
        </div>
      </SimpleLayout>
    </>
  )
}















// import Head from 'next/head'
// import YouTubeVideoPlayer from 'react-player/youtube';
// import { useState } from 'react';




// export async function getStaticProps() {
//   const MY_PLAYLIST = process.env.EGGS_PLAYLIST_ID;
//   const API_KEY = process.env.YOUTUBE_API_KEY
  
//   const YOUTUBE_PLAYLIST_ITEMS_API = "https://www.googleapis.com/youtube/v3/playlistItems";
//   const YOUTUBE_PLAYLIST_ID = "PLY5aty1hlHsH4DiIKl4Mj4ZIUbE06A4E2";
  
//   const res = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&key=${process.env.YOUTUBE_API_KEY}&playlistId=${EGGS_PLAYLIST_ID}&maxResults=50`); 
//   const data = await res.json();
//   return {
//     props: {
//       data
//     }
//   }
// }



// export default function Podcast(data) {
//   console.log(data)

//   const [currentVideo, setCurrentVideo ] = useState(results[0]);
//   const [playing, setPlaying] = useState(false);

//   return (
//     <>
//       <Head>
//         <title>Podcast Interviews - Michael Smith</title>
//         <meta
//           name="description"
//           content="Here are a few interviews that I have enjoyed over the years."
//         />
//       </Head>
//       <YouTubeVideoPlayer id={currentVideo.snippet.resourceId.videoId} playing={playing} />
//       <h4 className="text-white ml-10 mt-10">Put Content here. </h4>
//     </>
//   )
// }
