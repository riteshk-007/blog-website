import connectDB from "@/DB/MongoDB";
import Comments from "@/models/Comment";
import Post from "@/models/Post";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  await connectDB();
  const { postId } = params;
  try {
    const post = await Post.findById(postId);
    return NextResponse.json(
      {
        post,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "failed to fetch Post!" },
      { status: 500 }
    );
  }
};

export const POST = async (req) => {
  await connectDB();
  try {
    const { content, postId, user } = await req.json();
    const comment = new Comments({ content, postId, user });
    await comment.save();
    return NextResponse.json(
      {
        message: "Comment created successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Comment not created",
      },
      { status: 400 }
    );
  }
};
