import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MusicPlayer() {
  const [videos, setVideos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterTag, setFilterTag] = useState('All');
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);

  // Environment variable handling for both Vite and CRA
  const youtubeAPIKey = import.meta.env.VITE_YOUTUBE_API_KEY || process.env.REACT_APP_YOUTUBE_API_KEY;

  const tags = ['All', 'Worship', 'Praise', 'Choir', 'Live', 'Instrumental'];

  useEffect(() => {
    if (!youtubeAPIKey) {
      console.error('Missing YouTube API Key!');
      setLoading(false);
      return;
    }
    fetchInitialVideos();
  }, [youtubeAPIKey]); // Added dependency

  const fetchInitialVideos = async () => {
    setLoading(true);
    const artists = ['Bildad Ogweno', 'Joshua Mbere', 'Elija Jlogo', 'Gospel Worship Music'];
    let allVideos = [];

    try {
      for (const artist of artists) {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
          params: {
            part: 'snippet',
            maxResults: 5,
            q: `${artist} latest gospel`,
            type: 'video',
            order: 'date',
            key: youtubeAPIKey,
          },
        });

        const fetchedVideos = response.data.items.map((item) => ({
          title: item.snippet.title,
          videoId: item.id.videoId,
          channel: item.snippet.channelTitle,
          thumbnail: item.snippet.thumbnails.high.url,
        }));

        allVideos = [...allVideos, ...fetchedVideos];
      }

      setVideos(allVideos);
    } catch (error) {
      console.error('Error fetching videos:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchVideos = async (query) => {
    setLoading(true);
    try {
      const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          part: 'snippet',
          maxResults: 15,
          q: query,
          type: 'video',
          order: 'relevance',
          key: youtubeAPIKey,
        },
      });

      const fetchedVideos = response.data.items.map((item) => ({
        title: item.snippet.title,
        videoId: item.id.videoId,
        channel: item.snippet.channelTitle,
        thumbnail: item.snippet.thumbnails.high.url,
      }));

      setVideos(fetchedVideos);
    } catch (error) {
      console.error('Error fetching videos:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== '') {
      fetchVideos(`${searchQuery} gospel`);
      setFilterTag('All');
    }
  };

  const handleTagClick = (tag) => {
    setFilterTag(tag);
    if (tag === 'All') {
      fetchInitialVideos();
    } else {
      fetchVideos(`${tag} gospel music`);
    }
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const playVideo = (index) => {
    setCurrentVideoIndex(index);
    setIsPlaying(true);
  };

  return (
    <section className={`${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'} min-h-screen py-10 px-6`} id="music">
      {/* Navbar */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-3">
          <img src="/Logo.png" alt="Logo" className="w-12 h-12" />
          <h1 className="text-2xl font-bold">Heavenly Rhythms</h1>
        </div>
        <button
          onClick={toggleTheme}
          className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold shadow-lg hover:bg-yellow-300 transition"
        >
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>

      {/* Search Bar */}
      <form onSubmit={handleSearch} className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search for a gospel song..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full md:w-2/3 p-3 rounded-l-lg border border-gray-300 focus:outline-none text-black"
        />
        <button
          type="submit"
          className="bg-yellow-400 text-black px-6 rounded-r-lg font-semibold hover:bg-yellow-300 transition"
        >
          Search
        </button>
      </form>

      {/* Tags */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {tags.map((tag, index) => (
          <button
            key={index}
            onClick={() => handleTagClick(tag)}
            className={`px-4 py-2 rounded-full ${
              filterTag === tag
                ? 'bg-yellow-400 text-black'
                : 'bg-gray-300 text-black hover:bg-yellow-200'
            } transition`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Videos */}
      {loading ? (
        <div className="text-center text-lg font-semibold">Loading videos...</div>
      ) : videos.length === 0 ? (
        <div className="text-center text-lg font-semibold">No videos available. Please try searching something else!</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className={`cursor-pointer rounded-xl overflow-hidden shadow-lg hover:scale-105 transform transition ${
                index === currentVideoIndex ? 'border-4 border-yellow-400' : ''
              }`}
              onClick={() => playVideo(index)}
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-48 object-cover"
              />
              <div className={`p-4 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
                <h3 className="text-lg font-bold">{video.title}</h3>
                <p className="text-sm">{video.channel}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Player */}
      {!loading && videos.length > 0 && (
        <div className="mt-10 flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-4">{videos[currentVideoIndex].title}</h2>
          <iframe
            width="100%"
            height="400"
            src={`https://www.youtube.com/embed/${videos[currentVideoIndex].videoId}?autoplay=${isPlaying ? 1 : 0}&mute=0`}
            title={videos[currentVideoIndex].title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-xl shadow-lg"
          ></iframe>
          <button
            onClick={togglePlayPause}
            className="mt-4 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-300 transition"
          >
            {isPlaying ? 'Pause' : 'Play'}
          </button>
        </div>
      )}
    </section>
  );
}

export default MusicPlayer;