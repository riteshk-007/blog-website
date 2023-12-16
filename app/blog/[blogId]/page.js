"use client";
import Comments from "@/components/Comments";
import SinglePageSkeleton from "@/components/SinglePageSkeleton";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const BlogPage = () => {
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const { blogId } = params;

  useEffect(() => {
    const GetSingleBlogDetails = async () => {
      setLoading(true);
      const res = await fetch(`/api/post/${blogId}`);
      const data = await res.json();
      setLoading(false);
      if (data) {
        setBlog(data);
      } else {
        console.log("error");
      }
    };
    GetSingleBlogDetails();
  }, [blogId]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {loading ? (
        <SinglePageSkeleton />
      ) : (
        <div className="lg:w-11/12 flex items-center justify-center flex-col mx-auto ">
          <div className="w-11/12 items-center justify-center mx-auto md:h-[700px] overflow-hidden ">
            {blog?.post?.image ? (
              <Image
                src={blog?.post?.image}
                alt="post image"
                width={1780}
                height={500}
                style={{
                  objectFit: "contain",
                  height: "100%",
                  width: "100%",
                  objectPosition: "center",
                  borderRadius: "10px",
                }}
              />
            ) : (
              <div className="flex items-center justify-center h-96 mb-4 bg-gray-300 rounded dark:bg-gray-700 ">
                <svg
                  className="w-10 h-15 text-gray-200 dark:text-gray-600"
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
          <span className="w-full flex items-center lg:items-start lg:justify-start justify-center my-5">
            <h1 className="font-bold capitalize md:text-4xl text-xl px-1">
              {blog?.post?.title}
            </h1>
          </span>
          <p className="w-full text-end text-xs px-5 my-1">
            <span className="font-bold">Author:</span> {blog?.post?.author}
          </p>
          <p className="w-full text-end text-xs px-5 my-1">
            <span className="font-bold">Date:</span>{" "}
            {new Date(blog?.post?.date).toLocaleDateString()}
          </p>
          <span className="w-full flex items-center lg:items-start lg:justify-start justify-center text-wrap">
            <div
              className="px-5 capitalize description  "
              dangerouslySetInnerHTML={{ __html: blog?.post?.body }}
            />
          </span>

          <div className="w-full">
            <Comments blogId={blogId} />
          </div>
        </div>
      )}
    </>
  );
};

export default BlogPage;
