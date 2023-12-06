"use client";
import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import Skeleton from "./Skeleton";

const AllBlogs = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/post", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        setLoading(false);
        if (data.posts) {
          setAllPosts(data.posts);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    getPosts();
  }, []);
  return (
    <div className="w-full mx-auto mt-2">
      {loading ? (
        <div>
          <Skeleton />
        </div>
      ) : !allPosts.length ? (
        <h1 className="text-lg text-gray-500 w-full text-center font-bold">
          No Posts
        </h1>
      ) : (
        <div className="w-11/12 mx-auto mt-4 grid grid-cols-4  gap-4">
          {allPosts
            .map((post) => <BlogCard key={post._id} post={post} />)
            .reverse()}
        </div>
      )}
    </div>
  );
};

export default AllBlogs;
