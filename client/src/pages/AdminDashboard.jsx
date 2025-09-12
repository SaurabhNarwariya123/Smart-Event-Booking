  //  working in mongoDB Use 
import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AdminDashboard = () => {
  const API = import.meta.env.VITE_API_URL;
  const [events, setEvents] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [form, setForm] = useState({
    title: "",
    location: "",
    date: "",
    seats: 0,
  });
  const [image, setImage] = useState(null);
  const [editingId, setEditingId] = useState(null);

  const fetchEvents = async () => {
    try {
      const res = await axios.get(`${API}/api/events`);
      setEvents(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchBookings = async () => {
    try {
      const res = await axios.get(`${API}/api/bookings`);
      setBookings(res.data);
    } catch (err) {
      console.error("Error fetching bookings:", err);
    }
  };

  useEffect(() => {
    fetchEvents();
    fetchBookings();
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleImageChange = (e) => setImage(e.target.files[0]);

  const handleAdd = async () => {
    try {
      if (editingId) return handleUpdate();

      const formData = new FormData();
      formData.append("title", form.title);
      formData.append("location", form.location);
      formData.append("date", form.date);
      formData.append("seats", form.seats);
      if (image) formData.append("image", image);

      const res = await axios.post(`${API}/api/events`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setEvents([...events, res.data]);
      setForm({ title: "", location: "", date: "", seats: 0 });
      setImage(null);
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (event) => {
    setForm({
      title: event.title,
      location: event.location,
      date: event.date.split("T")[0],
      seats: event.seats,
    });
    setEditingId(event._id);
  };

  const handleUpdate = async () => {
    try {
      const res = await axios.put(`${API}/api/events/${editingId}`, form);
      setEvents(events.map((ev) => (ev._id === editingId ? res.data : ev)));
      setEditingId(null);
      setForm({ title: "", location: "", date: "", seats: 0 });
      setImage(null);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API}/api/events/${id}`);
      setEvents(events.filter((ev) => ev._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-200 min-h-screen">
      <Navbar />

      <motion.div
        className="container mx-auto px-4 py-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800 text-center">
          Admin Dashboard
        </h1>

        {/* Form Section */}
        <motion.div
          className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg mb-6"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <h2 className="text-lg sm:text-xl font-semibold mb-3 text-gray-700">
            {editingId ? "✏️ Edit Event" : "➕ Add New Event"}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Event Title"
              className="border rounded-xl p-2 focus:ring focus:ring-blue-300 outline-none"
            />
            <input
              name="location"
              value={form.location}
              onChange={handleChange}
              placeholder="Location"
              className="border rounded-xl p-2 focus:ring focus:ring-blue-300 outline-none"
            />
            <input
              name="date"
              type="date"
              value={form.date}
              onChange={handleChange}
              className="border rounded-xl p-2 focus:ring focus:ring-blue-300 outline-none"
            />
            <input
              name="seats"
              type="number"
              value={form.seats}
              onChange={handleChange}
              placeholder="Available Seats"
              className="border rounded-xl p-2 focus:ring focus:ring-blue-300 outline-none"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="border rounded-xl p-2 focus:ring focus:ring-blue-300 outline-none sm:col-span-2"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAdd}
            className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 w-full sm:w-auto"
          >
            {editingId ? "Update Event" : "Add Event"}
          </motion.button>
        </motion.div>

        {/* Events Table */}
        <div className="overflow-x-auto">
          <h2 className="text-lg sm:text-xl font-semibold mb-3">📅 Events List</h2>
          {events.length === 0 ? (
            <p className="text-gray-500 text-center">No events added yet.</p>
          ) : (
            <motion.table
              layout
              className="min-w-full border-collapse border border-gray-300 shadow rounded-xl"
            >
              <thead className="bg-gray-100 text-xs sm:text-base">
                <tr>
                  <th className="border p-2">Title</th>
                  <th className="border p-2">Location</th>
                  <th className="border p-2">Date</th>
                  <th className="border p-2">Seats</th>
                  <th className="border p-2">Image</th>
                  <th className="border p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {events.map((ev) => (
                  <motion.tr
                    key={ev._id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="hover:bg-gray-50 transition text-xs sm:text-sm"
                  >
                    <td className="border p-2">{ev.title}</td>
                    <td className="border p-2">{ev.location}</td>
                    <td className="border p-2">{ev.date.split("T")[0]}</td>
                    <td className="border p-2">{ev.seats}</td>
                    <td className="border p-2">
                      {ev.image && (
                        <img
                          src={ev.image}
                          alt={ev.title}
                          className="w-16 h-12 sm:w-20 sm:h-16 object-cover rounded"
                        />
                      )}
                    </td>
                    <td className="border p-2 flex flex-col sm:flex-row gap-2">
                      <button
                        onClick={() => handleEdit(ev)}
                        className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(ev._id)}
                        className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
                      >
                        Delete
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </motion.table>
          )}
        </div>

        {/* Bookings Table */}
        <div className="overflow-x-auto mt-6">
          <h2 className="text-lg sm:text-xl font-semibold mb-3">🎟 Bookings List</h2>
          {bookings.length === 0 ? (
            <p className="text-gray-500 text-center">No bookings yet.</p>
          ) : (
            <table className="min-w-full border-collapse border border-gray-300 shadow rounded-xl">
              <thead className="bg-gray-100 text-xs sm:text-base">
                <tr>
                  <th className="border p-2">Booking ID</th>
                  <th className="border p-2">Customer</th>
                  <th className="border p-2">Email</th>
                  <th className="border p-2">Event</th>
                  <th className="border p-2">Seats</th>
                  <th className="border p-2">Date</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((b) => (
                  <motion.tr
                    key={b._id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="hover:bg-gray-50 transition text-xs sm:text-sm"
                  >
                    <td className="border p-2">{b.bookingId}</td>
                    <td className="border p-2">{b.name}</td>
                    <td className="border p-2">{b.email}</td>
                    <td className="border p-2">{b.eventId?.title || "Event Deleted"}</td>
                    <td className="border p-2">{b.seats}</td>
                    <td className="border p-2">
                      {b.eventId?.date
                        ? new Date(b.eventId.date).toLocaleDateString()
                        : "-"}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default AdminDashboard;



  // trial page 
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { motion } from "framer-motion";
// import { Pencil, Trash2 } from "lucide-react";

// const AdminDashboard = () => {
//   const API = import.meta.env.VITE_API_URL;
//   const [events, setEvents] = useState([]);
//   const [bookings, setBookings] = useState([]);

//   // Fetch Events + Bookings
//   const fetchData = async () => {
//     try {
//       const [eventsRes, bookingsRes] = await Promise.all([
//         axios.get(`${API}/api/events`),
//         axios.get(`${API}/api/bookings`),
//       ]);
//       setEvents(eventsRes.data);
//       setBookings(bookingsRes.data);
//     } catch (err) {
//       console.error("Error fetching data", err);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   // Delete Event
//   const handleDelete = async (id) => {
//     if (!confirm("Are you sure you want to delete this event?")) return;
//     try {
//       await axios.delete(`${API}/api/events/${id}`);
//       setEvents(events.filter((e) => e._id !== id));
//     } catch (err) {
//       alert("Failed to delete event");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-6">
//       <div className="max-w-6xl mx-auto">
//         <motion.h1
//           className="text-3xl font-bold text-center mb-8 text-gray-800"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//         >
//           🎛 Admin Dashboard
//         </motion.h1>

//         {/* 🎟 Events Table */}
//         <div className="overflow-x-auto bg-white shadow-lg rounded-2xl p-4">
//           <h2 className="text-xl font-semibold mb-3">📅 Events List</h2>
//           {events.length === 0 ? (
//             <p className="text-gray-500 text-center">No events found.</p>
//           ) : (
//             <motion.table
//               layout
//               className="min-w-full border-collapse border border-gray-300 rounded-xl overflow-hidden"
//             >
//               <thead className="bg-gray-100">
//                 <tr>
//                   <th className="border p-2">Title</th>
//                   <th className="border p-2">Date</th>
//                   <th className="border p-2">Seats</th>
//                   <th className="border p-2">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {events.map((e) => (
//                   <motion.tr
//                     key={e._id}
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.3 }}
//                     className="hover:bg-gray-50 transition"
//                   >
//                     <td className="border p-2">{e.title}</td>
//                     <td className="border p-2">
//                       {new Date(e.date).toLocaleDateString()}
//                     </td>
//                     <td className="border p-2">{e.seats}</td>
//                     <td className="border p-2 flex gap-2 justify-center">
//                       <button
//                         className="p-2 rounded-xl bg-yellow-100 hover:bg-yellow-200 transition shadow-sm"
//                         onClick={() => alert("Edit functionality here")}
//                       >
//                         <Pencil size={16} className="text-yellow-700" />
//                       </button>
//                       <button
//                         className="p-2 rounded-xl bg-red-100 hover:bg-red-200 transition shadow-sm"
//                         onClick={() => handleDelete(e._id)}
//                       >
//                         <Trash2 size={16} className="text-red-700" />
//                       </button>
//                     </td>
//                   </motion.tr>
//                 ))}
//               </tbody>
//             </motion.table>
//           )}
//         </div>

//         {/* 🧾 Bookings Table */}
//         <div className="overflow-x-auto bg-white shadow-lg rounded-2xl p-4 mt-10">
//           <h2 className="text-xl font-semibold mb-3">🧾 Bookings List</h2>
//           {bookings.length === 0 ? (
//             <p className="text-gray-500 text-center">No bookings found.</p>
//           ) : (
//             <motion.table
//               layout
//               className="min-w-full border-collapse border border-gray-300 rounded-xl overflow-hidden"
//             >
//               <thead className="bg-gray-100 text-sm">
//                 <tr>
//                   <th className="border p-2">Booking ID</th>
//                   <th className="border p-2">Event</th>
//                   <th className="border p-2">Name</th>
//                   <th className="border p-2">Email</th>
//                   <th className="border p-2">Seats</th>
//                   <th className="border p-2">Date</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {bookings.map((b) => (
//                   <motion.tr
//                     key={b._id}
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.3 }}
//                     className="hover:bg-gray-50 transition"
//                   >
//                     <td className="border p-2 font-mono">{b.bookingId}</td>
//                     <td className="border p-2">{b.eventId?.title || "Event Deleted"}</td>
//                     <td className="border p-2">{b.name}</td>
//                     <td className="border p-2">{b.email}</td>
//                     <td className="border p-2">{b.seats}</td>
//                     <td className="border p-2">
//                       {new Date(b.createdAt).toLocaleDateString()}
//                     </td>
//                   </motion.tr>
//                 ))}
//               </tbody>
//             </motion.table>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
























