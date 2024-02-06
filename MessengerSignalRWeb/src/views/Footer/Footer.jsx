import React from "react";
import classes from "./Footer.module.css";
import InputMessage from "../InputMessage/InputMessage";

const Footer = ({ message, messageChange, send }) => {
  return (
    <div className={classes.body}>
      <div className={classes.input}>
        <InputMessage value={message} setValue={messageChange} onClick={send} />
      </div>
    </div>
  );
};

export default Footer;
