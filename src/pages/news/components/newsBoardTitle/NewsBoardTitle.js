import { TitleBig } from "../../../../components/common/typo/Typo";
import styles from "./NewsBoardTitle.module.scss";

const AiDevlopmentTitle = () => {
  return (
    <div className={styles.titleContainer}>
      <div className={styles.title}>
        <TitleBig className={styles.titleText} titleBig={"소식"} />
      </div>
    </div>
  );
};
export default AiDevlopmentTitle;
