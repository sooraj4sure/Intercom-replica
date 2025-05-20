import React from "react";

const SuggestedReplies = () => {
  const replies = [
    "Thanks for reaching out! We're looking into it.",
    "Can you provide more details, please?",
    "Happy to help! Let me check that for you."
  ];

  return (
    <div className="space-y-2">
      <h4 className="text-sm font-semibold mb-1">Suggested Replies</h4>
      {replies.map((reply, index) => (
        <button
          key={index}
          className="block w-full text-left bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm"
        >
          {reply}
        </button>
      ))}
    </div>
  );
};

export default SuggestedReplies;