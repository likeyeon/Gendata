import styles from "./SemoAi.module.scss";

import SemoAiMobile from "./SemoAiMobile";
import SemoAiPc from "./SemoAiPc";

const SemoAi = () => {
  return (
    <>
      <div className={styles.contents_wrap}>
        <div className={styles.pc_contents}>
          <SemoAiPc />
        </div>
        <div className={styles.mobile_contents}>
          <SemoAiMobile  />
        </div>
      </div>
    </>
  );
};

export default SemoAi;
