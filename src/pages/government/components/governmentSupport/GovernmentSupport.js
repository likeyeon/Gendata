import styles from "./GovernmentSupport.module.scss";
import GovernmentSupportBanner from "./GovernmentSupportBanner";
import Inside from "../../../../components/inside/Inside";
import GovernmentProject from "./GovernmentProject";

const GovernmentSupport = () => {
  return (
    <main className={styles.support_main}>
      <Inside>
        <GovernmentSupportBanner />
        <GovernmentProject />
      </Inside>
    </main>
  );
};

export default GovernmentSupport;
