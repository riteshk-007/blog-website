import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.connectDB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.log("MongoDB connection error");
  }
};

export default connectDB;
