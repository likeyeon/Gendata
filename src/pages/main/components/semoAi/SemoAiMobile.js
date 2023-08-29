import styles from "./SemoAiMobile.module.scss";
import Inside from "../../../../components/inside/Inside";
import ManIcon from "../../../../assets/main/man.png";
import semoAiBanner from "../../../../assets/main/semoAiBanner.png";
import ImgArr from "./ImgArr";
import ClickSlider from "./ClickSlider";

const SemoAiMobile = () => {
  return (
    <Inside>
      <div className={styles.mobile_wrap}>
        <h2 className={styles.mobile_title}>이런 고민 하셨나요?</h2>
        <p className={styles.mobile_Man}>
          <img src={ManIcon} alt="" />
        </p>
        <div className={styles.minImg}>
          <ClickSlider ImgArr={ImgArr} />
        </div>
        <div className={styles.banner_img_wrap}>
              <img src={semoAiBanner} alt="semoAi" />
        </div>
      </div>
      {/* E: mobile_contents */}
    </Inside>
  )
}
export default SemoAiMobile;