import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
    trim: true,
  },
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
    required: true,
  },
  user: {
    type: String,
    ref: "User",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Comments =
  mongoose.models.Comments || mongoose.model("Comments", CommentSchema);
export default Comments;
