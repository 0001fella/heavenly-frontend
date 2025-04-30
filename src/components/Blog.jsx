import React from "react";

const Blog = () => {
  const blogs = [
    {
      title: "The Power of Sound: How Music Influences Mood",
      date: "April 10, 2025",
      excerpt:
        "Discover how certain rhythms and melodies can lift your mood, enhance focus, and even boost creativity. Music is therapy, and we explore why...",
    },
    {
      title: "Studio Secrets: Crafting the Perfect Recording",
      date: "March 28, 2025",
      excerpt:
        "Ever wondered what goes into a clean studio track? We break down our process — from mic selection to mastering, all with that Heavenly Rhythms touch.",
    },
    {
      title: "Behind the Beat: Our Top Mixing Tips for Artists",
      date: "March 12, 2025",
      excerpt:
        "Mixing is where the magic happens. In this post, we share some of our best-kept secrets that bring your tracks to life.",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 text-yellow-400">
          Studio Blog
        </h2>
        <div className="space-y-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md transition duration-300 hover:shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-yellow-300 mb-2">
                {blog.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                {blog.date}
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                {blog.excerpt}
              </p>
              <button className="mt-4 text-yellow-500 hover:underline text-sm font-medium">
                Read More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
