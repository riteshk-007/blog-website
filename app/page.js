import HomePageBLog from "@/components/HomePageBLog";
import Slider from "@/components/Slider";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col">
      <Slider />
      <span className="w-11/12 text-left mx-auto  mt-4 lg:mt-8 flex justify-between items-center">
        <h1
          className="text-lg md:text-xl font-bold"
          style={{ fontFamily: "monospace" }}
        >
          Recent blog posts
        </h1>
        <Link
          href="/blog"
          className="text-sm md:text-md font-bold text-blue-500"
        >
          View all posts
        </Link>
      </span>
      <HomePageBLog />
    </div>
  );
}
