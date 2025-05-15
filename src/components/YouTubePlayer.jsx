import React, { useEffect, useState } from "react";
import axios from "axios";

const YouTubePlayer = () => {
  const [videos, setVideos] = useState([]);
  const [featuredVideo, setFeaturedVideo] = useState(null);

  const apiKey = "AIzaSyCPxpKS7PeKEvPGE-jWjoiuHQtZ498Lp_0";
  const searchTerm = "Bildad Ogweno gospel songs";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const fetchVideos = async () => {
      try {
        const res = await axios.get("https://www.googleapis.com/youtube/v3/search", {
          params: {
            part: "snippet",
            q: searchTerm,
            key: apiKey,
            maxResults: 10,
            type: "video",
          },
        });

        const fetchedVideos = res.data.items;
        if (fetchedVideos.length > 0) {
          setVideos(fetchedVideos);
          setFeaturedVideo(fetchedVideos[0]);
        } else {
          setVideos([]);
          setFeaturedVideo(null);
        }
      } catch (error) {
        console.error("❌ Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);

  const handleSelectVideo = (video) => {
    setFeaturedVideo(video);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const filteredVideos = videos.filter(
    (video) => featuredVideo?.id.videoId !== video.id.videoId
  );

  return (
    <div className="pt-20 px-4 bg-black text-white min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center text-yellow-400">
        Bildad Ogweno's Gospel Songs
      </h2>

      {featuredVideo ? (
        <div className="mb-10">
          <div className="rounded overflow-hidden shadow-lg bg-gray-900">
            <iframe
              width="100%"
              height="400"
              src={`https://www.youtube.com/embed/${featuredVideo.id.videoId}`}
              title={featuredVideo.snippet.title}
              frameBorder="0"
              allowFullScreen
              className="w-full"
            ></iframe>
            <div className="p-4">
              <h3 className="text-xl font-semibold">{featuredVideo.snippet.title}</h3>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500">No videos found for Bildad Ogweno.</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredVideos.map((video) => (
          <div
            key={video.id.videoId}
            className="rounded overflow-hidden shadow-lg bg-gray-800 cursor-pointer hover:shadow-xl transition duration-300"
            onClick={() => handleSelectVideo(video)}
          >
            <iframe
              width="100%"
              height="215"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              title={video.snippet.title}
              frameBorder="0"
              allowFullScreen
              className="w-full"
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
