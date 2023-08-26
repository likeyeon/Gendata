import { useState, useCallback } from "react";

import Label from "./Label";
import styles from "./TextareaField.module.scss";

const TextareaField = ({ name, label }) => {
  const [_value, _setValue] = useState("");

  const onChangeValue = useCallback((e) => {
    const newValue = e.target.value;
    _setValue(newValue);
  }, []);

  return (
    <div className={styles.group}>
      <Label name={name} text={label} />
      <textarea
        className={styles.textarea}
        type="text"
        rows="3"
        name={name}
        id={name}
        onChange={onChangeValue}
        value={_value}
      />
    </div>
  );
};

export default TextareaField;
