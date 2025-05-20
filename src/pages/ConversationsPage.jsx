
import React from 'react';
import ChatList from '../components/ChatList';
import ChatWindow from '../components/ChatWindow';
import SuggestedReplies from '../components/SuggestedReplies';


const ConversationsPage = () => {
  return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-12">
      {/*  Chat list */}
      <aside className="col-span-3 border-r bg-white overflow-y-auto">
        <div className="p-4 border-b font-semibold text-lg">Your inbox</div>
        <ChatList />
      </aside>

      {/* Main Chat Area */}
      <main className="col-span-6 flex flex-col border-r">
        {/* Chat Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="font-medium">Chats</h2>
          <button className="text-sm px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">Close</button>
        </div>
        {/* Chat Content */}
        <div className="flex-1 p-4 overflow-y-auto">
          <ChatWindow />
        </div>
      </main>

      {/* Right Sidebar AI Suggested */}
    <aside
  className="col-span-3 p-10 flex flex-col justify-between"
  style={{ backgroundColor: '#f3f4f6' }} // Copilot-like background
>
  <div>
    <div className="font-semibold text-blue-700 mb-2">AI Copilot</div>
    <div className="text-center text-sm text-gray-600">
      <p className="mb-2">Hi, I'm Fin AI Copilot</p>
      <p className="text-xs">Ask me anything about this conversation.</p>
    </div>
  </div>

  <div className="mt-6">
    <SuggestedReplies />
  </div>

  {/* AI Input Box */}
  <div className="mt-6">
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Ask a question..."
        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700"
      >
        Send
      </button>
    </form>
  </div>
</aside>

    </div>
  );
};

export default ConversationsPage;