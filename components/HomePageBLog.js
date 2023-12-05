"use client";
import { PostContext } from "@/Context/PostApi";
import AllBlogs from "./AllBlogs";
import Skeleton from "./Skeleton";
import { useContext } from "react";

const HomePageBLog = () => {
  const { loading } = useContext(PostContext);
  return (
    <div className="w-full mx-auto flex items-center justify-center">
      {loading ? <Skeleton /> : <AllBlogs />}
    </div>
  );
};

export default HomePageBLog;
