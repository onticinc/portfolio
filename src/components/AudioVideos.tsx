export default function AudioVideos(){
    videos: String;

} 


export async function getStaticProps(){

    return{
        props: {
            videos: [
                {
                    title: "hello world",
                    description: 'hi there',
                    thumbnailUrl: 'https://i.ytimg.com/vi/qZC3qzD9tLg/default.jpg',
                    height: "90",
                    width: "120",
                },
            ]
        }
    }

    const now = new Date()

    const tokenResponse = await fetch('https')
}