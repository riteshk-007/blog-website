import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.connectDB);
    console.log("MongoDB connected");
  } catch (error) {
    console.log("MongoDB connection error");
  }
};

export default connectDB;
