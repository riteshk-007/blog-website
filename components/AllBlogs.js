import BlogCard from "./BlogCard";

const AllBlogs = () => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5  p-3 w-11/12 mx-auto mt-2">
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
  );
};

export default AllBlogs;
