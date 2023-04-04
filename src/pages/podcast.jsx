import Head from 'next/head'
import YouTubePlayer from 'react-player/youtube';
import { useState } from 'react';

export default function Home({ results}) {
  const [currentVideo, setCurrentVideo ] = useState(results[0]);
  const [playing, setPlaying] = useState(false);
  return(
    <YoutubeVideoPlayer id={currentVideo.snippet.resourceId.videoId} playing={playing} />
  )
}

export async function getStaticProps() {
  const MY_PLAYLIST = process.env.YOUTUBE_PLAYLIST_ID;
  const API_KEY = process.env.YOUTUBE_API_KEY
  const res = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&key=${process.env.YOUTUBE_API_KEY}&playlistId=${YOUTUBE_PLAYLIST_ID}&maxResults=50`); 
  const data = await res.json();
  return {
    props: {
      data
    }
  }
}



export default function Podcast(result) {
  return (
    <>
      <Head>
        <title>Podcast Interviews - Michael Smith</title>
        <meta
          name="description"
          content="Here are a few interviews that I have enjoyed over the years."
        />
      </Head>
      <h4 className="text-white ml-10 mt-10">Put Content here. </h4>
    </>
  )
}
