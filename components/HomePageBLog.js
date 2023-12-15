"use client";
import { PostContext } from "@/Context/PostApi";
import AllBlogs from "./AllBlogs";
import Skeleton from "./Skeleton";
import { useContext, useState } from "react";

const HomePageBLog = () => {
  const { loading } = useContext(PostContext);
  const [show] = useState(true);
  return (
    <div className="w-full mx-auto flex items-center justify-center">
      {loading ? <Skeleton /> : <AllBlogs show={show} />}
    </div>
  );
};

export default HomePageBLog;
