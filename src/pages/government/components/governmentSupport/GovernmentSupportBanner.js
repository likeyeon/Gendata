import styles from "./GovernmentSupportBanner.module.scss";
import governmentBanner from "../../../../assets/government/governmentBanner.png";
import governmentBanner_tablet from "../../../../assets/government/governmentBanner_tablet.png";

const GovernmentSupportBanner = () => {
  return (
    <>
      <div className={styles.banner}>
        <img src={governmentBanner} alt="정부지원사업" />
      </div>
      <div className={styles.banner_tablet}>
        <img src={governmentBanner_tablet} alt="정부지원사업" />
      </div>
    </>
  );
};

export default GovernmentSupportBanner;
