import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/user.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";

// CONFIGURATIONS
const app = express();
dotenv.config();
app.use(express.json());

const PORT = process.env.PORT || 6001;
const HOST = process.env.HOST;
// Middlewares
app.use(cookieParser());
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

//MongoDB connection
const connect = async () => {
  try {
    await mongoose.connect(process.env.MongoDB);
    console.log("3. Backend Server is connected to MongoDB successfully!");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("Backend Server is disconnected from MongoDB !");
});

mongoose.connection.on("connected", () => {
  console.log(
    "2. Backend Server has successfuly initiated connection to MongoDB!"
  );
});

//Backend Server Connection Here
app.listen(PORT, HOST, () => {
  connect();
  console.log("1. App is successfully Connected to backend server!");
});
