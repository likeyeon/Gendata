import styles from "./scss/AboutSectionTwo.module.scss";
import logo_dark from "../../../assets/gnb/logo_dark.png";
import logo_white from "../../../assets/gnb/logo_white.png";

const AboutSectionTwo = () => (
  <>
    <div className={styles.banner_pc}>
      <div className={styles.logo_wrap}>
        <img src={logo_dark} alt="logo" />
      </div>
      <div className={styles.text_wrap}>
        <p>KOREA 2023 AI STARTUPS 343 기업</p>
        <p>NIA 주관 D.N.A 분야 180대 혁신 기업</p>
      </div>
    </div>
    <div className={styles.banner_mobile}>
      <div className={styles.logo_wrap}>
        <img src={logo_white} alt="logo" />
      </div>
      <div className={styles.text_wrap}>
        <p>KOREA 2023 AI STARTUPS 343 기업</p>
        <p>NIA 주관 D.N.A 분야 180대 혁신 기업</p>
      </div>
    </div>
  </>
);

export default AboutSectionTwo;
