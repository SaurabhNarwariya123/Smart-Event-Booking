import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import eventRoutes from "./routes/events.js";
import bookingRoutes from "./routes/bookings.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/events", eventRoutes);
app.use("/api/bookings", bookingRoutes);

connectDB().then(() => {
  app.listen(process.env.PORT, () =>
    console.log(`Server running on port ${process.env.PORT}`)
  );
});



//  mysql ke liye

// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";
// import eventRoutes from "./routes/events.js";
// import bookingRoutes from "./routes/bookings.js";
// import path from "path";
// import db from "../config/db.js"

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




// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import eventRoutes from "./routes/events.js";
// import bookingRoutes from "./routes/bookings.js";
// import db from "./config/db.js"; // ✅ correct path

// dotenv.config();

// const app = express();

// app.use(cors());
// app.use(express.json());

// app.use("/api/events", eventRoutes);
// app.use("/api/bookings", bookingRoutes);

// const PORT = process.env.PORT || 3000;

// // ✅ Test MySQL Connection
// try {
//   const [rows] = await db.execute("SELECT 1+1 AS result");
//   console.log("✅ MySQL Connected!");
//   app.listen(PORT, () =>
//     console.log(`🚀 Server running on http://localhost:${PORT}`)
//   );
// } catch (err) {
//   console.error("❌ MySQL connection failed:", err);
// }






