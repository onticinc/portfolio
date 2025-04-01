import Image from 'next/image'
import Link from 'next/link'
import image1 from '@/images/events/01.png'
import image2 from '@/images/events/02.png'
import image3 from '@/images/events/03.png'
import image4 from '@/images/events/04.png'
import image5 from '@/images/events/05.png'
import image6 from '@/images/events/06.png'
import image7 from '@/images/events/07.png'
import image8 from '@/images/events/08.png'
import image10 from '@/images/events/10.png'
import image11 from '@/images/events/11.png'
import image12 from '@/images/events/12.png'
import image13 from '@/images/events/13.png'
import image14 from '@/images/events/14.png'
import image16 from '@/images/events/16.png'
import image17 from '@/images/events/17.png'
import image18 from '@/images/events/18.png'
import image19 from '@/images/events/19.png'
import image20 from '@/images/events/20.png'
import image21 from '@/images/events/21.png'
import image22 from '@/images/events/22.png'
import image23 from '@/images/events/23.png'
import image25 from '@/images/events/25.png'
import image26 from '@/images/events/26.png'
import image27 from '@/images/events/27.png'
import image28 from '@/images/events/28.png'
import image29 from '@/images/events/29.png'
import image30 from '@/images/events/30.png'
import image31 from '@/images/events/31.png'
import image32 from '@/images/events/32.png'
import image33 from '@/images/events/33.png'
import image34 from '@/images/events/34.png'
import { Container } from './Container'



export default function ImageSlider() {

  let image = [
    {
      title: 'Wedding at Larc Hill Vineyard',
      image: image1,
      altTag: 'Wedding at Larc Hill Vineyard',
      link: 'https://www.larchill.com/',
    },
    
    {
      title: 'Podcast with Gail Miller, Owner of the Utah Jazz',
      image: image3,
      altTag: 'Recording a Podcast with Gail Miller, Owner of the Utah Jazz',
      link: 'https://utahjazz.com',
    },
    {
      title: 'Editing Station',
      image: image4,
      altTag: 'Audio and Video editing station',
      link: 'https://www.audiostarinc.com',
    },
    {
      title: 'Wedding at Tsillan Cellars in Lake Chelan WA',
      image: image5,
      altTag: 'Wedding Reception at Tsillian Cellars in Chelan WA',
      link: 'https://tsillancellars.com/',
    },
    {
      title: 'Recording an Episode of the Eggs Podcast with Ryan Roghaar', 
      image: image6,
      altTag: 'Recording a podcast with Ryan Roghaar',
      link: 'https://www.eggscast.com',
    },
    {
      title: 'Wedding at Larc Hill Vineyard',
      image: image2,
      altTag: 'Wedding at Larc Hill Vineyard',
      link: 'https://www.larchill.com/',
    },
    {
      title: 'Respect the Decks DJ Battle with Rob Swift',
      image: image7,
      altTag: 'Respect the Decks DJ Battle with Rob Swift',
      link: 'https://www.djontic.com',
    },
    {
      title: 'Holiday party for 1st Capital Bank',
      image: image8,
      altTag: 'Holiday party for 1st Capital Bank',
      link: 'https://www.1stcapitalbank.com',
    },
    {
      title: 'Tavern Hall Bellvue',
      image: image10,
      altTag: 'DJ Event at Tavern Hall in Bellvue',
      link: 'https://www.tavern-hall.com/',
    },
    {
      title: 'Wedding Reception at The Historic Farmhouse',
      image: image11,
      altTag: 'Wedding Reception at The Historic Farmhouse',
      link: 'https://www.djontic.com',
    },
    {
      title: 'Getting ready for a corporate event in Salt Lake',
      image: image12,
      altTag: 'Getting ready for a gig. DJ equipment and lighting',
      link: 'https://www.djontic.com',
    },
    {
      title: 'High School Prom in Phoenix AZ',
      image: image13,
      altTag: 'High School Prom in Phoenix AZ',
      link: 'https://www.djontic.com',
    },
    {
      title: 'Wedding at Within Sodo',
      image: image14,
      altTag: 'Wedding at Within Sodo',
      link: 'https://www.djontic.com',
    },
    {
      title: 'Providing audio for Scott Foster at Siren Songs Winery',
      image: image16,
      altTag: 'Wedding with Scott Foster at Siren Songs Winery',
      link: 'https://audiostarinc.com',
    },
    {
      title: 'Wedding Ceremony and Reception at Siren Songs Winery.',
      image: image17,
      altTag: 'Wedding Ceremony and Reception at Siren Songs Winery.',
      link: 'https://www.djontic.com',
    },
    {
      title: 'High School Prom in Phoenix Arizona',
      image: image18,
      altTag: 'High School Prom in Phoenix Arizona',
      link: 'https://www.djontic.com',
    },

    {
      title: 'Wedding for Ian Foster in Provo Utah',
      image: image19,
      altTag: 'Wedding for Ian Foster in Provo Utah',
      link: 'https://www.djontic.com',
    },
    {
      title: 'Tones For Chrons Event in Anacortes WA',
      image: image20,
      altTag: 'Tones for Chrons Event in Anacortes WA',
      link: 'https://www.djontic.com',
    },
    {
      title: 'Lunch Jam for Clover Park Community College',
      image: image21,
      altTag: 'Lunch Jam for Clover Park Community College',
      link: 'https://www.djontic.com',
    },
    {
      title: 'Corporate Event for Bombay Sapphire in Seattle WA',
      image: image22,
      altTag: 'Corporate Event for Bombay Sapphire in Seattle WA',
      link: 'https://www.djontic.com',
    },
    {
      title: 'Lighting and Audio for the Tempe Block Party in Tempe AZ',
      image: image23,
      altTag: 'Lighting and Audio for the Tempe Block Party in Tempe AZ',
      link: 'https://www.djontic.com',
    },
    {
      title: 'Wedding reception at Campbells Resort in Lake Chelan',
      image: image25,
      altTag: 'Wedding reception at Campbells Resort in Lake Chelan',
      link: 'https://www.djontic.com',
    },
    {
      title: 'Ballroom in Fremont WA',
      image: image26,
      altTag: 'DJing at The Ballroom in Fremont WA',
      link: 'https://www.djontic.com',
    },
    {
      title: 'Wedding Reception at Karma Vineyards in Chelan WA',
      image: image27,
      altTag: 'Wedding Reception at Karma Vineyards in Chelan WA',
      link: 'https://www.djontic.com',
    },
    {
      title: 'Performing at Jazzbones in Tacoma WA',
      image: image28,
      altTag: 'Performing at Jazzbones in Tacoma WA',
      link: 'https://www.djontic.com',
    },
    {
      title: 'Performing at Jones Bar in Portland OR',
      image: image29,
      altTag: 'Performing at Jones Bar in Portland OR',
      link: 'https://www.djontic.com',
    },
    {
      title: 'Recording the Eggs Podcast with Ryan Roghaar',
      image: image30,
      altTag: 'Recording the Eggs Podcast with Ryan Roghaar',
      link: 'https://www.eggscast.com',
    },
    {
      title: 'Recording the Nextset Podcast',
      image: image31,
      altTag: 'Recording the Nextset Podcast',
      link: 'https://www.audiostarinc.com',
    },
    
    {
      title: 'Wedding Reception in Provo Utah',
      image: image32,
      altTag: 'Wedding Receotion in Provo Utah',
      link: 'https://www.djontic.com',
    },
    {
      title: 'Performing in Scottsdale AZ',
      image: image33,
      altTag: 'Performing in Scottsdale AZ',
      link: 'https://www.djontic.com',
    },
    {
      title: 'Lighting and audio for a medical conference in Salt Lake City',
      image: image34,
      altTag: 'Lighting and audio for a medical conference in Salt Lake City',
      link: 'https://www.audiostarinc.com',
    },

  ]

  
    return (
     
      <div className="relative shadow rounded-sm p-1 mt-2 bg-zinc-200 dark:bg-zinc-700 justify-center  dark:border-zinc-700/40 ">
        <div className='dark:bg-zinc-800 p-3 bg-zinc-100 rounded-lg '>
          <h3 className="font-2xl font-extrabold text-zinc-900 dark:text-zinc-400">Event | Production Photos:</h3>
          
          <div className="flex overscroll-contain overflow-x-scroll ">
              {image.map((role, roleIndex) => (
                <div key={roleIndex} className="border bg-zinc-200 border-zinc-100 p-2 dark:border-zinc-700/40 mt-3 gap-2 mr-4 dark:bg-zinc-600/30  dark:hover:bg-zinc-700 ">
                  <Link href={role.link} target="_blank">
                    <div className="relative w-64 md:w-96 items-center justify-center rounded-sm ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                      <Image src={role.image} alt={role.altTag} className="rounded-lg w-full" />
                    </div>
                      <p className="text-zinc-500 dark:text-zinc-400 mt-4 italic">{role.title}</p>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    )
  };