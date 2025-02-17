export default function ChatHead({ avatar, name }) {
  return (
    <div className="relative flex items-center p-3 border-b border-gray-300 gap-4">
      <div className="relative">
        <img
          className="object-cover w-10 h-10 rounded-full"
          src={avatar}
          width={200}
          height={200}
          alt={name}
        />
        <span className="absolute bottom-[-25px] right-[-8px] text-[80px] text-green-400">
          .
        </span>
      </div>
      <div className="   font-bold text-gray-600 flex flex-col  ">
        <span>srikanto</span>
        <span className="text-sm">Online</span>
      </div>
    </div>
  );
}
