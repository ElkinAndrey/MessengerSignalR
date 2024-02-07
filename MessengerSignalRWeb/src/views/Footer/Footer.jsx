import React from "react";
import classes from "./Footer.module.css";
import InputMessage from "../InputMessage/InputMessage";

const Footer = ({ message, messageChange, send, name }) => {
  return (
    <div className={classes.body}>
      <div className={classes.input}>
        <InputMessage
          value={message}
          setValue={messageChange}
          onClick={send}
          disabled={name === ""}
        />
      </div>
    </div>
  );
};

export default Footer;
