import ChatInterface from "@/components/chat/ChatInterface"
import UserList from "@/components/chat/UserList"

const dashboard = () => {

  return (
      <>
    <div className="flex h-screen bg-gray-900 justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Chat Interface */}
        <div className="col-span-2">
          <ChatInterface />
        </div>
        {/* User List */}
        <div className="hidden md:block">
          <UserList />
        </div>
      </div>
    </div>
        <div className="border p-0.4"></div>
            <div className="h-[2.5rem] text-gray-400 pt-2 text-center">
            © 2024 EXOR Inc. All rights reserved.
        </div>
        </>
  );
}

export default dashboard;