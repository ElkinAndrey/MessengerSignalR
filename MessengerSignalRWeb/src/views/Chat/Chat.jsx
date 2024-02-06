import React from "react";
import classes from "./Chat.module.css";

const Chat = ({ messages, selectedChat }) => {
  return (
    <div className={classes.body}>
      {/* <div>
        <b>Новый чат</b>
        <input
          value={newChat}
          onChange={(e) => newChatChange(e.target.value)}
        />
        <button onClick={add}>Добавить</button>
      </div> */}
      {/* <b>{`Чат: ${selectedChat}`}</b> */}
      {messages.map((m, index) => (
        <div key={index}>
          {m.user == null ? (
            <label className={classes.notification}>{m.message}</label>
          ) : (
            <div className={classes.message}>
              <div className={classes.name}>{m.user}</div>
              <div className={classes.text}>{m.message}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Chat;
