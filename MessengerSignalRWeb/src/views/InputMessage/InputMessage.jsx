import React from "react";
import classes from "./InputMessage.module.css";

const InputMessage = ({ value, setValue, onClick, disabled }) => {
  const send = () => {
    onClick();
    setValue("");
  };

  return (
    <div className={classes.body}>
      <div className={classes.inputContainer}>
        <input
          className={classes.input}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Сообщение"
        />
      </div>
      <div className={classes.buttonContainer}>
        <button
          disabled={value === "" || disabled}
          className={classes.button}
          onClick={send}
        >
          Отправить
        </button>
      </div>
    </div>
  );
};

export default InputMessage;
