import styles from "../components/scss/AboutSection.module.scss";
import Inside from "../../../components/inside/Inside";
import info from "../../../assets/about/info.png";
import ourMission from "../../../assets/about/ourMission.png";
import ourVision from "../../../assets/about/ourVision.png";

const AboutSection = () => (
  <main className={styles.main}>
    <Inside>
      <div className={styles.contents_wrap}>
        <div className={styles.banner_wrap_pc}>
          <div className={styles.banner}>
            <p className={styles.title}>
              <strong>AI accessible to everyone</strong>
            </p>
            <p className={styles.subtitle}>누구에게나 열려있는 인공지능</p>
          </div>
          <div className={styles.banner}>
            <p className={styles.title}>
              <strong>OUR VISION</strong>
            </p>
            <p className={styles.subtitle}>
              인공지능을 통해 기업의 가치를 발견하고 기회를 탐색할 수 있는
              공간을 만들자
            </p>
          </div>
        </div>
        <div className={styles.banner_wrap_mobile}>
          <div className={styles.banner}>
            <img src={info} alt="info" />
          </div>
          <div className={styles.banner}>
            <img src={ourMission} alt="ourMission" />
          </div>
          <div className={styles.banner}>
            <img src={ourVision} alt="ourVision" />
          </div>
        </div>
      </div>
    </Inside>
  </main>
);

export default AboutSection;
