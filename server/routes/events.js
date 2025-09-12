import express from "express";
import Event from "../models/Event.js";
import upload from "../db/multer.js";      // ✅ multer
import cloudinary from "../db/cloudinary.js"; // ✅ cloudinary

const router = express.Router();

// ✅ GET all events with filters
router.get("/", async (req, res) => {
  try {
    const { q, location, date } = req.query;
    const filter = {};
    if (q) filter.title = { $regex: q, $options: "i" };
    if (location) filter.location = location;
    if (date) filter.date = date;

    const events = await Event.find(filter);
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ GET event by ID
router.get("/:id", async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    res.json(event);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ POST new event (with image upload to Cloudinary)
router.post("/", upload.single("image"), async (req, res) => {
  try {
    let imageUrl = "";

    if (req.file) {
      // Cloudinary upload
      const result = await new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: "events" },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        );
        stream.end(req.file.buffer);
      });

      imageUrl = result.secure_url;
    }

    const newEvent = new Event({
      title: req.body.title,
      location: req.body.location,
      date: req.body.date,
      seats: req.body.seats,
      image: imageUrl, // ✅ save cloudinary URL
    });

    await newEvent.save();
    res.json(newEvent);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ UPDATE event
router.put("/:id", async (req, res) => {
  try {
    const updated = await Event.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ DELETE event
router.delete("/:id", async (req, res) => {
  try {
    await Event.findByIdAndDelete(req.params.id);
    res.json({ message: "Event deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;













