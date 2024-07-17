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
                    <div className="mb-3"><span className="font-2xl font-extrabold text-zinc-900 dark:text-zinc-400 mb-2">Featured Project:</span></div>
                    <YoutubeVideoPlayer id={videoId} playing={false} />
                </div>
            </div>
        </div>
    );
}
