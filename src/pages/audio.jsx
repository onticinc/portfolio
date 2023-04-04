import Head from 'next/head'
import { SimpleLayout } from '@/components/SimpleLayout';
import { Card } from '@/components/Card';
import Image from 'next/image';



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
  // console.log('data', data)
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


        <div className="border border-zinc-100 justify-center p-5  dark:border-zinc-700/40">
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {data.items.map((item) => {
            console.log('item', item);
            const { id, snippet = {} } = item;
            const { title, thumbnails = {} } = snippet;
            const { medium = {} } = thumbnails;

            return(
                <li key={id} className="gap-5 rounded-2xl border border-zinc-100 p-5 dark:border-zinc-700/40  dark:bg-zinc-800"> 
                  <a href="http:www.audiostarinc.com">
                  <h3 className="font-2xl font-extrabold text-zinc-700 dark:text-white">{title}</h3>
                    <p>
                      <img width={medium.width} height={medium.height} src={medium.url} alt="" />
                    </p>
                  </a>
                </li>
              )
            })}

        </ul>
          </div>

        {/* <div className="border p-5 -ml-9 -mr-9 border-zinc-100 justify-center  dark:border-zinc-700/40">
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {data.items.map((item) => {

            console.log('item', item);

            const { id, snippet  = {} } = item;
            // console.log(snippet)
            const { title, thumbnails = {}, resourceId } = snippet;
            const { medium = {} } = thumbnails;


            <Card
              className="relative gap-2 rounded-2xl border border-zinc-100 p-5 dark:border-zinc-700/40  dark:bg-zinc-800"
              as="li"
              key={id}
            >
              <h3 className="font-2xl font-extrabold text-zinc-700 dark:text-white">
                {title}
              </h3>
              <p>
                <Image width={medium.width} height={medium.height} src={medium.url} alt="" />
              </p>
               
            </Card>
          }, )}
        </ul>
        </div> */}
      </SimpleLayout>
    </>
  )
}
