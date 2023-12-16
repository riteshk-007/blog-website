"use client";
import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import Skeleton from "./Skeleton";
import Pagination from "./Pagination";

const AllBlogs = ({ show }) => {
  const [allPosts, setAllPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(8);

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

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = allPosts.slice(indexOfFirstPost, indexOfLastPost);
  return (
    <div className="w-full mx-auto mt-2 flex-col">
      {loading ? (
        <div>
          <Skeleton />
        </div>
      ) : !allPosts.length ? (
        <h1 className="text-lg text-gray-500 w-full text-center font-bold">
          No Posts
        </h1>
      ) : (
        <div className="w-11/12 mx-auto mt-4 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2  gap-4">
          {!show
            ? currentPosts.map((post) => (
                <BlogCard key={post._id} post={post} />
              ))
            : allPosts
                .slice(-8)
                .map((post) => <BlogCard key={post._id} post={post} />)
                .reverse()}
        </div>
      )}
      {!show && (
        <div className="w-full mx-auto my-4 flex items-center justify-center">
          <Pagination
            totalPost={allPosts?.length}
            postPerPage={postPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      )}
    </div>
  );
};

export default AllBlogs;
