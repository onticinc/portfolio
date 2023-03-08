import React from "react"
import ReactPlayer from "react-player"

const ResponsivePlayer = ({url}) => {
    return (
        <div className="container">
            <ReactPlayer 
                className="react-player"
                url={url}
                width="450"
                height="200"
                controls={true}
            />
        </div>
    )
}

export default ResponsivePlayer