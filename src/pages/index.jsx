import Head from "next/head";
import WorkHistory from "@/components/WorkHistory";
import Education from "@/components/Education";
import FeaturedProject from "@/components/FeaturedProject";
import ImageSlider from "@/components/ImageSlider";
import ShortIntro from "@/components/ShortIntro";


export default function Home() {
  return (
    <>
      <Head>
        <title>Michael Smith - Create, Document, Produce. </title>
        <meta name="portfolio" content="Portfolio of work by Michael Smith." />
      </Head>
      <div className="mt-2 grid gap-2 md:grid-cols-3">
        {/* Left Column */}

        {/* Short Intro */}
        <div id="left" className="col-span-3 md:col-span-2">
          <ShortIntro />
        </div>

        {/* End Left Column */}

        {/* Right Column */}
        <div id="right" className="col-span-3 md:col-span-1">
          <WorkHistory />
          <Education />
        </div>
        <div className="col-span-3">

          <FeaturedProject />
        </div>
      </div>

      {/* Image Slider */}
      <div id="image-slider" className="col-span-3 w-full">
        <ImageSlider />
      </div>
    </>
  );
}
