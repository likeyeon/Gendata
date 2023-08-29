import styles from "./Inside.module.scss";

const Inside = ({ children }) => {
  return <div className={styles.inside}>{children}</div>;
};

export default Inside;
