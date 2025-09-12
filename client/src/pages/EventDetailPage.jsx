// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";

// const EventDetailPage = () => {
//   const API = import.meta.env.VITE_API_URL;
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [event, setEvent] = useState(null);

//   useEffect(() => {
//     const fetchEvent = async () => {
//       try {
//        const res = await axios.get(`${API}/api/events/${id}`);
//         setEvent(res.data);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchEvent();
//   }, [id]);

//   if (!event) return <p className="text-center mt-10">Loading...</p>;

//   return (
//     <div className="container mx-auto px-4 py-6">
//       <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
//       <p className="mb-2">Location: {event.location}</p>
//       <p className="mb-2">Date: {event.date.split("T")[0]}</p>
//       <p className="mb-2">Available Seats: {event.seats}</p>
//       <button
//         onClick={() => navigate(`/booking/${event._id}`)}
//         className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//       >
//         Book Now
//       </button>
//     </div>
//   );
// };

// export default EventDetailPage;





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
        console.error("Error fetching event:", err);
      }
    };
    fetchEvent();
  }, [id]);

  if (!event) return <p className="text-center mt-10 text-gray-500">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
        {/* Banner Image */}
        {event.image ? (
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-80 object-cover"
          />
        ) : (
          <div className="w-full h-80 bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">No Image Available</span>
          </div>
        )}

        {/* Content */}
        <div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column: Event Info */}
          <div className="md:col-span-2 space-y-4">
            <button
              onClick={() => navigate(-1)}
              className="text-blue-600 hover:underline text-sm mb-4"
            >
              ← Back to Events
            </button>

            <h1 className="text-3xl font-bold text-gray-900">{event.title}</h1>

            <p className="text-gray-600 text-lg flex items-center gap-2">
              📍 {event.location}
            </p>

            <p className="text-gray-600 text-lg flex items-center gap-2">
              📅 {event.date?.split("T")[0]}
            </p>

            <p className="text-gray-600 text-lg flex items-center gap-2">
              🎟 Available Seats: {event.seats}
            </p>

            {event.description && (
              <p className="text-gray-700 leading-relaxed">{event.description}</p>
            )}
          </div>

          {/* Right Column: Booking Section */}
          <div className="bg-gray-100 rounded-xl p-6 shadow-inner flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Book Your Seat
              </h2>

              <p className="text-gray-600 mb-2">
                <span className="font-semibold">Date:</span>{" "}
                {event.date?.split("T")[0]}
              </p>

              <p className="text-gray-600 mb-4">
                <span className="font-semibold">Seats Available:</span>{" "}
                {event.seats}
              </p>
            </div>

            <button
              onClick={() => navigate(`/booking/${event._id}`)}
              className="w-full bg-blue-600 text-white font-medium py-3 rounded-xl hover:bg-blue-700 transition-all duration-300"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailPage;




