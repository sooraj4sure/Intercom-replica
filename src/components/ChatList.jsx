import React, { useContext } from "react";
import { ChatContext } from "../context/ChatContext";

const ChatList = () => {
  const chats = [
    { id: 1, user: "Suraj", subject: "New Issue" },
    { id: 2, user: "Rahul", subject: "Follow up" },
    { id: 3, user: "Naina", subject: "Feedback" }
  ];

  const { selectChat } = useContext(ChatContext);

  return (
    <div className="space-y-2">
      {chats.map((chat) => (
        <div
          key={chat.id}
          className="p-2 rounded hover:bg-gray-100 cursor-pointer"
          onClick={() => selectChat(chat)}
        >
          <strong>{chat.user}</strong> - {chat.subject}
        </div>
      ))}
    </div>
  );
};

export default ChatList;