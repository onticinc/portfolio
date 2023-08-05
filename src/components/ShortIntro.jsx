import Image from "next/image";
import Avatar from "@/images/avatar.png";
import Bio from "@/components/Bio";

export default function ShortIntro() {
  return (
    <>
      <div className="w-full justify-center rounded-2xl border border-zinc-100 bg-neutral-50 p-10 shadow dark:border-zinc-700/40  dark:bg-zinc-800/90 mb-5">
        <div className="lg:flex lg:flex-auto lg:flex-row">
          <Image
            src={Avatar}
            alt="Mike Smith - Nome AK"
            className=" w-full rounded-lg object-cover lg:h-80 lg:w-80"
          />

          <Bio className="rounded-bl-lg" />
        </div>
        <h4 className="mt-3 hidden dark:text-zinc-400 lg:block">
          Michael Smith - Bering Sea, Nome AK
        </h4>
      </div>
    </>
  );
}
