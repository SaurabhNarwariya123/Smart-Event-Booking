import express from "express";
import Booking from "../models/Booking.js";
import Event from "../models/Event.js";

const router = express.Router();
router.get("/", async (req, res) => {
  const bookings = await Booking.find();
  res.json(bookings);
});
router.get("/:id", async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) return res.status(404).json({ message: "Booking not found" });
    res.json(booking);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

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
    event.seats -= seats;
    await event.save();

    res.json({ message: "Booking successful", bookingId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});



export default router;
