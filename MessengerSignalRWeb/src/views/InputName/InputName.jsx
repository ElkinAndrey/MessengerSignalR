import React from "react";
import classes from "./InputName.module.css";

const InputName = ({ value, setValue }) => {
  return (
    <div>
      <input
        className={classes.input}
        placeholder="Имя"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default InputName;
