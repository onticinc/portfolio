import Image from 'next/image'
import image1 from '@/images/photos/events/01.png'
import image2 from '@/images/photos/events/02.png'
import image3 from '@/images/photos/events/03.png'
import image4 from '@/images/photos/events/04.png'
import image5 from '@/images/photos/events/05.png'
import image6 from '@/images/photos/events/06.png'
import image7 from '@/images/photos/events/07.png'
import image8 from '@/images/photos/events/08.png'
import image9 from '@/images/photos/events/09.png'
import image10 from '@/images/photos/events/10.png'
import image11 from '@/images/photos/events/11.png'
import image12 from '@/images/photos/events/12.png'
import image13 from '@/images/photos/events/13.png'
import image14 from '@/images/photos/events/14.png'
import image15 from '@/images/photos/events/15.png'
import image16 from '@/images/photos/events/16.png'
import image17 from '@/images/photos/events/17.png'
import image18 from '@/images/photos/events/18.png'
import image19 from '@/images/photos/events/19.png'
import image20 from '@/images/photos/events/20.png'
import image21 from '@/images/photos/events/21.png'
import image22 from '@/images/photos/events/22.png'
import image23 from '@/images/photos/events/23.png'
import image24 from '@/images/photos/events/24.png'
import image25 from '@/images/photos/events/25.png'
import image26 from '@/images/photos/events/26.png'
import image27 from '@/images/photos/events/27.png'
import image28 from '@/images/photos/events/28.png'
import image29 from '@/images/photos/events/29.png'
import image30 from '@/images/photos/events/30.png'
import image31 from '@/images/photos/events/31.png'
import image32 from '@/images/photos/events/32.png'
import image33 from '@/images/photos/events/33.png'
import image34 from '@/images/photos/events/34.png'


import clsx from 'clsx'

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));

export default function ImageSlider() {
    let rotations = ['rotate-0', '-rotate-0', 'rotate-0', 'rotate-0', '-rotate-0']
  
    return (
   
      <div className="mt-10">
        <div id="slider" className="-my-4 flex justify-center gap-5 py-4 sm:gap-8 overflow-x-scroll scroll whitespace-nowrap scroll-smooth">
  
          
            {[images].map((image, imageIndex) => (
              <div
                key={image.src}
                className={clsx(
                  'relative aspect-[9/10] flex-none inline-block cursor-pointer hover:scale-105 ease-out  duration-500 overflow-hidden  bg-zinc-100 dark:bg-zinc-800 w-72 rounded-2xl',
                  rotations[imageIndex % rotations.length]
                )}
              >
                <Image
                  src={image}
                  alt=""
                  sizes="(min-width: 640px) 18rem, 11rem"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            ))}
       
        </div>
      </div>
    
    )
  }