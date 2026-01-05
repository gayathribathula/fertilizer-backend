import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import apiRoutes from "./routes/api.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Health check route (Render needs this)
app.get("/", (req, res) => {
  res.send("Fertilizer Backend is running 🚀");
});

// MongoDB connection (ENV variable)
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB error:", err));

// API routes
app.use("/api", apiRoutes);

// IMPORTANT: Render PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
