import connectDB from "@/DB/MongoDB";
import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export const POST = async (req) => {
  await connectDB();
  const { email, password } = await req.json();
  try {
    if (!email || !password) {
      return NextResponse.json({
        status: 400,
        body: {
          message: "Email or Password is required",
        },
      });
    } else {
      const user = await User.findOne({ email });
      if (user) {
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return NextResponse.json(
            {
              message: "wrong password",
            },
            {
              status: 401,
            }
          );
        } else {
          const authToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
          cookies().set("authToken", authToken, {
            httpOnly: true,
            maxAge: 60 * 60 * 24 * 7,
          });
        }
      }
      return NextResponse.json(
        { message: "user login successfully" },
        { status: 200 }
      );
    }
  } catch (error) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }
};
