import styles from "./Section2.module.scss";
import CompanyMap from "./CompanyMap";
import CompanyInfo from "./CompanyInfo";
import Inside from "../../../components/inside/Inside";

const Section2 = () => {
  return (
    <Inside>
      <div className={styles.wrapper}>
        <div className={styles.map}>
          <CompanyMap />
        </div>
        <div className={styles.info}>
          <CompanyInfo />
        </div>
      </div>
    </Inside>
  );
};

export default Section2;
