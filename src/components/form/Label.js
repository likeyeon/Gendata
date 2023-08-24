import styles from "./Label.module.scss";

const Label = ({ name, text }) => {
  return (
    <>
      <label htmlFor={name} className={styles.label}>
        {text}
      </label>
    </>
  );
};

export default Label;
