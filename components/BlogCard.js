import Image from "next/image";

const BlogCard = () => {
  return (
    <div className="flex items-center justify-center flex-col overflow-hidden cursor-pointer">
      <Image
        src={"/images/banner3.jpg"}
        alt="Picture of the author"
        width={400}
        height={250}
        className="rounded-2xl shadow-md"
      />
      <div className="flex flex-col items-start justify-start p-2 w-full">
        <span className="font-bold capitalize truncate overflow-hidden w-full">
          create a blog webiste with nextjs
        </span>
        <span className="text-sm my-1  overflow-ellipsis overflow-hidden w-full h-20 text-gray-500">
          this is a blog website created with nextjs and tailwindcss. this is a
          blog website created with nextjs and tailwindcss this is a blog
          website created with nextjs and tailwindcss this is a blog website
          created with nextjs and tailwindcss this is a blog website created
          with nextjs and tailwindcss. this is a blog website created with
          nextjs and tailwindcss.
        </span>
        <span className="text-xs font-semibold my-1 text-gray-800">
          Ritesh
          <span className="text-xs"> 12/12/2021</span>
        </span>
      </div>
    </div>
  );
};

export default BlogCard;
