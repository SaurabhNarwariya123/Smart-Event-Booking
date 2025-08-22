import React from "react";
import { useNavigate } from "react-router-dom";

const EventCard = ({ event }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
      <p className="text-gray-600 mb-1">Location: {event.location}</p>
      <p className="text-gray-600 mb-1">Date: {event.date.split("T")[0]}</p>
      <p className="text-gray-600 mb-3">Seats: {event.seats}</p>
      <button
        onClick={() => navigate(`/events/${event._id}`)}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        View / Book
      </button>
    </div>
  );
};

export default EventCard;
