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
      <div className="mt-5 grid gap-3 xl:m-0 xl:grid-cols-3 ">
        {/* Left Column */}

        {/* Short Intro */}
        <div id="left" className="xl:col-span-2">
          <ShortIntro />
          <FeaturedProject />
        </div>

        {/* End Left Column */}

        {/* Right Column */}
        <div id="right" className="md:col-span-2 xl:col-span-1 xl:m-0">
          <WorkHistory />
          <Education />
        </div>
      </div>

      {/* Image Slider */}
      <div id="image-slider" className="col-span-3">
        <ImageSlider />
      </div>
    </>
  );
}
