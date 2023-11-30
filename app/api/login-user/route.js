import connectDB from "@/DB/MongoDB";
import User from "@/models/User";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  await connectDB();
  const authToken = cookies().get("authToken")?.value;

  try {
    const data = jwt.verify(authToken, process.env.JWT_SECRET);
    const id = data.id;
    const detail = await User.findById(id).select("-password");
    if (!detail) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    return NextResponse.json({ detail }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      {
        error: "Invalid or expired token",
      },
      { status: 500 }
    );
  }
};
