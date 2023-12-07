import Comments from "@/models/Comment";
import { NextResponse } from "next/server";
import connectDB from "@/DB/MongoDB";

export const POST = async (req) => {
  await connectDB();
  try {
    const { postId } = await req.json();
    const comments = await Comments.find({ postId });
    return NextResponse.json({ comments }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to fetch comments!" },
      { status: 500 }
    );
  }
};
