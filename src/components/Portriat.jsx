import Image from 'next/image'
import avatar from '@/images/avatar.png'


export default function Portrait() {
    return (
        <Image
          src={avatar}
          alt=""
          className=
            'mt-20 rounded-md bg-zinc-100 dark:bg-zinc-800 lg:hidden w-full '
        />
    )
  }