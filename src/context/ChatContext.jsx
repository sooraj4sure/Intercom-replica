import React, { createContext, useState } from "react";

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [messages, setMessages] = useState([]);

  const selectChat = (chat) => {
    setSelectedChat(chat);
    // Fetch messages for selected chat
    setMessages([`Welcome to chat with ${chat.user}`]);
  };

  const sendMessage = (message) => {
    setMessages((prev) => [...prev, message]);
  };

  return (
    <ChatContext.Provider value={{ selectedChat, messages, selectChat, sendMessage }}>
      {children}
    </ChatContext.Provider>
  );
};