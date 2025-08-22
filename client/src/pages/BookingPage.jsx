import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { QRCode } from "react-qrcode-logo";

const BookingPage = () => {

  const API = import.meta.env.VITE_API_URL;
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name: "", email: "", seats: 1 });
  const [bookingId, setBookingId] = useState("");

  useEffect(() => {
    const fetchEvent = async () => {
     const res = await axios.get(`${API}/api/events/${id}`);
      setEvent(res.data);
    };
    fetchEvent();
  }, [id]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleConfirm = async () => {
    try {
      const res = await axios.post(`${API}/api/bookings`, {
        eventId: id,  name: form.name,  email: form.email,  seats: Number(form.seats), });
        setBookingId(res.data.bookingId);
       setStep(2); } 
      catch (err) {
      alert(err.response?.data?.message || "Booking failed");
    }
  };

  const handleDownload = () => {
    const canvas = document.querySelector("canvas");
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = "ticket.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  if (!event) return <p>Loading...</p>;

  return (
    <div className="container mx-auto px-4 py-6">
      {step === 1 && (
        <>
          <h1 className="text-2xl font-bold mb-4">Book: {event.title}</h1>
          <input  name="name"  value={form.name}
            onChange={handleChange}  placeholder="Name"
            className="border p-2 w-full mb-2" />
          <input  name="email"  value={form.email}
            onChange={handleChange}  placeholder="Email"
            className="border p-2 w-full mb-2"/>
          <input  type="number"  name="seats"
            value={form.seats}  onChange={handleChange}
            className="border p-2 w-full mb-2" />
          <button  onClick={handleConfirm}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" >
            Confirm Booking
          </button>
        </>
      )}

      {step === 2 && (
        <div className="text-center mt-10">
          <h2 className="text-2xl font-bold text-green-600 mb-4">
            Booking Successful!
          </h2>
          <p>Your booking ID: <b>{bookingId}</b></p>
          <div className="flex justify-center mb-4">
            <QRCode value={bookingId} size={180} />
          </div>
          <button  onClick={handleDownload}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" >
            Download Ticket
          </button>
        </div>
      )}
    </div>
  );
};

export default BookingPage;
