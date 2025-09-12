// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import { connectDB } from "./db/db.js";
// import eventRoutes from "./routes/events.js";
// import bookingRoutes from "./routes/bookings.js";

// dotenv.config();
// const app = express();

// app.use(cors());
// app.use(express.json());

// app.use("/api/events", eventRoutes);
// app.use("/api/bookings", bookingRoutes);

// connectDB().then(() => {
//   app.listen(process.env.PORT, () =>
//     console.log(`Server running on port ${process.env.PORT}`)
//   );
// });



//  mysql ke liye

// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";
// import eventRoutes from "./routes/events.js";
// import bookingRoutes from "./routes/bookings.js";
// import path from "path";

// // ✅ Load .env
// dotenv.config();
// const app = express();

// app.use(cors());
// const PORT = process.env.PORT || 3000;

// // ✅ Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // ✅ Serve uploads folder statically
// app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

// // ✅ Routes
// app.use("/api/events", eventRoutes);
// app.use("/api/bookings", bookingRoutes);

// // ✅ Start server
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });

import cors from "cors";
import dotenv from "dotenv";
import eventRoutes from "./routes/events.js";
import bookingRoutes from "./routes/bookings.js";
import { db } from "./db/db.js"; // MySQL connection

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/events", eventRoutes);
app.use("/api/bookings", bookingRoutes);

const PORT = process.env.PORT || 3000;

// Optional: test MySQL connection before starting
db.execute("SELECT 1+1 AS result")
  .then(() => {
    console.log("✅ MySQL Connected!");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("❌ MySQL connection failed:", err);
  });






