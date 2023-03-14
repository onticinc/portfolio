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



export default function ImageSlider() {

  let image = [
    {
      title: 'Wedding at Larc Hill Vineyard',
      image: image1,
      altTag: 'Wedding at Larc Hill Vineyard',
      link: 'https://www.larchill.com/',
    },
    {
      title: 'Recording a Podcast with Gail Miller, Owner of the Utah Jazz',
      image: image2,
      altTag: 'Recording a Podcast with Gail Miller, Owner of the Utah Jazz',
      link: 'https://utahjazz.com',
    },
    {
      title: 'Editing Station',
      image: image3,
      altTag: 'Audio and Video editing station',
      link: 'https://www.audiostarinc.com',
    },
    {
      title: 'Wedding at Tsillan Cellars in Lake Chelan WA',
      image: image4,
      altTag: 'Wedding Reception at Tsillian Cellars in Chelan WA',
      link: 'https://tsillancellars.com/',
    },
    {
      title: 'Recording an Episode of the Eggs Podcast with Ryan Roghaar', 
      image: image5,
      altTag: 'Recording a podcast with Ryan Roghaar',
      link: 'https://www.eggscast.com',
    },
    {
      title: 'Respect the Decks DJ Battle with Rob Swift',
      image: image6,
      altTag: 'Respect the Decks DJ Battle with Rob Swift',
      link: 'https://www.brolicarmy.com',
    },
    {
      title: 'Holiday party for 1st Capital Bank',
      image: image7,
      altTag: 'Holiday party for 1st Capital Bank',
      link: 'https://www.1stcapitalbank.com',
    },
    {
      title: 'Tavern Hall Bellvue',
      image: image8,
      altTag: 'DJ Event at Tavern Hall in Bellvue',
      link: 'https://www.tavern-hall.com/',
    },
    {
      title: 'Wedding Reception at The Historic Farmhouse',
      image: image10,
      altTag: 'Wedding Reception at The Historic Farmhouse',
      link: 'https://www.djontic.com',
    },
    {
      title: 'Getting ready for a corporate event in Salt Lake',
      image: image11,
      altTag: 'Getting ready for a gig. DJ equipment and lighting',
      link: 'https://www.djontic.com',
    },
    {
      title: 'High School Prom in Phoenix AZ',
      image: image12,
      altTag: 'High School Prom in Phoenix AZ',
      link: 'https://www.djontic.com',
    },
    {
      title: 'Weddomg at Within Sodo',
      image: image13,
      altTag: 'Wedding at Within Sodo',
      link: 'https://www.djontic.com',
    },
    {
      title: 'Providing audio for Scott Foster at Siren Songs Winery',
      image: image14,
      altTag: 'Wedding with Scott Foster at Siren Songs Winery',
      link: 'https://audiostarinc.com',
    },
    {
      title: 'Wedding Ceremony and Reception at Siren Songs Winery.',
      image: image16,
      altTag: 'Wedding Ceremony and Reception at Siren Songs Winery.',
      link: 'https://www.djontic.com',
    },
    {
      title: 'High School Prom in Phoenix Arizona',
      image: image17,
      altTag: 'High School Prom in Phoenix Arizona',
      link: 'https://www.djontic.com',
    },

    {
      title: 'Wedding for Ian Foster in Provo Utah',
      image: image18,
      altTag: 'Wedding for Ian Foster in Provo Utah',
      link: 'https://www.djontic.com',
    },
    {
      title: 'Tones For Chrons Event in Anacortes WA',
      image: image19,
      altTag: 'Tones for Chrons Event in Anacortes WA',
      link: 'https://www.djontic.com',
    },
    {
      title: 'Lunch Jam for Clover Park Community College',
      image: image20,
      altTag: 'Lunch Jam for Clover Park Community College',
      link: 'https://www.djontic.com',
    },
    {
      title: 'Corporate Event for Bombay Sapphire in Seattle WA',
      image: image21,
      altTag: 'Corporate Event for Bombay Sapphire in Seattle WA',
      link: 'https://www.djontic.com',
    },
    {
      title: 'Lighting and Audio for the Tempe Block Party in Tempe AZ',
      image: image22,
      altTag: 'Lighting and Audio for the Tempe Block Party in Tempe AZ',
      link: 'https://www.djontic.com',
    },
    {
      title: 'Wedding reception at Campbells Resort in Lake Chelan',
      image: image23,
      altTag: 'Wedding reception at Campbells Resort in Lake Chelan',
      link: 'https://www.djontic.com',
    },
    {
      title: 'DJing at The Ballroom in Fremont WA',
      image: image25,
      altTag: 'DJing at The Ballroom in Fremont WA',
      link: 'https://www.djontic.com',
    },
    {
      title: 'Wedding Reception at Karma Vineyards in Chelan WA',
      image: image26,
      altTag: 'Wedding Reception at Karma Vineyards in Chelan WA',
      link: 'https://www.djontic.com',
    },
    {
      title: 'Performing at Jazzbones in Tacoma WA',
      image: image27,
      altTag: 'Performing at Jazzbones in Tacoma WA',
      link: 'https://www.djontic.com',
    },
    {
      title: 'Performing at Jones 80s Retro Bar in Portland OR',
      image: image28,
      altTag: 'Performing at Jones 80s Retro Bar in Portland OR',
      link: 'https://www.djontic.com',
    },
    {
      title: 'Recording the Eggs Podcast with Ryan Roghaar',
      image: image29,
      altTag: 'Recording the Eggs Podcast with Ryan Roghaar',
      link: 'https://www.eggscast.com',
    },
    {
      title: 'Recording the Nextset Podcast',
      image: image30,
      altTag: 'Recording the Nextset Podcast',
      link: 'https://www.audiostaring.com',
    },
    {
      title: 'Recording the Eggs Podcast with Ryan Roghaar',
      image: image31,
      altTag: 'Recording the Eggs Podcast with Ryan Roghaar',
      link: 'https://www.eggscast.com',
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
      title: 'Providing lights and sound for a medical conference in Salt Lake City',
      image: image34,
      altTag: 'Providing lights and sound for a medical conference in Salt Lake City',
      link: 'https://www.audiostarinc.com',
    },

  ]

  
    return (
   <div class="flex flex-row">
      {image.map((role, roleIndex) => (
        <div key={roleIndex} className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 mt-10">
          <Link href={role.link} target="_blank">
            <div className="relative mt-1 flex h-12 w-12 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.image} alt={role.altTag} className="h-12 w-12" />
            </div>
              <p className="text-white">{role.title}</p>
          </Link>
        </div>
      ))}
    </div>
    )
  };