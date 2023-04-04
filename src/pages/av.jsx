import Head from 'next/head'
import { SimpleLayout } from '@/components/SimpleLayout';
import { Card } from '@/components/Card';
import Image from 'next/image';

import YoutubeVideoPlayer from '@/components/youtubePlayer';
import { useState, useEffect } from 'react';



// Youtube API 
const YOUTUBE_PLAYLIST_ITEMS_API = "https://www.googleapis.com/youtube/v3/playlistItems";
const YOUTUBE_PLAYLIST_ID = "PLY5aty1hlHsH4DiIKl4Mj4ZIUbE06A4E2";

export async function getStaticProps() {
  const res = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&key=${process.env.YOUTUBE_API_KEY}&playlistId=${YOUTUBE_PLAYLIST_ID}&maxResults=50`); 
  const data = await res.json();
  return {
    props: {
      data
    }
  }
}


// Page Content
export default function Audio({ data }) {
  const [ currentVideo, setCurrentVideo ] = useState(null);
  const [ playing, setPlaying ] = useState(false);

  useEffect(() => {
    if (data.items.length > 0) {
      setCurrentVideo(data.items[0]);
    }
  }, [data.items]);

  if (!currentVideo) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>Audio Projects - Michael Smith</title>
        <meta
          name="description"
          content="I have been able to record many great bands over the years, here are a few of my favorites. "
        />
      </Head>
      <SimpleLayout
        title="Audio Projects I have worked on..."
        intro="I’ve worked on a bunch of projects over the years but these are some of my favorites. I’ve included a brief description of each project and the technologies I used to build them. I’ve also included a link to the live site and the source code on Github."
      >
        <div className="border border-zinc-100 justify-center p-5 lg:-ml-9 lg:mb-10 lg:-mr-9 dark:border-zinc-700/40">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            
            <div className="sm:col-span-2">
              <YoutubeVideoPlayer className="absolute top-0 left-o" id={currentVideo.snippet.resourceId.videoId} playing={playing} />
            </div>
            <div className="sm:col-span-1">

            </div>
          </div>

        </div>
        <div className="border border-zinc-100 justify-center p-5 lg:-ml-9 lg:mb-10 lg:-mr-9 dark:border-zinc-700/40">
          <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {data.items.map((item) => {
              const { id, snippet = {} } = item;
              const { title, thumbnails = {} } = snippet;
              const { maxres = {} } = thumbnails;

              return (
                <li key={id} className="gap-5 rounded-2xl border  border-zinc-100 p-5 dark:border-zinc-700/40  dark:bg-zinc-800"> 
                  
                    <h3 className="font-2xl font-extrabold text-zinc-700 dark:text-white">{title}</h3>
                    <p>
                      <img className="mt-5" width={maxres.width} height={maxres.height} src={maxres.url} alt="" />
                    </p>
                 
                </li>
              )
            })}
          </ul>
        </div>
      </SimpleLayout>
    </>
  )
}
