import React, { useEffect, useState } from 'react';
import './App.css';
import Videos from './Videos';
import axios from './axios'


function App() {
  const [videos, setVideos] = useState([])
  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get('/v2/posts');
      setVideos(response.data)
      return response;

    }
    fetchPosts();
  }, []);
  console.log(videos);
  return (
    <div className="app">
      {/* videos */}
      <div className='app__video'>
        {videos.map(({ _id, url, channel, description, song, likes, messages, shares }) => {
          return (
            <Videos
              key={_id}
              url={url}
              channel={channel}
              song={song}
              likes={likes}
              messages={messages}
              description={description}
              shares={shares}


            />
          )

        })}



      </div>

    </div>
  );
}

export default App;
