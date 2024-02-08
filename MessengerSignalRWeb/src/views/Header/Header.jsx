import React from "react";
import classes from "./Header.module.css";
import InputName from "../InputName/InputName";

const Header = ({ name, nameChange, exit }) => {
  return (
    <div className={classes.body}>
      <InputName value={name} setValue={nameChange} />
      <div>
        <button className={classes.buttonDelete}>Удалить</button>
        <button className={classes.buttonExit} onClick={exit}>
          Выйти
        </button>
      </div>
    </div>
  );
};

export default Header;
