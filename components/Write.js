"use client";
import { PostContext } from "@/Context/PostApi";
import Image from "next/image";
import { useContext, useRef } from "react";

let JoditEditor;
if (typeof window !== "undefined") {
  JoditEditor = require("jodit-react").default;
}

const Write = () => {
  const { createPost, value, setValue, posts, setPosts, media, setFile } =
    useContext(PostContext);

  const editor = useRef(null);

  const handleSubmit = async () => {
    createPost();
    setFile(null);
  };
  return (
    <div className="flex items-center relative p-5 flex-col">
      <button
        onClick={handleSubmit}
        className="absolute lg:right-4 right-2 lg:top-4 top-2 px-4 py-1 bg-green-800 hover:bg-green-900 rounded-md shadow-md font-semibold text-white"
      >
        publish
      </button>
      <div className="w-full overflow-hidden mt-10 mx-auto">
        <span className="rounded-lg  w-full">
          <input
            type="file"
            id="img"
            onChange={(e) => setFile(e.target.files[0])}
            className="hidden"
            accept="
          image/png, image/jpeg, image/jpg, image/gif   
            "
          />
          <label htmlFor="img" className="w-full ">
            {media.length === 0 ? (
              <>
                <div className="lg:w-11/12 items-center justify-center mx-auto ">
                  <div className="flex items-center justify-center h-40 mb-4 bg-gray-300 rounded dark:bg-gray-700 ">
                    <svg
                      className="w-10 h-10 text-gray-200 dark:text-gray-600"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 20"
                    >
                      <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                      <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                    </svg>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="lg:w-11/12 items-center justify-center mx-auto ">
                  <div className="flex items-center justify-center  mb-4 bg-gray-300 rounded dark:bg-gray-700 ">
                    <Image
                      src={media}
                      alt="img"
                      style={{ objectFit: "contain" }}
                      loading="lazy"
                      width={1780}
                      height={200}
                    />
                  </div>
                </div>
              </>
            )}
          </label>
        </span>
      </div>
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
        {JoditEditor && (
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
