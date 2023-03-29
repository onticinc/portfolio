async function getPodcastData() { 
    const response = await fetch('https://api.audioboom.com/channels/recommended');
    const data = await response.json();
    const { body: channels } = data;
    return channels;
}

export default function PodcastCard (){
    return (
    <>
    <div className="flex flex-col items-center justify-center w-full h-full">

    </div>
    </>
    )
}