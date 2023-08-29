import styles from "./BottomBanner.module.scss";
import BannerLogo from "../../../../assets/main/bottom_banner_logo1.png";

const BottomBanner = () => {
  return (
    <div className={styles.banner_outer}>
      <div className={styles.banner_wrap}>
      <p className={styles.banner_logo_wrap}>
        <img className={styles.banner_logo_img} src={BannerLogo} alt="" />
        <span className={styles.banner_logo_text}>GOT SELECTED</span>
      </p>
      <h3 className={styles.banner_title}><span>2023 KOREA</span> <span>AI STARTUPS 343</span></h3>    
      <p className={styles.banner_sector}>AI 데이터 구축 부문</p>  
    </div>
    </div>
  )
}
export default BottomBanner;