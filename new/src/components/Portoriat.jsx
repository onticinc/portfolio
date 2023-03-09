import Image from 'next/image'
import portriat from '@/images/portrait.png'


export default function Portrait() {
    return (
        <Image
          src={portrait}
          alt=""
         
          className=
            'mt-20 rounded-md bg-zinc-100 dark:bg-zinc-800 h-16 w-16'
        />
    )
  }