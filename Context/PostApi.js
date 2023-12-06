"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { Context } from "./Context";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export const PostContext = createContext();

const PostContextProvider = ({ children }) => {
  const router = useRouter();
  const { user } = useContext(Context);
  const [value, setValue] = useState("");
  const [posts, setPosts] = useState("");
  const [loading, setLoading] = useState(false);

  // create post
  const createPost = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: user.token,
        },
        body: JSON.stringify({
          title: posts,
          body: value,
          userId: user._id,
          author: user.name,
        }),
      });
      const data = await res.json();
      setLoading(false);
      if (data.message === "Post created successfully") {
        setPosts("");
        setValue("");
        router.push("/blog");
        toast.success("Post created successfully", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      } else {
        toast.error("Post not created", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Post not created", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  };
  return (
    <PostContext.Provider
      value={{
        createPost,
        value,
        setValue,
        posts,
        setPosts,
        loading,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export default PostContextProvider;
