import Image from "next/image";
import Avatar from "@/images/avatar.png";
import Bio from "@/components/Bio";

export default function ShortIntro() {
  return (
    <>
      <div className="justify-center rounded-sm border border-zinc-200 bg-zinc-200 shadow first:w-full  dark:border-zinc-700/40 dark:bg-zinc-700">
        <div className="m-1 rounded-lg bg-zinc-100 dark:bg-zinc-800">
          <div className="col rounded-lg p-3 dark:bg-zinc-800 sm:col-span-1 md:col-span-4 ">
            <div className="col-span-3">
            <div className="p-3 bg-zinc-200 dark:bg-zinc-900 rounded-lg">
              <Image
                src={Avatar}
                alt="Photo of Michael Smith - Nome AK"
                className="rounded-lg object-cover max-h-[500px] w-full"
              />
              <h4 className="dark:text-zinc-500 mt-3 text-right">
                Michael Smith - Bering Sea, Nome AK
              </h4>
            </div>
            </div>
            <div className="col-span-3 ">
              <Bio />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
