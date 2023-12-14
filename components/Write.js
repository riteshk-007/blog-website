"use client";

import { PostContext } from "@/Context/PostApi";
import { useContext, useRef } from "react";
import JoditEditor from "jodit-react";

const Write = () => {
  const { createPost, value, setValue, posts, setPosts } =
    useContext(PostContext);
  const editor = useRef(null);

  const handleSubmit = () => {
    createPost();
  };

  return (
    <div className="flex items-center relative p-5 flex-col">
      <button
        onClick={handleSubmit}
        className="absolute lg:right-4 right-2 lg:top-4 top-2 px-4 py-1 bg-green-800 hover:bg-green-900 rounded-md shadow-md font-semibold text-white"
      >
        publish
      </button>
      <div className="my-10 lg:w-4/5 mx-auto">
        <input
          type="text"
          placeholder="Title..."
          className="w-full px-2 py-1 border-none outline-none font-semibold text-4xl"
          value={posts}
          onChange={(e) => setPosts(e.target.value)}
          required
        />
      </div>
      <div className="w-full lg:w-4/5 mx-auto my-2">
        {typeof document !== "undefined" && (
          <JoditEditor
            ref={editor}
            value={value}
            onChange={(value) => setValue(value)}
          />
        )}
      </div>
    </div>
  );
};
export default Write;
