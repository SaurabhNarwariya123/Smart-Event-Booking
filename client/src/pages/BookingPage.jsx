// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { QRCode } from "react-qrcode-logo";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// const BookingPage = () => {

//   const API = import.meta.env.VITE_API_URL;
//   const { id } = useParams();
//   const [event, setEvent] = useState(null);
//   const [step, setStep] = useState(1);
//   const [form, setForm] = useState({ name: "", email: "", seats: 1 });
//   const [bookingId, setBookingId] = useState("");

//   useEffect(() => {
//     const fetchEvent = async () => {
//      const res = await axios.get(`${API}/api/events/${id}`);
//       setEvent(res.data);
//     };
//     fetchEvent();
//   }, [id]);

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleConfirm = async () => {
//     try {
//       const res = await axios.post(`${API}/api/bookings`, {
//         eventId: id,  name: form.name,  email: form.email,  seats: Number(form.seats), });
//         setBookingId(res.data.bookingId);
//        setStep(2); } 
//       catch (err) {
//       alert(err.response?.data?.message || "Booking failed");
//     }
//   };

//   const handleDownload = () => {
//     const canvas = document.querySelector("canvas");
//     if (!canvas) return;
//     const link = document.createElement("a");
//     link.download = "ticket.png";
//     link.href = canvas.toDataURL("image/png");
//     link.click();
//   };

//   if (!event) return <p>Loading...</p>;

//   return (


//      <div> 
//       <Navbar/>
//     <div className="container mx-auto px-4 py-6">
//       {step === 1 && (
//         <>
//           <h1 className="text-2xl font-bold mb-4">Book: {event.title}</h1>
//           <input  name="name"  value={form.name}
//             onChange={handleChange}  placeholder="Name"
//             className="border p-2 w-full mb-2" />
//           <input  name="email"  value={form.email}
//             onChange={handleChange}  placeholder="Email"
//             className="border p-2 w-full mb-2"/>
//           <input  type="number"  name="seats"
//             value={form.seats}  onChange={handleChange}
//             className="border p-2 w-full mb-2" />
//           <button  onClick={handleConfirm}
//             className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" >
//             Confirm Booking
//           </button>
//         </>
//       )}

//       {step === 2 && (
//         <div className="text-center mt-10">
//           <h2 className="text-2xl font-bold text-green-600 mb-4">
//             Booking Successful!
//           </h2>
//           <p>Your booking ID: <b>{bookingId}</b></p>
//           <div className="flex justify-center mb-4">
//             <QRCode value={bookingId} size={180} />
//           </div>
//           <button  onClick={handleDownload}
//             className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" >
//             Download Ticket
//           </button>
//         </div>
//       )}
//     </div>
//     <Footer/>
//     </div>
//   );
// };

// export default BookingPage;


//  mongodb ke liye 

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { QRCode } from "react-qrcode-logo";
// import { motion } from "framer-motion";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// const BookingPage = () => {
//   const API = import.meta.env.VITE_API_URL;
//   const { id } = useParams();
//   const [event, setEvent] = useState(null);
//   const [step, setStep] = useState(1);
//   const [form, setForm] = useState({ name: "", email: "", seats: 1 });
//   const [bookingId, setBookingId] = useState("");

//   useEffect(() => {
//     const fetchEvent = async () => {
//       try {
//         const res = await axios.get(`${API}/api/events/${id}`);
//         setEvent(res.data);
//       } catch (err) {
//         console.error("Error fetching event:", err);
//       }
//     };
//     fetchEvent();
//   }, [id]);

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const handleConfirm = async () => {
//     try {
//       const res = await axios.post(`${API}/api/bookings`, {
//         eventId: id,
//         name: form.name,
//         email: form.email,
//         seats: Number(form.seats),
//       });
//       setBookingId(res.data.bookingId);
//       setStep(2);
//     } catch (err) {
//       alert(err.response?.data?.message || "Booking failed");
//     }
//   };

//   const handleDownload = () => {
//     const canvas = document.querySelector("canvas");
//     if (!canvas) return;
//     const link = document.createElement("a");
//     link.download = "ticket.png";
//     link.href = canvas.toDataURL("image/png");
//     link.click();
//   };

//   if (!event)
//     return (
//       <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-200 via-blue-100 to-pink-100 animate-gradient">
//         <p className="text-lg font-medium animate-pulse text-gray-700">
//           Loading event details...
//         </p>
//       </div>
//     );

//   return (
//     <div className="relative min-h-screen flex flex-col">
//       {/* ✨ Background Pattern with Animation */}
//       <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-blue-50 to-pink-100 animate-gradient"></div>
//       <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,_#a78bfa_1px,_transparent_1px)] bg-[length:40px_40px]"></div>

//       <Navbar />

//       <motion.div
//         className="container mx-auto px-4 py-10 flex-grow relative z-10"
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         {step === 1 && (
//           <motion.div
//             className="bg-white shadow-2xl rounded-2xl p-6 max-w-lg mx-auto border border-gray-100 backdrop-blur-md"
//             initial={{ scale: 0.95, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//           >
//             <h1 className="text-3xl font-bold mb-4 text-center text-purple-700">
//               Book Your Spot 🎟️
//             </h1>
//             <p className="text-gray-600 text-center mb-6">
//               Event: <span className="font-semibold">{event.title}</span>
//             </p>

//             <motion.input
//               name="name"
//               value={form.name}
//               onChange={handleChange}
//               placeholder="Enter your name"
//               className="border p-3 w-full mb-3 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none bg-purple-50"
//               whileFocus={{ scale: 1.02 }}
//             />
//             <motion.input
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               placeholder="Enter your email"
//               className="border p-3 w-full mb-3 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none bg-purple-50"
//               whileFocus={{ scale: 1.02 }}
//             />
//             <motion.input
//               type="number"
//               name="seats"
//               value={form.seats}
//               onChange={handleChange}
//               className="border p-3 w-full mb-5 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none bg-purple-50"
//               whileFocus={{ scale: 1.02 }}
//             />

//             <motion.button
//               onClick={handleConfirm}
//               className="w-full bg-purple-600 text-white font-semibold py-3 rounded-xl shadow-lg hover:bg-purple-700 transition"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Confirm Booking
//             </motion.button>
//           </motion.div>
//         )}

//         {step === 2 && (
//           <motion.div
//             className="bg-white shadow-xl rounded-2xl p-6 max-w-lg mx-auto text-center border border-gray-100 backdrop-blur-md"
//             initial={{ scale: 0.9, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 0.5 }}
//           >
//             <h2 className="text-2xl font-bold text-green-600 mb-4">
//               ✅ Booking Successful!
//             </h2>
//             <p className="mb-4 text-gray-700">
//               Your booking ID:{" "}
//               <span className="font-bold text-gray-900">{bookingId}</span>
//             </p>
//             <div className="flex justify-center mb-4">
//               <QRCode value={bookingId} size={180} />
//             </div>
//             <motion.button
//               onClick={handleDownload}
//               className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 shadow-md"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Download Ticket
//             </motion.button>
//           </motion.div>
//         )}
//       </motion.div>

//       <Footer />
//     </div>
//   );
// };

// export default BookingPage;
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

  // ✅ Fetch event details
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

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // ✅ Confirm Booking
  const handleConfirm = async () => {
    // Frontend validation
    if (!form.name.trim() || !form.email.trim() || form.seats < 1) {
      alert("All fields are required");
      return;
    }

    try {
      const res = await axios.post(`${API}/api/bookings`, {
        event_id: id, // MySQL expects event_id
        name: form.name,
        email: form.email,
        seats: Number(form.seats),
      });
      setBookingId(res.data.booking_id);
      setStep(2);
    } catch (err) {
      console.log(err.response?.data);
      alert(err.response?.data?.message || "Booking failed");
    }
  };

  // ✅ Download QR Ticket
  const handleDownload = () => {
    const canvas = document.querySelector("canvas");
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = "ticket.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  if (!event)
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading event details...</p>
      </div>
    );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-purple-50 p-4">
      {step === 1 && (
        <div className="bg-white p-6 rounded-xl shadow max-w-md w-full">
          <h2 className="text-2xl font-bold mb-4">{event.title}</h2>
          <p>📍 {event.location}</p>
          <p>📅 {new Date(event.date).toLocaleDateString()}</p>
          <p>🎟 Seats available: {event.seats}</p>

          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="border p-2 w-full rounded mt-3"
          />
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="border p-2 w-full rounded mt-3"
          />
          <input
            type="number"
            name="seats"
            value={form.seats}
            onChange={handleChange}
            min={1}
            max={event.seats}
            className="border p-2 w-full rounded mt-3"
          />

          <button
            onClick={handleConfirm}
            className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Confirm Booking
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="bg-white p-6 rounded-xl shadow max-w-md w-full text-center">
          <h2 className="text-2xl font-bold mb-4 text-green-600">
            Booking Successful!
          </h2>
          <p>
            Booking ID: <strong>{bookingId}</strong>
          </p>
          <div className="my-4">
            <QRCode value={bookingId} size={180} />
          </div>
          <button
            onClick={handleDownload}
            className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
          >
            Download Ticket
          </button>
        </div>
      )}
    </div>
  );
};

export default BookingPage;


