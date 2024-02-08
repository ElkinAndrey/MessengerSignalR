import React from "react";
import classes from "./Header.module.css";
import InputName from "../InputName/InputName";
import ChatApi from "../../api/chatApi";
import { useFetching } from "../../hooks/useFetching";

const Header = ({ name, nameChange, chatName, deleteChat, exit }) => {
  const deleteCallback = async (name) => {
    await ChatApi.deleteChat(name);
  };

  const [fetchDelete] = useFetching(deleteCallback);

  const del = () => {
    fetchDelete(chatName);
    exit();
    deleteChat(chatName);
  };

  return (
    <div className={classes.body}>
      <InputName value={name} setValue={nameChange} />
      <div>
        <label className={classes.groupName}>{`Группа ${chatName}`}</label>
        <button className={classes.buttonDelete} onClick={del}>
          Удалить
        </button>
        <button className={classes.buttonExit} onClick={exit}>
          Выйти
        </button>
      </div>
    </div>
  );
};

export default Header;
