import React from 'react'
import ReactPlayer from 'react-player/youtube';



export default function YoutubeVideoPlayer(props) {
    const {id, playing } = props;
    const url = `https://www.youtube.com/watch?v=${id}`

    // Render a YouTube video player
    return(
        <div className="player-wrapper">
            <ReactPlayer className="react-player" url={url} playing={playing} width="100%" height="100%" />
        </div>
        
)
}



