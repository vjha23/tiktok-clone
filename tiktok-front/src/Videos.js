import React, { useRef, useState } from 'react'
import './Videos.css'
import VideoFooter from './VideoFooter'
import VideoSideBar from './VideoSideBar'


function Videos({ url, channel, description, song, likes, messages, shares }) {
    const [playing, setPlaying] = useState(false)
    const videoRef = useRef(null)

    const handleVideoPress = () => {
        // if video is playing stop it..
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);

        } else {
            // otherwise if its not playing play it..
            videoRef.current.play();
            setPlaying(true)
        }


    }
    return (
        <div className='video'>
            <video
                className='video__player'
                loop
                ref={videoRef}
                onClick={handleVideoPress}
                src={url}
            ></video>
            { /*videofooter*/}
            <VideoFooter
                channel={channel}
                description={description}
                song={song}
            />
            {/*videosidebar*/}
            <VideoSideBar
                likes={likes}
                shares={shares}
                messages={messages}

            />
        </div>


    )
}

export default Videos
