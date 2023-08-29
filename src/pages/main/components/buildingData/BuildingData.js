import styles from "./BuildingData.module.scss";
import Inside from "../../../../components/inside/Inside";
import Video from "./Video";
import MainTab from "../../../../components/tab/MainTab"; 

const BuildingData = () => {
  return (
    <main className={styles.main}>
      <Inside>
        <div className={styles.video}>
          <Video />
        </div>
        <div className={styles.mainTab}>
          <MainTab />
        </div>
      </Inside>
    </main>
  );
};

export default BuildingData;
