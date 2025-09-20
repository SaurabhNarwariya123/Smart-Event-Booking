import express from "express";
import Booking from "../models/Booking.js";
import Event from "../models/Event.js";

const router = express.Router();

// ✅ Get all bookings (with event details)
router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find().populate("eventId", "title location date");
    res.json(bookings);
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// ✅ Get booking by ID
router.get("/:id", async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id).populate("eventId", "title location date");
    if (!booking) return res.status(404).json({ message: "Booking not found" });
    res.json(booking);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// ✅ Create new booking
router.post("/", async (req, res) => {
  try {
    const { eventId, name, email, seats } = req.body;

    if (!eventId || !name || !email || !seats) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const event = await Event.findById(eventId);
    if (!event) return res.status(404).json({ message: "Event not found" });

    if (event.seats < seats) {
      return res.status(400).json({ message: "Not enough seats available" });
    }

    const bookingId = "BOOK" + Date.now();
    const booking = new Booking({ eventId, name, email, seats, bookingId });
    await booking.save();

    // ✅ Update available seats
    event.seats -= seats;
    await event.save();

    res.json({ message: "Booking successful", bookingId });
  } catch (err) {
    console.error("Error creating booking:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;



//  mysql ke yaha se start hai 


// import express from "express";
// import db from "../config/db.js"; // ✅ MySQL connection

// const router = express.Router();

// // ✅ Get all bookings (with event details)
// router.get("/", (req, res) => {
//   const sql = `
//     SELECT 
//       b.id, b.event_id, b.name, b.email, b.seats, b.booking_id, b.created_at,
//       e.title AS eventTitle, e.location AS eventLocation, e.date AS eventDate
//     FROM bookings b
//     JOIN events e ON b.event_id = e.id
//     ORDER BY b.created_at DESC
//   `;
//   db.query(sql, (err, results) => {
//     if (err) {
//       console.error("❌ Error fetching bookings:", err);
//       return res.status(500).json({ message: "Database error while fetching bookings" });
//     }
//     return res.json(results);
//   });
// });

// // ✅ Get booking by ID
// router.get("/:id", (req, res) => {
//   const sql = `
//     SELECT 
//       b.id, b.event_id, b.name, b.email, b.seats, b.booking_id, b.created_at,
//       e.title AS eventTitle, e.location AS eventLocation, e.date AS eventDate
//     FROM bookings b
//     JOIN events e ON b.event_id = e.id
//     WHERE b.id = ?
//   `;
//   db.query(sql, [req.params.id], (err, results) => {
//     if (err) {
//       console.error("❌ Error fetching booking:", err);
//       return res.status(500).json({ message: "Database error while fetching booking" });
//     }
//     if (results.length === 0) {
//       return res.status(404).json({ message: "Booking not found" });
//     }
//     return res.json(results[0]);
//   });
// });

// // ✅ Create new booking
// router.post("/", (req, res) => {
//   try {
//     const { event_id, name, email, seats } = req.body;

//     if (!event_id || !name || !email || !seats) {
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     // Step 1: Check if event exists
//     db.query("SELECT * FROM events WHERE id=?", [event_id], (err, eventRows) => {
//       if (err) {
//         console.error("❌ Error checking event:", err);
//         return res.status(500).json({ message: "Database error while checking event" });
//       }
//       if (eventRows.length === 0) {
//         return res.status(404).json({ message: "Event not found" });
//       }

//       const event = eventRows[0];

//       // Step 2: Check available seats
//       if (event.seats < seats) {
//         return res.status(400).json({ message: "Not enough seats available" });
//       }

//       const booking_id = "BOOK" + Date.now();

//       // Step 3: Insert booking (✅ Correct column name: event_id)
//       const insertSql =
//         "INSERT INTO bookings (event_id, name, email, seats, booking_id) VALUES (?, ?, ?, ?, ?)";
//       db.query(insertSql, [event_id, name, email, seats, booking_id], (err, result) => {
//         if (err) {
//           console.error("❌ Error inserting booking:", err);
//           return res.status(500).json({ message: "Database error while saving booking" });
//         }

//         // Step 4: Update available seats
//         const updateSql = "UPDATE events SET seats = seats - ? WHERE id=?";
//         db.query(updateSql, [seats, event_id], (err2) => {
//           if (err2) {
//             console.error("❌ Error updating seats:", err2);
//             return res.status(500).json({ message: "Database error while updating seats" });
//           }

//           return res.json({ message: "Booking successful", booking_id });
//         });
//       });
//     });
//   } catch (error) {
//     console.error("❌ Unexpected error:", error);
//     return res.status(500).json({ message: "Internal Server Error" });
//   }
// });

// export default router;
