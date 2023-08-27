import styles from "./Background.module.scss";
import Iframe from "./Iframe";
import Content from "./Content";

const Background = () => {
  return (
    <div className={styles.section}>
      <Iframe />
      <Content />
    </div>
  );
};

export default Background;
