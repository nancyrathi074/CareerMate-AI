import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// Load .env FIRST
dotenv.config();

import connectDB from "./config/db.js";
import resumeRoutes from "./routes/resumeRoutes.js";

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/resume", resumeRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "CareerMate AI Backend Running 🚀",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});