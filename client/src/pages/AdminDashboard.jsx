import React, { useState, useEffect } from "react";
import axios from "axios";
const AdminDashboard = () => {

  const API = import.meta.env.VITE_API_URL;
  const [events, setEvents] = useState([]);
  const [form, setForm] = useState({
    title: "",
    location: "",
    date: "",
    seats: 0,
  });
  const [editingId, setEditingId] = useState(null);

  
  const fetchEvents = async () => {
    try {
      const res = await axios.get(`${API}/api/events`);
      setEvents(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleAdd = async () => {
    try {
      if (editingId) return handleUpdate();

      const res = await axios.post(`${API}/api/events`, form);
      setEvents([...events, res.data]);
      setForm({ title: "", location: "", date: "", seats: 0 });
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
      const res = await axios.put(`${API}/api/events/${editingId}`,form);
      setEvents(events.map((ev) => (ev._id === editingId ? res.data : ev)));
      setEditingId(null);
      setForm({ title: "", location: "", date: "", seats: 0 });
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
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>

      <div className="bg-white p-4 rounded shadow mb-6">
        <h2 className="text-xl font-semibold mb-3">
          {editingId ? "Edit Event" : "Add New Event"}
        </h2>
        <input name="title"  value={form.title}  onChange={handleChange}
          placeholder="Event Title"   className="w-full border rounded p-2 mb-2"/>

        <input name="location" value={form.location}
          onChange={handleChange} placeholder="Location"
          className="w-full border rounded p-2 mb-2"  />

        <input   name="date"  type="date"
          value={form.date} onChange={handleChange}
          className="w-full border rounded p-2 mb-2" />

        <input  name="seats"  type="number" value={form.seats}
          onChange={handleChange}  placeholder="Available Seats"
          className="w-full border rounded p-2 mb-2"/>
        <button  onClick={handleAdd}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition" >
          {editingId ? "Update Event" : "Add Event"}
        </button>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-3">Events List</h2>
        {events.length === 0 ? (
          <p className="text-gray-500">No events added yet.</p>
        ) : (
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2">Title</th>
                <th className="border p-2">Location</th>
                <th className="border p-2">Date</th>
                <th className="border p-2">Seats</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {events.map((ev) => (
                <tr key={ev._id}>
                  <td className="border p-2">{ev.title}</td>
                  <td className="border p-2">{ev.location}</td>
                  <td className="border p-2">{ev.date.split("T")[0]}</td>
                  <td className="border p-2">{ev.seats}</td>
                  <td className="border p-2 flex gap-2">
                    <button onClick={() => handleEdit(ev)}
                      className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600" >
                      Edit
                    </button>
                    <button onClick={() => handleDelete(ev._id)}
                      className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700" >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;

