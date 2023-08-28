import styles from "./Business.module.scss";
import { Subtitle } from "../../../../components/common/typo/Typo";
import Inside from "../../../../components/inside/Inside";
import business_card from "../../../../assets/business/business_card.jpg";

const Business = () => {
  return (
    <main className={styles.main}>
      <Inside>
        <div className={styles.contents_wrap}>
          <div className={styles.clients_title}>
            <Subtitle subtitle={"Business"} />
          </div>
          <div className={styles.img_wrap}>
            <img src={business_card} alt="business" />
          </div>
        </div>
      </Inside>
    </main>
  );
};

export default Business;
