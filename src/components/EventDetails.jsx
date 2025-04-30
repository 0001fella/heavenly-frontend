import React from 'react';
import { useParams } from 'react-router-dom';

function EventDetails() {
  const { eventName } = useParams(); // Get the event name from URL

  // Event data (mock data for now)
  const eventData = {
    "gospel-night-live": {
      name: "Gospel Night Live",
      date: "April 25, 2025",
      time: "7:00 PM",
      description: "Join us for an unforgettable night of worship and fellowship.",
      details: "Expect live performances, powerful worship, and a spirit-filled atmosphere.",
    },
    "studio-recording-session": {
      name: "Studio Recording Session",
      date: "May 5, 2025",
      time: "10:00 AM - 2:00 PM",
      description: "Come watch live recording sessions with local gospel artists.",
      details: "Observe the entire recording process, from vocals to mixing. A unique opportunity!",
    },
  };

  const event = eventData[eventName]; // Get the event based on the URL param

  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-yellow-400 text-center mb-12">{event.name}</h2>
        <p className="text-yellow-300 font-bold text-xl">{event.date} at {event.time}</p>
        <p className="text-gray-300 mb-6">{event.description}</p>
        <p className="text-gray-400">{event.details}</p>
      </div>
    </section>
  );
}

export default EventDetails;
