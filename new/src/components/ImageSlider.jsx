import Image from 'next/image'
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


import clsx from 'clsx'

export default function ImageSlider() {

  let imageInfo = [
    {
      title: 'Wedding at Larc Hill Vineyard',
      image: image1,
      altTag: 'Wedding at Larc Hill Vineyard',
      link: 'https://www.generalassemb.ly',
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
      image: image1,
      altTag: 'DJ Event at Tavern Hall in Bellvue',
      link: 'https://www.tavern-hall.com/',
    },
    {
      title: 'Wedding Reception at The Historic Farmhouse',
      image: image1,
      altTag: 'Wedding Reception at The Historic Farmhouse',
      link: 'https://www.djontic.com',
    },
    {
      title: 'Weddomg at Larc Hill Vineyard',
      image: image1,
      altTag: 'Wedding at Larc Hill Vineyard',
      link: 'https://www.generalassemb.ly',
    },
    {
      title: 'Weddomg at Larc Hill Vineyard',
      image: image1,
      altTag: 'Wedding at Larc Hill Vineyard',
      link: 'https://www.generalassemb.ly',
    },
    {
      title: 'Weddomg at Larc Hill Vineyard',
      image: image1,
      altTag: 'Wedding at Larc Hill Vineyard',
      link: 'https://www.generalassemb.ly',
    },
    {
      title: 'Weddomg at Larc Hill Vineyard',
      image: image1,
      altTag: 'Wedding at Larc Hill Vineyard',
      link: 'https://www.generalassemb.ly',
    },
    {
      title: 'Weddomg at Larc Hill Vineyard',
      image: image1,
      altTag: 'Wedding at Larc Hill Vineyard',
      link: 'https://www.generalassemb.ly',
    },
    {
      title: 'Weddomg at Larc Hill Vineyard',
      image: image1,
      altTag: 'Wedding at Larc Hill Vineyard',
      link: 'https://www.generalassemb.ly',
    },
    {
      title: 'Weddomg at Larc Hill Vineyard',
      image: image1,
      altTag: 'Wedding at Larc Hill Vineyard',
      link: 'https://www.generalassemb.ly',
    },
    {
      title: 'Weddomg at Larc Hill Vineyard',
      image: image1,
      altTag: 'Wedding at Larc Hill Vineyard',
      link: 'https://www.generalassemb.ly',
    },
    {
      title: 'Weddomg at Larc Hill Vineyard',
      image: image1,
      altTag: 'Wedding at Larc Hill Vineyard',
      link: 'https://www.generalassemb.ly',
    },
    {
      title: 'Weddomg at Larc Hill Vineyard',
      image: image1,
      altTag: 'Wedding at Larc Hill Vineyard',
      link: 'https://www.generalassemb.ly',
    },
    {
      title: 'Weddomg at Larc Hill Vineyard',
      image: image1,
      altTag: 'Wedding at Larc Hill Vineyard',
      link: 'https://www.generalassemb.ly',
    },
    {
      title: 'Weddomg at Larc Hill Vineyard',
      image: image1,
      altTag: 'Wedding at Larc Hill Vineyard',
      link: 'https://www.generalassemb.ly',
    },
    {
      title: 'Weddomg at Larc Hill Vineyard',
      image: image1,
      altTag: 'Wedding at Larc Hill Vineyard',
      link: 'https://www.generalassemb.ly',
    },

  ]


    let rotations = ['rotate-0', '-rotate-0', 'rotate-0', 'rotate-0', '-rotate-0']
  
    return (
   
      <div className="mt-10">
        <div id="slider" className="-my-6 flex gap-5 py-4 sm:gap-8  ">
  
          
            {[  , 
                image2, 
                image3, 
                image4, 
                image5,
                image6,
                image7,
                image8,
                image10,
                image11,
                image12,
                image13,
                image14,
                image16,
                image17,
                image18,
                image19,
                image20,
                image21,
                image22,
                image23,
                image25,
                image26,
                image27,
                image28,
                image29,
                image30,
                image31,
                image32,
                image33,
                image34           
              ].map((image, imageIndex) => (
              <div
                key={image.src}
                className={clsx(
                  ' flex flex-row items-center scroll w-96 cursor-pointer hover:scale-105 ease-out duration-500 scroll scroll-smooth  overflow-x-scroll snap-x  bg-zinc-100 dark:bg-zinc-800 rounded-2xl',
                  rotations[imageIndex % rotations.length]
                )}
              >
                <Image
                  src={image}
                  alt=""
                  placeholder='blur'
                />
              </div>
              
            ))}
       
        </div>
      </div>
    
    )
  }