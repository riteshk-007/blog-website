"use client";

import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
const Write = () => {
  const [value, setValue] = useState("");
  return (
    <div className="flex items-center relative p-5 flex-col">
      <button className="absolute lg:right-4 right-2 lg:top-4 top-2   px-4 py-1 bg-green-800 hover:bg-green-900 rounded-md shadow-md font-semibold text-white">
        publish
      </button>
      <div className="my-10  lg:w-4/5 mx-auto">
        <input
          type="text"
          placeholder="Title..."
          className="w-full px-2 py-1  border-none outline-none font-semibold text-4xl"
        />
      </div>
      <div className="w-full lg:w-4/5 mx-auto my-2">
        <ReactQuill
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
        />
      </div>
    </div>
  );
};

export default Write;
