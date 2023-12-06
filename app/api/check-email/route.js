import connectDB from "@/DB/MongoDB";
import User from "@/models/User";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  await connectDB();
  const { email } = await req.json();
  try {
    const checkUserExists = await User.findOne({ email: email });
    if (checkUserExists) {
      return NextResponse.json(
        {
          message: "User already exists",
        },
        { status: 400 }
      );
    } else {
      return NextResponse.json(
        {
          message: "User not found",
        },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: "User not found",
      },
      { status: 400 }
    );
  }
};
