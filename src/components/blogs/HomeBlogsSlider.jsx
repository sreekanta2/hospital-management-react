import BlogCard from "./BlogCard";

export default function HomeBlogSlider() {
  return (
    <div className="bg-[#f8f9fa] px-8 py-8  ">
      <div className=" w-full flex flex-col items-center">
        <h1 className="text-2xl md:text-4xl font-bold ">Blogs and News</h1>
        <p className="   pt-4   text-gray-400 max-w-[500px]     ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="grid  md:grid-cols-2 mt-10 lg:grid-cols-4 gap-8 ">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      <div className="flex justify-center mt-10">
        <button
          to="/doctor/1/overview"
          className="relative flex px-2 py-2   rounded-md items-center justify-center overflow-hidden bg-[#1aa2e1] text-white"
        >
          <span className="relative z-20">View All</span>
        </button>
      </div>
    </div>
  );
}
