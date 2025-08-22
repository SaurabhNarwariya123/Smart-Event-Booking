import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EventDetailPage = () => {
  const API = import.meta.env.VITE_API_URL;
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
       const res = await axios.get(`${API}/api/events/${id}`);
        setEvent(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchEvent();
  }, [id]);

  if (!event) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
      <p className="mb-2">Location: {event.location}</p>
      <p className="mb-2">Date: {event.date.split("T")[0]}</p>
      <p className="mb-2">Available Seats: {event.seats}</p>
      <button
        onClick={() => navigate(`/booking/${event._id}`)}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Book Now
      </button>
    </div>
  );
};

export default EventDetailPage;
