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
      <div className="w-11/12 items-center justify-center mx-auto  ">
        {post?.image ? (
          <Image
            src={post?.image}
            alt="post image"
            width={500}
            height={128}
            className="rounded-md"
          />
        ) : (
          <div className="flex items-center justify-center h-32 lg:h-60 mb-4 bg-gray-300 rounded  ">
            <svg
              className="w-10 h-10 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 20"
            >
              <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
              <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
            </svg>
          </div>
        )}
      </div>
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
