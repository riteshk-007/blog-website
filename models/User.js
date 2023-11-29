import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
      trim: true,
    },
  },
  {
    timestamps: true,
    timeseries: true,
  }
);
const User = mongoose.models.User || mongoose.model("User", UserSchema);
export default User;
