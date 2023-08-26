import { useState, useCallback } from "react";

import Label from "./Label";
import styles from "./SelectField.module.scss";

const SelectField = ({ name, label, options }) => {
  const [_value, _setValue] = useState("");

  const onChangeValue = useCallback((e) => {
    const newValue = e.target.value;
    _setValue(newValue);
  }, []);

  const selectList = [...options];

  return (
    <div className={styles.group}>
      <Label name={name} text={label} />
      <select
        id="category"
        className={styles.select}
        onChange={onChangeValue}
        value={_value}
      >
        {selectList.map((item) => (
          <option value={item} key={item}>
            {item ? item : "(선택)"}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
