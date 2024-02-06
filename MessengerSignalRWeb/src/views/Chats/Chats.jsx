import React from "react";
import classes from "./Chats.module.css";

const Chats = ({
  chats = [],
  selectedChat,
  selectedChatChange,
  className = "",
  style = {},
}) => {
  const classChat = (chat) => {
    return chat === selectedChat ? classes.selectedChat : classes.chat;
  };

  return (
    <div className={className} style={style}>
      <div className={classes.body}>
        {chats.map((chat, index) => (
          <div
            className={classChat(chat)}
            key={index}
            onClick={() => selectedChatChange(chat)}
          >
            {chat}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chats;
