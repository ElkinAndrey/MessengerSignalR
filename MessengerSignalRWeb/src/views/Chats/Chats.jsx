import React, { useState } from "react";
import classes from "./Chats.module.css";
import Modal from "../Modal/Modal";
import ChatApi from "../../api/chatApi";
import { useFetching } from "../../hooks/useFetching";

const Chats = ({
  chats = [],
  selectedChat,
  selectedChatChange,
  className = "",
  style = {},
  addChat,
}) => {
  const classChat = (chat) => {
    return chat === selectedChat ? classes.selectedChat : classes.chat;
  };
  const [name, nameChange] = useState("");
  const [addModal, addModalChange] = useState(false);

  const addCallback = async (name) => {
    await ChatApi.addChat(name);
  };

  const [fetchAdd] = useFetching(addCallback);

  const back = () => {
    addModalChange(false);
  };

  const add = () => {
    fetchAdd(name);
    addModalChange(false);
    addChat(name);
    nameChange("");
  };

  return (
    <div className={className} style={style}>
      <Modal
        active={addModal}
        setActive={addModalChange}
        style={{
          border: "#271c46 3px solid",
          borderRadius: "5px",
          padding: "20px",
        }}
      >
        <div className={classes.addLogo}>Добавление чата</div>
        <div>
          <input
            className={classes.addInput}
            placeholder="Имя чата"
            value={name}
            onChange={(e) => nameChange(e.target.value)}
          />
        </div>
        <div className={classes.addButtons}>
          <div>
            <button
              className={classes.addButton}
              disabled={name === ""}
              onClick={add}
            >
              Добавить
            </button>
          </div>
          <div>
            <button className={classes.addButton} onClick={back}>
              Отмена
            </button>
          </div>
        </div>
      </Modal>
      <div className={classes.body}>
        <div className={classes.header}>
          <div className={classes.logo}>Чаты</div>
          <button className={classes.add} onClick={() => addModalChange(true)}>
            +
          </button>
        </div>
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
