import Inside from "../../../components/inside/Inside";
import styles from "./scss/WidgetSection.module.scss";
import corevalue from "../../../assets/about/corevalue.png";
import mission from "../../../assets/about/mission.png";

const WidgetSection = () => {
  return (
    <main className={styles.main}>
      <Inside>
        <div className={styles.widget_wrap}>
          <div className={styles.widget}>
            <img src={corevalue} alt="corevalue" />
          </div>
          <div className={styles.widget}>
            <img src={mission} alt="mission" />
          </div>
        </div>
      </Inside>
    </main>
  );
};

export default WidgetSection;
