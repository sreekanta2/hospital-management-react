import Sidebar from "../components/inbox/Sidebar";
import ChatBody from "../components/inbox/chatbody/ChatBody";

export default function Conversation() {
  return (
    <div className=" mx-6 ">
      <div className="min-w-full border rounded flex lg:grid lg:grid-cols-3">
        <Sidebar />
        <div className="w-full lg:col-span-2 lg:block">
          <div className="w-full grid conversation-row-grid">
            <ChatBody />
            {/* <Blank /> */}
          </div>
        </div>
      </div>
      <div className="h-screen"></div>
    </div>
  );
}
