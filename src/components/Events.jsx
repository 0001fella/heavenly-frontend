import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const events = [
  {
    title: "Gospel Night Live",
    date: "May 10, 2025",
    location: "KCA University Auditorium",
    description: "A powerful night of worship with top gospel artists and choirs.",
  },
  {
    title: "Studio Live Recording",
    date: "May 18, 2025",
    location: "Heavenly Rhythms Studio",
    description: "Join us for an intimate live session recording and testimonies.",
  },
  {
    title: "Praise Concert",
    date: "June 1, 2025",
    location: "KICC Grounds, Nairobi",
    description: "A family-friendly praise fest with live bands, food, and ministry.",
  },
];

function Events() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [comments, setComments] = useState({}); // to hold comments for each event
  const [commentInput, setCommentInput] = useState("");

  // Filter upcoming events
  const upcomingEvents = events.filter((event) => new Date(event.date) > new Date());

  const handleCommentChange = (e) => {
    setCommentInput(e.target.value);
  };

  const handleCommentSubmit = (eventTitle) => {
    if (commentInput.trim()) {
      setComments((prev) => ({
        ...prev,
        [eventTitle]: [...(prev[eventTitle] || []), commentInput],
      }));
      setCommentInput(""); // reset input after submission
    }
  };

  const handleKeyPress = (eventTitle, e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // prevent the default action of new line in textarea
      handleCommentSubmit(eventTitle);
    }
  };

  return (
    <section className="py-20 px-6 bg-black text-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-yellow-400 text-center mb-12">
          Upcoming Events
        </h2>

        {/* Search bar with calendar toggle */}
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search events..."
            className="w-full p-3 rounded-md text-black"
            onFocus={() => setShowCalendar(true)}
            onBlur={() => setShowCalendar(false)}
          />
          {showCalendar && (
            <div className="absolute top-12 left-0 z-10">
              <Calendar
                className="react-calendar"
                tileClassName="react-calendar-tile"
                next2Label={null}
                prev2Label={null}
                style={{
                  background: "#1e1e1e",
                  color: "#fff",
                  borderRadius: "10px",
                  padding: "5px",
                }}
              />
            </div>
          )}
        </div>

        {/* Event cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {upcomingEvents.map((event, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-10 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300"
            >
              <h3 className="text-2xl font-bold text-blue-200 mb-2">{event.title}</h3>
              <p className="text-yellow-300 font-semibold mb-1">{event.date}</p>
              <p className="text-sm text-gray-300 mb-2 italic">{event.location}</p>
              <p className="text-gray-200 text-sm">{event.description}</p>

              {/* Comment Section */}
              <div className="mt-4">
                <h4 className="text-lg text-yellow-300 mb-2">Leave a Comment:</h4>
                <textarea
                  className="w-full p-2 rounded-md text-black bg-gray-800"
                  rows="3"
                  placeholder="Your comment..."
                  value={commentInput}
                  onChange={handleCommentChange}
                  onKeyDown={(e) => handleKeyPress(event.title, e)}
                ></textarea>
                <button
                  onClick={() => handleCommentSubmit(event.title)}
                  className="mt-2 bg-yellow-500 text-black font-semibold py-1 px-4 rounded"
                >
                  Post Comment
                </button>
              </div>

              {/* Displaying Comments */}
              <div className="mt-4">
                {comments[event.title] && comments[event.title].map((comment, idx) => (
                  <p key={idx} className="text-sm text-gray-300 mb-2">- {comment}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-sm mt-12">
          Want your event featured here?{" "}
          <span className="text-yellow-300 underline cursor-pointer">Contact us</span> to get listed.
        </p>
      </div>
    </section>
  );
}

export default Events;
