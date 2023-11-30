"use client";
import Image from "next/image";
import { FaBars } from "react-icons/fa6";
import Mobile from "./Mobile";
import { useContext, useState } from "react";
import Link from "next/link";
import { Context } from "@/Context/Context";

const Header = () => {
  const [show, setShow] = useState(false);
  const { user } = useContext(Context);
  return (
    <div className="w-full h-20 p-1  flex items-center justify-between relative">
      <div className="w-1/3 flex items-center justify-start px-2">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={50} height={50} />
        </Link>
      </div>
      <div className="w-1/3 hidden md:flex items-center justify-center">
        <ul>
          <li className="inline-block px-2 text-base font-semibold">
            <Link href="/">Home</Link>
          </li>
          <li className="inline-block px-2 text-base font-semibold">
            <Link href="/about">Blog</Link>
          </li>
          <li className="inline-block px-2 text-base font-semibold">
            <Link href="/contact">About</Link>
          </li>
        </ul>
      </div>
      <div className="w-1/3 hidden md:flex items-center justify-end px-2">
        {user ? (
          <ul>
            <li className="inline-block bg-black text-white p-2 rounded-md shadow text-sm font-semibold">
              <Link href="/login">Logout</Link>
            </li>
          </ul>
        ) : (
          <ul>
            <li className="inline-block px-2 text-sm font-semibold mx-2">
              <Link href="/login">Login</Link>
            </li>
            <li className="inline-block bg-black text-white p-2 rounded-md shadow text-sm font-semibold">
              <Link href="/register">Sign up</Link>
            </li>
          </ul>
        )}
      </div>
      <div className="w-1/3 md:hidden flex items-center justify-end px-2 z-50">
        <span
          className="text-white bg-gray-800 p-1 rounded-sm shadow cursor-pointer"
          onClick={() => setShow(!show)}
        >
          <FaBars fontSize={17} />
        </span>
        {show ? (
          <span className="fixed w-full h-full bg-gradient-to-t from-gray-700 via-gray-900 to-black left-0 top-0 transition-transform ">
            <Mobile setShow={setShow} />
          </span>
        ) : (
          <span className="fixed w-full h-full bg-gradient-to-t from-gray-700 via-gray-900 to-black left-0 top-0 transition-transform -translate-y-full sm:translate-y-0 ">
            <Mobile setShow={setShow} />
          </span>
        )}
      </div>
    </div>
  );
};

export default Header;
