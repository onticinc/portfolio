import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the YoutubeVideoPlayer component with no SSR
const YoutubeVideoPlayer = dynamic(() => import('@/components/youtubePlayer'), { ssr: false });

export default function FeaturedProject() {
    const videoId = 'nbpQbcp1jHo'; // The ID of the video you want to play
    

    return (
        <div className="featured-project">
            <div className="bg-zinc-200 p-1 shadow dark:border-zinc-700/40 dark:bg-zinc-700">
                <div className="rounded-lg border-zinc-100 bg-neutral-50 p-3 dark:bg-zinc-800">
                    <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-2"><span className="font-bold">Featured Project:</span> Lighting setup time lapse, live Recording of Layne Bowen at the event.</h2> 
                    <YoutubeVideoPlayer id={videoId} playing={false} />
                </div>
            </div>
        </div>
    );
}
