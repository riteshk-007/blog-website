"use client";
import { Context } from "@/Context/Context";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const Comments = ({ blogId }) => {
  const [comments, setComments] = useState([]);
  const [list, setList] = useState([]);
  const { user } = useContext(Context);

  const GetComments = async () => {
    const res = await fetch(`/api/comment`, {
      method: "POST",
      body: JSON.stringify({ postId: blogId }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (data) {
      setList(data);
    } else {
      console.log("error");
    }
  };

  const commentHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/post/${blogId}`, {
        method: "POST",
        body: JSON.stringify({
          content: comments,
          postId: blogId,
          user: user.name,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (data) {
        toast.success("Comment Added Successfully", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        setComments("");
      } else {
        toast.error("Something went wrong", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
    GetComments();
  };
  useEffect(() => {
    GetComments();
  }, []);
  return (
    <div className="mt-5">
      <section className="bg-white  py-8 lg:py-16 antialiased">
        <div className="max-w-2xl mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg lg:text-2xl font-bold text-gray-900 e">
              Blog Comments
            </h2>
          </div>
          <form className="mb-6" onSubmit={commentHandler}>
            <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 ">
              <label htmlFor="comment" className="sr-only">
                Your comment
              </label>
              <textarea
                id="comment"
                rows="6"
                className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none "
                placeholder="Write a comment..."
                required
                value={comments}
                onChange={(e) => setComments(e.target.value)}
              ></textarea>
            </div>
            <button
              type="submit"
              className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-gray-700 rounded-lg focus:ring-4 focus:ring-gray-200 hover:bg-gray-800"
            >
              Post comment
            </button>
          </form>
          {list?.comments?.length ? (
            <div>
              {list?.comments
                ?.map((comment, index) => (
                  <article
                    key={index}
                    className="p-6 mb-3 text-base bg-white border-t border-gray-200 border"
                  >
                    <footer className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                        <p className="inline-flex items-center mr-3 text-sm text-gray-600 font-semibold">
                          {comment?.user}
                        </p>
                        <p className="text-sm text-gray-600 ">
                          <time pubdate="true" dateTime={comment.date}>
                            {new Date(comment?.date).toLocaleDateString()}
                          </time>
                        </p>
                      </div>
                      <button
                        className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50"
                        type="button"
                      >
                        <svg
                          className="w-4 h-4"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 16 3"
                        >
                          <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                        </svg>
                      </button>
                    </footer>
                    <p className="text-gray-800 font-semibold">
                      {comment?.content}
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <button
                        type="button"
                        className="flex items-center text-sm text-gray-500 hover:underline font-medium"
                      >
                        <svg
                          className="mr-1.5 w-3.5 h-3.5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 18"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                          />
                        </svg>
                        Reply
                      </button>
                    </div>
                  </article>
                ))
                .reverse()}
            </div>
          ) : (
            <div>
              <h2 className="text-lg lg:text-2xl font-bold text-gray-500">
                No Comments
              </h2>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Comments;
