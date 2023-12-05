import HomePageBLog from "@/components/HomePageBLog";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col">
      <Slider />
      <span className="w-11/12 text-left mx-auto  mt-4 lg:mt-8">
        <h1
          className="text-lg md:text-xl font-bold"
          style={{ fontFamily: "monospace" }}
        >
          Recent blog posts
        </h1>
      </span>
      <HomePageBLog />
    </div>
  );
}
