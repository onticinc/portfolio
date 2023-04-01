import Head from 'next/head'


export async function getStaticProps() {
  const res = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&key=${process.env.SIMPLECAST_API_KEY}&playlistId=${YOUTUBE_PLAYLIST_ID}&maxResults=50`); 
  const data = await res.json();
  return {
    props: {
      data
    }
  }
}



export default function Podcast() {
  return (
    <>
      <Head>
        <title>Speaking - Spencer Sharp</title>
        <meta
          name="description"
          content="Here are a few interviews that I have enjoyed over the years."
        />
      </Head>
      <h4 className="text-white ml-10 mt-10">Put Content here. </h4>
    </>
  )
}
