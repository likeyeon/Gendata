import styles from "./Title.module.scss";
import { TitleBig, Contents } from "../common/typo/Typo";

const Title = ({ titleClassName, maxContents, minContents }) => {
  return (
    <div className={styles.title}>
      <TitleBig className={titleClassName} titleBig={titleText} />
      <Contents
        className={`${styles.maxContents} {contentClassName}`}
        contents={maxContents}
      />
      <Contents
        className={`${styles.minContents} {contentClassName}`}
        contents={minContents}
      />
    </div>
  );
};
export default Title;
