"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const BlogPage = () => {
  const [blog, setBlog] = useState([]);
  const params = useParams();
  const { blogId } = params;

  useEffect(() => {
    const GetSingleBlogDetails = async () => {
      const res = await fetch(`/api/post/${blogId}`);
      const data = await res.json();
      if (data) {
        setBlog(data);
      } else {
        console.log("error");
      }
    };
    GetSingleBlogDetails();
  }, [blogId]);
  return (
    <>
      <div className="lg:w-11/12 flex items-center justify-center flex-col mx-auto ">
        <span className="lg:h-[700px] overflow-hidden rounded-lg">
          <Image
            src={"/images/blog.jpg"}
            width={1780}
            height={500}
            alt="page"
          />
        </span>
        <span className="w-full flex items-center lg:items-start lg:justify-start justify-center my-5">
          <h1 className="font-bold capitalize md:text-4xl text-xl">
            {blog?.post?.title}
          </h1>
        </span>
        <span className="w-full flex items-center lg:items-start lg:justify-start justify-center text-wrap">
          <div
            className="p-2 capitalize description"
            dangerouslySetInnerHTML={{ __html: blog?.post?.body }}
          />
        </span>
      </div>
    </>
  );
};

export default BlogPage;
