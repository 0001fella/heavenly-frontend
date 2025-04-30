import React from 'react';

const videos = [
  {
    title: "Studio Session Snippet",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ", // replace with real video
  },
  {
    title: "Live Performance Teaser",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "Behind the Scenes",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

const VideoClips = () => {
  return (
    <section className="min-h-screen bg-black text-white pt-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">🎬 Featured Video Clips</h2>

        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl shadow-md p-4 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-lg font-semibold mb-4">{video.title}</h3>
              <div className="aspect-w-16 aspect-h-9 w-full overflow-hidden rounded-lg">
                <iframe
                  className="w-full h-full rounded-lg"
                  src={video.url}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoClips;
