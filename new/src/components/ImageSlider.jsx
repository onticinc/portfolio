import Image from 'next/image'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'

import clsx from 'clsx'

export default function ImageSlider() {
    let rotations = ['rotate-1', '-rotate-0', 'rotate-0', 'rotate-0', '-rotate-1']
  
    return (
   
      <div className="mt-10">
        <div id="slider" className="-my-4 flex justify-center gap-5 py-4 sm:gap-8 overflow-x-scroll scroll whitespace-nowrap scroll-smooth">
  
          
            {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
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