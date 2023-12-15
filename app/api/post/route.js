import connectDB from "@/DB/MongoDB";
import Post from "@/models/Post";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  await connectDB();
  const { title, body, userId, author, image } = await req.json();
  try {
    const post = new Post({ title, body, userId, author, image });
    await post.save();
    return NextResponse.json(
      {
        message: "Post created successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Post not created",
      },
      { status: 400 }
    );
  }
};

export const GET = async (req) => {
  await connectDB();
  try {
    const posts = await Post.find({});
    return NextResponse.json(
      {
        posts,
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
