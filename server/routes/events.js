import express from "express";
import Event from "../models/Event.js";

const router = express.Router();
router.get("/", async (req, res) => {
  const { q, location, date } = req.query;
  const filter = {};
  if (q) filter.title = { $regex: q, $options: "i" };
  if (location) filter.location = location;
  if (date) filter.date = date;

  const events = await Event.find(filter);
  res.json(events);
});

router.get("/:id", async (req, res) => {
  const event = await Event.findById(req.params.id);
  res.json(event);
});

router.post("/", async (req, res) => {
  const newEvent = new Event(req.body);
  await newEvent.save();
  res.json(newEvent);
});

router.put("/:id", async (req, res) => {
  const updated = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

router.delete("/:id", async (req, res) => {
  await Event.findByIdAndDelete(req.params.id);
  res.json({ message: "Event deleted" });
});

export default router;
