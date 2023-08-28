import styles from "./DataDealingBanner.module.scss";
import Inside from "../../../components/inside/Inside";
import dataConfirm from "../../../assets/data-dealing/dataConfirm.png";

const DataDealingBanner = () => {
  return (
    <main className={styles.main}>
      <Inside>
        <div className={styles.banner_wrapper}>
          <div className={styles.banner}>
            <p>
              <strong>
                <span>젠데이터는 과학기술정보통신부로부터</span>
              </strong>
              <br />
              <strong>
                <span>인증 받은 데이터사업자 기업입니다.</span>
              </strong>
            </p>
            <img src={dataConfirm} alt="데이터사업자 신고확인서" />
          </div>
        </div>
      </Inside>
    </main>
  );
};

export default DataDealingBanner;
