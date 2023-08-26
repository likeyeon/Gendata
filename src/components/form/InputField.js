import { useState, useCallback } from "react";

import Label from "./Label";
import styles from "./InputField.module.scss";

const InputField = ({ name, label }) => {
  const [_value, _setValue] = useState("");

  const onChangeValue = useCallback((e) => {
    const newValue = e.target.value;
    _setValue(newValue);
  }, []);

  return (
    <div className={styles.group}>
      <Label name={name} text={label} />
      <input
        className={styles.input}
        type="text"
        name={name}
        id={name}
        onChange={onChangeValue}
        value={_value}
      />
    </div>
  );
};

export default InputField;
