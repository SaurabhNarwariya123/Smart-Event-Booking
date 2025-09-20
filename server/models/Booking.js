import mongoose from "mongoose";
const bookingSchema = new mongoose.Schema({
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: "Event", required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  seats: { type: Number, required: true },
  bookingId: { type: String, required: true },
});

export default mongoose.model("Booking", bookingSchema);
