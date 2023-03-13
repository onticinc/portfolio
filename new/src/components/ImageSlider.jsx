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
    let rotations = ['rotate-0', '-rotate-0', 'rotate-0', 'rotate-0', '-rotate-0']
  
    return (
   
      <div className="mt-10">
        <div id="slider" className="-my-4 flex justify-center gap-5 py-4 sm:gap-8 overflow-x-scroll scroll whitespace-nowrap scroll-smooth">
  
          
            {[  image1, 
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
                  'scroll-auto scroll-ml-6 scroll-p-8 md:scroll-p-0 snap-x flex flex-wrap scroll w-96 relative aspect-[10/10] cursor-pointer hover:scale-105 ease-out scroll-p-6 duration-500  bg-zinc-100 dark:bg-zinc-800 rounded-2xl',
                  rotations[imageIndex % rotations.length]
                )}
              >
                <Image
                  src={image}
                  alt=""
                  layout='fill'
                  placeholder='blur'
                />
              </div>
            ))}
       
        </div>
      </div>
    
    )
  }