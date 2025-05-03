import React, { useEffect, useState } from "react";
import axios from "axios";

const YouTubePlayer = () => {
  const [videos, setVideos] = useState([]);

  const apiKey = "AIzaSyCPxpKS7PeKEvPGE-jWjoiuHQtZ498Lp_0"; // <<<--- paste your key here
  const searchTerms = [
    "Bildad Ogweno gospel songs",
    "Joshua Mbere gospel songs",
    "Elijah Jalogo gospel songs",
  ];

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        let allVideos = [];

        for (const term of searchTerms) {
          const res = await axios.get(
            `https://www.googleapis.com/youtube/v3/search`, {
              params: {
                part: "snippet",
                q: term,
                key: apiKey,
                maxResults: 2, // 2 videos per artist
                type: "video",
              }
            }
          );
          allVideos = [...allVideos, ...res.data.items];
        }
        
        setVideos(allVideos);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="youtube-player">
      <h2 className="text-2xl font-bold mb-4">Latest Gospel Songs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {videos.map((video) => (
          <div key={video.id.videoId} className="rounded overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="215"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              title={video.snippet.title}
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{video.snippet.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouTubePlayer;
