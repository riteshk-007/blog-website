"use client";
import React, { useContext } from "react";
import BlogCard from "./BlogCard";
import Skeleton from "./Skeleton";
import { PostContext } from "@/Context/PostApi";

const AllBlogs = () => {
  const { allPosts, loading } = useContext(PostContext);

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5  p-3 w-11/12 mx-auto mt-2">
      {loading ? (
        <div className="w-full mx-auto flex items-center justify-center">
          <Skeleton />
        </div>
      ) : !allPosts.length ? (
        <h1 className="text-lg  text-gray-500 w-full">No Posts</h1>
      ) : (
        allPosts.map((post) => <BlogCard key={post._id} post={post} />)
      )}
    </div>
  );
};

export default AllBlogs;
