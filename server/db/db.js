
//  mongo db connection ke liye 

// import mongoose from "mongoose";
// import dotenv from "dotenv";

// dotenv.config();

// export const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log("MongoDB connected");
//   } catch (err) {
//     console.error("MongoDB connection error:", err);
//     process.exit(1);
//   }
// };



  //  mysql conneection ke liye 



import mysql from "mysql2";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",        // step 1 me jo user banaya
  password: "",        // step 1 me jo password set kiya
  database: "event_portal"
});

db.connect((err) => {
  if (err) {
    console.error("❌ MySQL Connection Failed:", err);
  } else {
    console.log("✅ Connected to MySQL");
  }
});

export default db; // ✅ Default export for ESM
