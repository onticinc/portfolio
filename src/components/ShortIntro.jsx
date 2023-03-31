import Image from "next/image"
import Avatar from "@/images/avatar.png"
import Bio from "@/components/Bio"

export default function ShortIntro() {
    return(
        <>
              <div className="w-full justify-center rounded-2xl border border-zinc-100 p-10 shadow  dark:border-zinc-700/40 ">
                <div className="lg:flex lg:flex-auto lg:flex-row">
                  <Image
                    src={Avatar}
                    alt="Mike Smith - Nome AK"
                    className=" object-cover w-full rounded-lg lg:h-80 lg:w-80"
                  />
                
                  <Bio className="rounded-bl-lg"/>
                </div>
                <h4 className="dark:text-zinc-400 hidden mt-3 lg:block">Michael Smith - Bering Sea, Nome AK</h4>
              </div>
        
        </>
    )



}






