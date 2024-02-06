import React from "react";
import classes from "./Header.module.css";
import InputName from "../InputName/InputName";

const Header = ({ name, nameChange }) => {
  return (
    <div className={classes.body}>
      <div className={classes.input}>
        <InputName value={name} setValue={nameChange} />
      </div>
    </div>
  );
};

export default Header;
