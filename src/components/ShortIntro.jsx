import Image from "next/image";
import Avatar from "@/images/avatar.png";
import Bio from "@/components/Bio";

export default function ShortIntro() {
  return (
    <>
      <div className="mb-2 first:w-full justify-center rounded-sm border border-zinc-200 bg-zinc-200 shadow  dark:border-zinc-700/40 dark:bg-zinc-700">
        <div className="m-1 bg-zinc-100 rounded-lg dark:bg-zinc-800">
        <div className="p-5 rounded-lg dark:bg-zinc-800 ">
          <div className="lg:flex lg:flex-auto lg:flex-row">
          <Image
            src={Avatar}
            alt="Mike Smith - Nome AK"
            className=" rounded-lg object-cover h-80 w-80"
          />

          <Bio className="rounded-bl-lg" />
          </div>
          <h4 className="dark:text-zinc-300 lg:block">
            Michael Smith - Bering Sea, Nome AK
          </h4>
        </div>
        </div>

      </div>
    </>
  );
}
