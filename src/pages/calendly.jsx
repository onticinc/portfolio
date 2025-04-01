import Head from "next/head";
import { InlineWidget } from "react-calendly";

export default function Home() {
  return (
    <>
      <Head>
        <title>Michael Smith - Create, Document, Produce. </title>
        <meta name="calendly" content="Schedule a time to talk." />
      </Head>
      <div className="mt-3 bg-zinc-200 p-1 dark:bg-zinc-700">
        <div className="rounded-lg bg-zinc-100 p-2 dark:bg-zinc-800">
          <h1 className="-ml-3 p-5 text-3xl font-bold text-zinc-700 dark:text-white">
            Schedule a time to talk with me.
          </h1>
          <InlineWidget url="https://calendly.com/m-smith-info/30min?background_color=3f3f46&text_color=fff&primary_color=f97316" style="min-width:320px;height:700px" />
        </div>
      </div>

    </>
  );
}
