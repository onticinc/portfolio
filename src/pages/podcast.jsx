import Head from 'next/head'
import { SimpleLayout } from '@/components/SimpleLayout';
import { Card } from '@/components/Card';
import Image from 'next/image';
import Pagination from '@/components/Pagination';



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
                    <a href="http:www.audiostarinc.com">
                    <h4 className="font-2xl font-extrabold text-zinc-700 dark:text-white">{title}</h4>
                      <p>
                        <img className="mt-5" width={maxres.width} height={maxres.height} src={maxres.url} alt="" />
                      </p>
                    </a>
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
