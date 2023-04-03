export default function AudioVideos(){
    return(
        <div>

        </div>
    )
}

export async function getStaticProps(){

    return{
        props: {
            videos: [
                {
                    title: "hello world",
                    description: 'hi there',
                    thumbnailUrl:
                }
            ]
        }
    }

    const now = new Date()

    const tokenResponse = await fetch('https')
}