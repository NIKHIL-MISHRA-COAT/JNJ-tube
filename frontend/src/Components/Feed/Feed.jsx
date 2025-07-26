import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Feed.css";

const Feed = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/feedVideos");

        setVideos(response.data.videos);  
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="feed">
      {videos.length > 0 ? (
        videos.map((video) => (
          <Link to={`/video/${video.lessonId}`} key={video.lessonId} className="card">
            <img src={video.thumbnail} alt={video.name} />
            <h2>{video.name}</h2>
            <h3>{video.description}</h3>
            <p>{video.status} &bull; {new Date(video.uploadDate).toLocaleDateString()}</p>
          </Link>
        ))
      ) : (
        <p>No videos available.</p>
      )}
    </div>
  );
};

export default Feed;
