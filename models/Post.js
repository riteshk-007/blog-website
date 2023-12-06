import mongoose from "mongoose";

const PostSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please add a title"],
    trim: true,
  },
  body: {
    type: String,
    required: [true, "Please add a paragraph"],
    trim: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  author: {
    type: String,
    required: true,
  },
  comments: {
    type: [
      {
        body: {
          type: String,
          required: true,
          trim: true,
        },
        author: {
          type: String,
          required: true,
          trim: true,
        },
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    default: [],
  },
});

const Post = mongoose.models.Post || mongoose.model("Post", PostSchema);
export default Post;
