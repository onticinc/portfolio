import React from 'react';
import YoutubeVideoPlayer from '@/components/youtubePlayer'; // Make sure the path is correct

export default function FeaturedProject() {
    const videoId = '5mT5s8EQkj4&t=350s'; // The ID of the video you want to play

    return (
        <div className="featured-project">
           <div className="bg-zinc-200 p-1 shadow dark:border-zinc-700/40  dark:bg-zinc-700">
           <div className="rounded-lg border-zinc-100 bg-neutral-50 p-3   dark:bg-zinc-800">
            <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-2">Featured Project</h2>
            <YoutubeVideoPlayer id={videoId} playing={false} />
            </div>
        </div>
        </div>
    );
}
