import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { ArrowLeft, ArrowRight } from "heroicons-react";

const YoutubeVideoPlayer = dynamic(() => import('@/components/youtubePlayer'), { ssr: false });

export default function FeaturedProject() {
    const videos = [
        'nbpQbcp1jHo',
        'di2fHkIjEqA',
        '5mT5s8EQkj4',
        'Lnm-06uR6xs',
        'hU_ad6FjaZ8'
    ];

    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [videoDetails, setVideoDetails] = useState(null);

    // Fetch video details from YouTube API
    useEffect(() => {
        const fetchVideoDetails = async () => {
            try {
                const response = await fetch(
                    `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videos[currentVideoIndex]}&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`
                );
                const data = await response.json();
                if (data.items && data.items.length > 0) {
                    setVideoDetails(data.items[0]);
                }
            } catch (error) {
                console.error('Error fetching video details:', error);
            }
        };

        fetchVideoDetails();
    }, [currentVideoIndex]);

    // Randomize initial video on component mount
    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * videos.length);
        setCurrentVideoIndex(randomIndex);
    }, []);

    const handlePreviousVideo = () => {
        setCurrentVideoIndex((prev) => 
            prev === 0 ? videos.length - 1 : prev - 1
        );
    };

    const handleNextVideo = () => {
        setCurrentVideoIndex((prev) => 
            prev === videos.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <div className="featured-project">
            <div className="bg-zinc-200 p-1 shadow dark:border-zinc-700/40 dark:bg-zinc-700">
                <div className="rounded-lg border-zinc-100 bg-neutral-50 p-3 dark:bg-zinc-800">
                    <div className="mb-3">
                        <span className="font-2xl font-extrabold text-zinc-900 dark:text-zinc-400 mb-2">
                            Featured Projects:
                        </span>
                    </div>
                    <YoutubeVideoPlayer id={videos[currentVideoIndex]} playing={false} />
                    
                    {/* Current Video Description */}
                    {videoDetails && (
                        <div className="bg-zinc-200 w-full p-1 mt-4 dark:bg-zinc-700">
                            <div className="border bg-zinc-100 rounded-lg min-h-[100px] shadow border-zinc-100 p-2 dark:border-zinc-700/40 dark:bg-zinc-800 sm:col-span-1">
                                <div className="relative bg-zinc-200 dark:bg-zinc-900 p-2">
                                    <h3 className="text-1xl mb-3 font-extrabold text-zinc-800 dark:text-zinc-100">
                                        {videoDetails.snippet.title}
                                    </h3>
                                    <div className="flex overscroll-contain overflow-x-scroll max-h-[560px]">
                                        <p className="text-zinc-700 dark:text-white">
                                            {videoDetails.snippet.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Previous Next Button */}
              <div className="mt-5">
                <nav className="flex items-center grow justify-between sm:px-0">
                  <div className="-mt-px flex w-0 flex-1 text-purple-500 hover:text-orange-500 dark:text-orange-500">
                    <a
                      onClick={handlePreviousVideo}
                      className="inline-flex items-center pr-1 pt-4 text-sm font-medium dark:text-orange-500 text-purple-500 hover:border-indigo-300 hover:text-orange-500"
                    >
                      <ArrowLeft id="arrowLeft" className="mr-3 h-5 w-5" aria-hidden="true" />
                      Previous
                    </a>
                  </div>
                  <div className="-mt-px flex w-0 flex-1 justify-end dark:text-orange-500 text-purple-500 hover:text-orange-500">
                    <a
                      onClick={handleNextVideo}
                      className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium"
                    >
                      Next
                      <ArrowRight id="arrowRight" className="ml-3 h-5 w-5" aria-hidden="true" />
                    </a>
                  </div>
                </nav>
              </div>
                </div>
            </div>
        </div>
    );
}
