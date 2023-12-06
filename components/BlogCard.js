"use client";
import { Context } from "@/Context/Context";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

const BlogCard = ({ post }) => {
  const { user } = useContext(Context);
  return (
    <Link
      href={user ? `/blog/${post._id}` : "/login"}
      className="flex items-center justify-center flex-col overflow-hidden cursor-pointer"
    >
      <Image
        src={"/images/blog.jpg"}
        alt="Picture of the author"
        width={400}
        height={250}
        className="rounded-2xl shadow-md"
      />
      <div className="flex flex-col items-start justify-start p-2 w-full">
        <span className="font-bold capitalize truncate overflow-hidden w-full">
          {post?.title}
        </span>
        <div
          className="text-sm my-1  overflow-ellipsis overflow-hidden w-full h-20 text-gray-500"
          dangerouslySetInnerHTML={{ __html: post?.body }}
        />

        <span className="text-xs font-semibold my-1 text-gray-800">
          {post?.author}
          <br />
          <span className="text-xs">
            {new Date(post?.date).toLocaleDateString()}
          </span>
        </span>
      </div>
    </Link>
  );
};

export default BlogCard;
