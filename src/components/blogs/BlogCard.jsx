import { Link } from "react-router-dom";
import image from "../../assets/blog-01.jpg";
import successImg from "../../assets/user2.jpg";
export default function BlogCard() {
  return (
    <div className="  bg-white       shadow-[0_3px_10px_rgb(0,0,0,0.2)]  ">
      <div className="p-4">
        <div className="overflow-hidden   ">
          <img
            src={image}
            width={400}
            height={400}
            className="   cursor-pointer duration-500 hover:scale-125 transition-transform group-hover:opacity-50"
            alt="background image"
          />
        </div>
        <div>
          <div className="flex gap-4 mt-4 items-center ">
            <div className="w-10 h-10 rounded-full  overflow-hidden border ">
              <img src={successImg} alt="success image" />
            </div>
            <span className="text-gray-600 text-sm ">Rubey Perrin</span>
          </div>

          <p className="flex  gap-2 text-md">
            <span>
              <i className="ri-time-fill text-gray-400"></i>
            </span>
            <span>31 desc 2023</span>
          </p>

          <div className=" flex flex-col gap-1 mt-2 ">
            <Link
              to=""
              className="font-bold text-md text-gray-700 hover:text-[#20c0f3] duration-200"
            >
              Lorem ipsum dolor sit amet.
            </Link>
            <p className="text-sm text-gray-600 text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
              suscipit provident ut expedita dicta delectus sequi similique
              veritatis laudantium dolorum?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
