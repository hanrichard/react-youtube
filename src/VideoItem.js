import React from 'react';

const VideoItem = ({ video }) => {
    return (
      <div className="">
        <img 
	        alt={video.snippet.title}
	        className="ui image"
	        src={video.snippet.thumbnails.medium.url} 
        />
        <div>
        	{video.snippet.title}
        	{video.snippet.description}
        </div>
      </div>
    )
}

export default VideoItem;
