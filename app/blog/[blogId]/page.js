"use client";
import { Context } from "@/Context/Context";
import Comments from "@/components/Comments";
import SinglePageSkeleton from "@/components/SinglePageSkeleton";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";

const BlogPage = () => {
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]); // [ { body: "comment", author: "author", date: "date" } ]
  const params = useParams();
  const { blogId } = params;
  const { user } = useContext(Context);

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

  const commentHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/post/${blogId}`, {
        method: "POST",
        body: JSON.stringify({ content: comments, postId: blogId, user: user }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (data) {
        console.log(data);
        setComments("");
      } else {
        console.log("error");
      }
    } catch (error) {}
  };
  return (
    <>
      {loading ? (
        <SinglePageSkeleton />
      ) : (
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
              className="p-2 capitalize description"
              dangerouslySetInnerHTML={{ __html: blog?.post?.body }}
            />
          </span>

          <div className="w-full">
            <Comments
              comments={comments}
              setComments={setComments}
              commentHandler={commentHandler}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default BlogPage;
