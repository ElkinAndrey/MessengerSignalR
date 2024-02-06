import React from "react";
import classes from "./InputMessage.module.css";

const InputMessage = ({ value, setValue, onClick }) => {
  return (
    <div>
      <input
        className={classes.input}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Сообщение"
      />
      <button className={classes.button} onClick={onClick}>
        Отправить
      </button>
    </div>
  );
};

export default InputMessage;
