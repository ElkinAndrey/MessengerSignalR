import React from "react";
import classes from "./Chat.module.css";

const Chat = ({ messages, userName }) => {
  return (
    <div className={classes.body}>
      {messages.map((m, index) => (
        <div key={index}>
          {m.user == null ? (
            <label className={classes.notification}>{m.message}</label>
          ) : (
            <div
              className={
                m.user === userName ? classes.myMessage : classes.message
              }
            >
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
