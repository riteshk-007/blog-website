import connectDB from "@/DB/MongoDB";
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
