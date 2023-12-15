"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { Context } from "./Context";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { app } from "./firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

export const PostContext = createContext();
const storage = getStorage(app);
const PostContextProvider = ({ children }) => {
  const router = useRouter();
  const { user } = useContext(Context);
  const [value, setValue] = useState("");
  const [posts, setPosts] = useState("");
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    const upload = () => {
      setUploading(true);
      const name = new Date().getTime() + "-" + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
            setUploading(false);
          });
        }
      );
    };

    file && upload();
  }, [file]);

  // create post
  const createPost = async () => {
    setLoading(true);
    try {
      if (media === "")
        return toast.error("Please upload an image", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      if (uploading)
        return toast.error("Please wait for the image upload to finish", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
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
          image: media,
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
        file,
        setFile,
        media,
        setMedia,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export default PostContextProvider;
