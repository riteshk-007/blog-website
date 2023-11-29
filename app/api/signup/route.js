import connectDB from "@/DB/MongoDB";
import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export const POST = async (req) => {
  const { name, email, password } = await req.json();
  await connectDB();
  try {
    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "Please fill all the fields" },
        { status: 404 }
      );
    } else {
      const isNewPassword = await bcrypt.hashSync(password, 10);
      const user = await User.create({ name, email, password: isNewPassword });
      if (user) {
        return NextResponse.json(
          { message: "User created successfully" },
          { status: 200 }
        );
      } else {
        // Throw an error if the user already exists
        throw new Error("User already exists");
      }
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { msg: "User already exists", error },
      { status: 400 }
    );
  }
};
