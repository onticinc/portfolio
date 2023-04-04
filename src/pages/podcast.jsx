import Head from 'next/head'
import YouTubeVideoPlayer from 'react-player/youtube';
import { useState } from 'react';




export async function getStaticProps() {
  const MY_PLAYLIST = process.env.EGGS_PLAYLIST_ID;
  const API_KEY = process.env.YOUTUBE_API_KEY
  
  const YOUTUBE_PLAYLIST_ITEMS_API = "https://www.googleapis.com/youtube/v3/playlistItems";
  const YOUTUBE_PLAYLIST_ID = "PLY5aty1hlHsH4DiIKl4Mj4ZIUbE06A4E2";
  
  const res = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&key=${process.env.YOUTUBE_API_KEY}&playlistId=${EGGS_PLAYLIST_ID}&maxResults=50`); 
  const data = await res.json();
  return {
    props: {
      data
    }
  }
}



export default function Podcast(data) {
  console.log(data)

  const [currentVideo, setCurrentVideo ] = useState(results[0]);
  const [playing, setPlaying] = useState(false);

  return (
    <>
      <Head>
        <title>Podcast Interviews - Michael Smith</title>
        <meta
          name="description"
          content="Here are a few interviews that I have enjoyed over the years."
        />
      </Head>
      <YouTubeVideoPlayer id={currentVideo.snippet.resourceId.videoId} playing={playing} />
      <h4 className="text-white ml-10 mt-10">Put Content here. </h4>
    </>
  )
}
