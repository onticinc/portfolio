import Image from "next/image";
import Avatar from "@/images/avatar.png";
import Bio from "@/components/Bio";

export default function ShortIntro() {
  return (
    <>
      <div className="mb-3 w-full justify-center rounded-2xl border border-zinc-100 bg-neutral-50 p-1 shadow  dark:border-zinc-700/40 dark:bg-zinc-700">
        <div className="p-5 rounded-2xl dark:bg-zinc-800 ">
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
    </>
  );
}
