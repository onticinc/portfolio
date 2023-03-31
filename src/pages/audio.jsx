import Head from 'next/head'

const YOUTUBE_PLAYLIST_ITEMS_API = "https://www.googleapis.com/youtube/v3/playlistItems";

export async function getStaticProps() {
  const res = await fetch(YOUTUBE_PLAYLIST_ITEMS_API); 
  const data = await res.json();
  return {
    props: {
      data
    }
  }
}


export default function Audio({ data }) {
  console.log('data', data)
  return (
    <>
      <Head>
        <title>Audio Projects - Michael Smith</title>
        <meta
          name="description"
          content="I have been able to record many great bands over the years, here are a few of my favorites. "
        />
      </Head>
      <div className="m-5 ">


      </div>
    </>
  )
}
