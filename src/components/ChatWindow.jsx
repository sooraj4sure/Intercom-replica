import React, { useContext, useState } from "react";
import { ChatContext } from "../context/ChatContext";

const ChatWindow = () => {
  const { selectedChat, messages, sendMessage } = useContext(ChatContext);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      sendMessage(input);
      setInput("");
    }
  };

  return (
    <div>
      <div className="border p-2 h-96 overflow-y-auto mb-2">
        {selectedChat ? (
          messages.map((msg, index) => <div key={index}>{msg}</div>)
        ) : (
          <p className="text-gray-500">Select a chat to start messaging</p>
        )}
      </div>
      <div className="mt-48 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your reply..."
          className="w-full border rounded px-3 py-2 text-sm"
        />
        <button
          onClick={handleSend}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;