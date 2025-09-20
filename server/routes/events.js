import express from "express";
import Event from "../models/Event.js";
import upload from "../config/Multer.js";   // ✅ multer
import cloudinary from "../config/cloudinary.js";

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







// mysql start 


//   mysql ke liye kya hia 


// import express from "express";
// import upload from "../config/multer.js";      // ✅ multer memory storage
// import cloudinary from "../config/cloudinary.js"; // ✅ Cloudinary instance
// import db from "../config/db.js"; // ✅ MySQL connection

// const router = express.Router();

// // ✅ GET all events (with filters)
// router.get("/", (req, res) => {
//   const { q, location, date } = req.query;
//   let sql = "SELECT * FROM events WHERE 1=1";
//   const params = [];

//   if (q) {
//     sql += " AND title LIKE ?";
//     params.push(`%${q}%`);
//   }
//   if (location) {
//     sql += " AND location = ?";
//     params.push(location);
//   }
//   if (date) {
//     sql += " AND date = ?";
//     params.push(date);
//   }

//   db.query(sql, params, (err, results) => {
//     if (err) {
//       console.error("Error fetching events:", err);
//       return res.status(500).json({ message: "Internal Server Error" });
//     }
//     res.json(results);
//   });
// });

// // ✅ GET event by ID
// router.get("/:id", (req, res) => {
//   const sql = "SELECT * FROM events WHERE id = ?";
//   db.query(sql, [req.params.id], (err, results) => {
//     if (err) return res.status(500).json({ message: "Internal Server Error" });
//     if (results.length === 0) return res.status(404).json({ message: "Event not found" });
//     res.json(results[0]);
//   });
// });

// // ✅ POST new event (upload image to Cloudinary)
// router.post("/", upload.single("image"), async (req, res) => {
//   try {
//     const { title, location, date, seats } = req.body;

//     if (!title || !location || !date || !seats || !req.file) {
//       return res.status(400).json({ message: "All fields including image are required" });
//     }

//     // Upload to Cloudinary
//     const result = await new Promise((resolve, reject) => {
//       const stream = cloudinary.uploader.upload_stream(
//         { folder: "events" },
//         (error, result) => {
//           if (error) reject(error);
//           else resolve(result);
//         }
//       );
//       stream.end(req.file.buffer);
//     });

//     const imageUrl = result.secure_url;

//     // Save event in DB
//     const sql = "INSERT INTO events (title, location, date, seats, image) VALUES (?, ?, ?, ?, ?)";
//     db.query(sql, [title, location, date, seats, imageUrl], (err, result) => {
//       if (err) {
//         console.error("Error creating event:", err);
//         return res.status(500).json({ message: "Internal Server Error" });
//       }
//       res.json({ message: "Event created successfully", id: result.insertId, image: imageUrl });
//     });
//   } catch (err) {
//     console.error("Error uploading image:", err);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// });

// // ✅ UPDATE event
// router.put("/:id", upload.single("image"), async (req, res) => {
//   try {
//     const { title, location, date, seats } = req.body;
//     let imageUrl = null;

//     if (req.file) {
//       const result = await new Promise((resolve, reject) => {
//         const stream = cloudinary.uploader.upload_stream(
//           { folder: "events" },
//           (error, result) => {
//             if (error) reject(error);
//             else resolve(result);
//           }
//         );
//         stream.end(req.file.buffer);
//       });
//       imageUrl = result.secure_url;
//     }

//     const sql = "UPDATE events SET title=?, location=?, date=?, seats=?, image=COALESCE(?, image) WHERE id=?";
//     db.query(sql, [title, location, date, seats, imageUrl, req.params.id], (err, result) => {
//       if (err) return res.status(500).json({ message: "Internal Server Error" });
//       res.json({ message: "Event updated successfully" });
//     });
//   } catch (err) {
//     console.error("Error updating event:", err);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// });

// // ✅ DELETE event
// router.delete("/:id", (req, res) => {
//   const sql = "DELETE FROM events WHERE id=?";
//   db.query(sql, [req.params.id], (err, result) => {
//     if (err) return res.status(500).json({ message: "Internal Server Error" });
//     res.json({ message: "Event deleted successfully" });
//   });
// });

// export default router;










