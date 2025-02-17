import blankImage from "@/public/assets/blank.svg";
import Image from "next/image";

export default function Blank() {
  return (
    <div className="h-[calc(100vh_-_129px)] flex md:flex-col md:space-y-4 items-center justify-center text-gray-700">
      <Image
        src={blankImage}
        alt="No messages"
        width={200}
        height={200}
        className="w-10 hidden md:block"
      />
      <div className="-rotate-90 md:rotate-0 min-w-[130px] md:min-w-0">
        No messages yet
      </div>
    </div>
  );
}
