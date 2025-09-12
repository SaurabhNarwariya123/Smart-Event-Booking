// import React, { useMemo, useState } from "react";
// import { useEvents } from "../context/EventContext";
// import EventCard from "../components/EventCard";
// import SearchFilter from "../components/SearchFilter";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// const EventListPage = () => {
  
//   const { events } = useEvents();
//   const [filters, setFilters] = useState({ q: "", location: "", date: "" });

//   const locations = useMemo(() => [...new Set(events.map((e) => e.location))], [events]);

//   const filtered = useMemo(
//     () =>
//       events.filter((e) => {
//         const byQ = !filters.q || e.title.toLowerCase().includes(filters.q.toLowerCase());
//         const byLoc = !filters.location || e.location === filters.location;
//         const byDate = !filters.date || e.date === filters.date;
//         return byQ && byLoc && byDate;
//       }),
//     [events, filters]
//   );

//   return (

//       <div>  <Navbar />
//           <div className="container mx-auto px-4 py-6">
//               <h1 className="text-3xl font-bold mb-4">Find Events</h1>
//       <        SearchFilter filters={filters} onChange={setFilters} locations={locations} />

//               <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                {filtered.length > 0 ? filtered.map((ev) => <EventCard key={ev._id} event={ev} />) : <p>No events found.</p>}
//                 </div>
//              </div>
//         <Footer/>
//      </div>   
//   );
// };

// export default EventListPage;

// import React, { useMemo, useState } from "react";
// import { useEvents } from "../context/EventContext";
// import EventCard from "../components/EventCard";
// import SearchFilter from "../components/SearchFilter";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { Link } from "react-router-dom";

// const EventListPage = () => {
//   const { events } = useEvents();
//   const [filters, setFilters] = useState({ q: "", location: "", date: "" });

//   const locations = useMemo(
//     () => [...new Set(events.map((e) => e.location))],
//     [events]
//   );

//   const filtered = useMemo(
//     () =>
//       events.filter((e) => {
//         const byQ =
//           !filters.q || e.title.toLowerCase().includes(filters.q.toLowerCase());
//         const byLoc = !filters.location || e.location === filters.location;
//         const byDate = !filters.date || e.date === filters.date;
//         return byQ && byLoc && byDate;
//       }),
//     [events, filters]
//   );

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-50">
//       <Navbar />

//       <div className="container mx-auto px-4 py-8">
//         <h1 className="text-3xl font-bold text-gray-900 mb-6">Find Events</h1>

//         {/* Filters Section */}
//         <SearchFilter filters={filters} onChange={setFilters} locations={locations} />

//         {/* Grid Section */}
//         <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {filtered.length > 0 ? (
//             filtered.map((ev) => (
//               <div
//                 key={ev._id}
//                 className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
//               >
//                 {/* Event Image */}
//                 <img
//                   src={ev.image}
//                   alt={ev.title}
//                   className="w-full h-70 object-cover"
//                 />

//                 {/* Event Details */}
//                 <div className="p-4">
//                   <h2 className="text-lg font-bold text-gray-800 truncate">
//                     {ev.title}
//                   </h2>

//                   <p className="text-sm text-gray-600 flex items-center gap-1">
//                     <span>📍</span> {ev.location}
//                   </p>

//                   <p className="text-sm text-gray-600 flex items-center gap-1">
//                     <span>📅</span> {ev.date}
//                   </p>

//                   <p className="text-sm text-gray-600 flex items-center gap-1">
//                     <span>🎟️</span> Seats: {ev.seats}
//                   </p>

//                   {event._id ? (
//                   <Link to={`/events/${event._id}`}>
//                         <button className="mt-4 w-full bg-blue-600 text-white font-medium py-2 rounded-xl hover:bg-blue-700 transition">
//                           View / Book
//                  </button>
//                   </Link>
//                   ) : (
//                      <p className="text-red-500 text-sm">⚠️ No event ID found</p>
//                  )}
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="text-gray-500 text-center col-span-full">
//               No events found.
//             </p>
//           )}
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default EventListPage;


//   mongo db ke liye

// import React, { useMemo, useState } from "react";
// import { useEvents } from "../context/EventContext";
// import SearchFilter from "../components/SearchFilter";
// // import Navbar from "../components/Navbar";
// // import Footer from "../components/Footer";
// import { Link } from "react-router-dom";

// const EventListPage = () => {
//   const { events } = useEvents();
//   const [filters, setFilters] = useState({ q: "", location: "", date: "" });

//   const getImageUrl = (img) => {
//     if (!img) return "https://via.placeholder.com/300x200?text=No+Image";
//     if (img.startsWith("http")) return img;
//     const base = import.meta.env.VITE_API_URL;
//     const cleanBase = base.endsWith("/") ? base.slice(0, -1) : base;
//     return `${cleanBase}/${img.startsWith("/") ? img.slice(1) : img}`;
//   };

//   const locations = useMemo(
//     () => [...new Set(events.map((e) => e.location))],
//     [events]
//   );

//   const filtered = useMemo(
//     () =>
//       events.filter((e) => {
//         const byQ =
//           !filters.q || e.title.toLowerCase().includes(filters.q.toLowerCase());
//         const byLoc = !filters.location || e.location === filters.location;
//         const byDate = !filters.date || e.date === filters.date;
//         return byQ && byLoc && byDate;
//       }),
//     [events, filters]
//   );

//   return (
//     <div className="min-h-screen flex flex-col bg-purple-400">
//       {/* <Navbar /> */}

//       <div className="container mx-auto px-4 py-8">
//         <h1 className="text-3xl font-bold text-gray-900 mb-6">Find Events</h1>

//         {/* Filters Section */}
//         {/* <SearchFilter filters={filters} onChange={setFilters} locations={locations} /> */}

//         {/* Grid Section */}
//         <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {filtered.length > 0 ? (
//             filtered.map((ev) => (
//               <div
//                 key={ev._id}
//                 className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-90"
//               >
//                 {/* Event Image */}
//                 <img
//                   src={getImageUrl(ev.image)}
//                   alt={ev.title}
//                   className="w-full h-70 object-cover"
//                 />

//                 {/* Event Details */}
//                 <div className="p-4">
//                   <h2 className="text-3xl font-bold text-gray-800  flex justify-center truncate">
//                     {ev.title}
//                   </h2>

//                   <p className="text-xl text-gray-600 flex  justify-center items-center gap-1">
//                     <span></span> {ev.location}
//                   </p>

//                   <p className="text-xl text-gray-600 flex  justify-center items-center gap-1">
//                     <span></span> {ev.date}
//                   </p>

//                   <p className="text-xl text-gray-600 flex justify-center  items-center gap-1">
//                     <span></span> Seats: {ev.seats}
//                   </p>

//                   {ev._id ? (
//                     <Link to={`/events/${ev._id}`}>
//                       <button className="mt-4 w-full bg-blue-600 text-white font-medium py-2 rounded-xl hover:bg-blue-700 transition">
//                         View / Book
//                       </button>
//                     </Link>
//                   ) : (
//                     <p className="text-red-500 text-sm">⚠️ No event ID found</p>
//                   )}
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="text-gray-500 text-center col-span-full">
//               No events found.
//             </p>
//           )}
//         </div>
//       </div>
// {/* 
//       <Footer /> */}
//     </div>
//   );
// };

// export default EventListPage;



//  my sql ke  liye
// import React, { useMemo, useState } from "react";
// import { useEvents } from "../context/EventContext";
// import { Link } from "react-router-dom";

// const EventListPage = () => {
//   const { events } = useEvents();
//   const [filters, setFilters] = useState({ q: "", location: "", date: "" });

//   const getImageUrl = (img) => {
//     if (!img) return "https://via.placeholder.com/300x200?text=No+Image";
//     if (img.startsWith("http")) return img;
//     const base = import.meta.env.VITE_API_URL;
//     const cleanBase = base.endsWith("/") ? base.slice(0, -1) : base;
//     return `${cleanBase}/${img.startsWith("/") ? img.slice(1) : img}`;
//   };

//   const locations = useMemo(
//     () => [...new Set(events.map((e) => e.location))],
//     [events]
//   );

//   const filtered = useMemo(
//     () =>
//       events.filter((e) => {
//         const byQ =
//           !filters.q || e.title.toLowerCase().includes(filters.q.toLowerCase());
//         const byLoc = !filters.location || e.location === filters.location;
//         const byDate =
//           !filters.date ||
//           new Date(e.date).toISOString().split("T")[0] === filters.date;
//         return byQ && byLoc && byDate;
//       }),
//     [events, filters]
//   );

//   return (
//     <div className="min-h-screen flex flex-col bg-purple-400">
//       <div className="container mx-auto px-4 py-8">
//         <h1 className="text-3xl font-bold text-gray-900 mb-6">Find Events</h1>

//         {/* Grid Section */}
//         <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {filtered.length > 0 ? (
//             filtered.map((ev) => (
//               <div
//                 key={ev.id}
//                 className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-90"
//               >
//                 <img
//                   src={getImageUrl(ev.image)}
//                   alt={ev.title}
//                   className="w-full h-70 object-cover"
//                 />

//                 <div className="p-4">
//                   <h2 className="text-2xl font-bold text-gray-800 text-center truncate">
//                     {ev.title}
//                   </h2>

//                   <p className="text-lg text-gray-600 text-center mt-1">
//                     📍 {ev.location}
//                   </p>

//                   <p className="text-lg text-gray-600 text-center mt-1">
//                     📅 {new Date(ev.date).toLocaleDateString()}
//                   </p>

//                   <p className="text-lg text-gray-600 text-center mt-1">
//                     🎟️ Seats: {ev.seats}
//                   </p>

//                   <Link to={`/events/${ev.id}`}>
//                     <button className="mt-4 w-full bg-blue-600 text-white font-medium py-2 rounded-xl hover:bg-blue-700 transition">
//                       View / Book
//                     </button>
//                   </Link>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="text-gray-500 text-center col-span-full">
//               No events found.
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventListPage;




import React, { useMemo, useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const EventListPage = () => {
  const API = import.meta.env.VITE_API_URL;
  const [events, setEvents] = useState([]);
  const [filters, setFilters] = useState({ q: "", location: "", date: "" });

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get(`${API}/api/events`);
        setEvents(res.data);
      } catch (err) {
        console.error("Error fetching events:", err);
      }
    };
    fetchEvents();
  }, []);

  const locations = useMemo(() => [...new Set(events.map((e) => e.location))], [events]);

  const filtered = useMemo(() => 
    events.filter((e) => {
      const byQ = !filters.q || e.title.toLowerCase().includes(filters.q.toLowerCase());
      const byLoc = !filters.location || e.location === filters.location;
      const byDate = !filters.date || e.date.startsWith(filters.date);
      return byQ && byLoc && byDate;
    }), [events, filters]
  );

  return (
    <div className="min-h-screen flex flex-col bg-purple-50">
      {/* Navbar if needed */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Find Events</h1>

        {/* Filters */}
        <div className="flex gap-2 mb-6 justify-center">
          <input
            type="text"
            placeholder="Search title..."
            value={filters.q}
            onChange={(e) => setFilters({...filters, q: e.target.value})}
            className="border px-3 py-1 rounded"
          />
          <select
            value={filters.location}
            onChange={(e) => setFilters({...filters, location: e.target.value})}
            className="border px-3 py-1 rounded"
          >
            <option value="">All Locations</option>
            {locations.map((loc) => <option key={loc} value={loc}>{loc}</option>)}
          </select>
          <input
            type="date"
            value={filters.date}
            onChange={(e) => setFilters({...filters, date: e.target.value})}
            className="border px-3 py-1 rounded"
          />
        </div>

        {/* Event Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filtered.length > 0 ? filtered.map(ev => (
            <div key={ev.id} className="bg-white shadow rounded-xl overflow-hidden">
              <img src={ev.image} alt={ev.title} className="w-full h-48 object-cover"/>
              <div className="p-4">
                <h2 className="text-xl font-bold">{ev.title}</h2>
                <p>📍 {ev.location}</p>
                <p>📅 {new Date(ev.date).toLocaleDateString()}</p>
                <p>🎟 Seats: {ev.seats}</p>
                <Link to={`/booking/${ev.id}`}>
                  <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                    View / Book
                  </button>
                </Link>
              </div>
            </div>
          )) : (
            <p className="text-center col-span-full text-gray-500">No events found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventListPage;



