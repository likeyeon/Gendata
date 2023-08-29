import styles from "./DataDealingBanner.module.scss";
import Inside from "../../../components/inside/Inside";
import dataConfirm from "../../../assets/data-dealing/dataConfirm.png";
import { useEffect, useState } from "react";

const DataDealingBanner = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className={styles.blank}></div>
      <main className={styles.main}>
        <Inside>
          <div className={styles.banner_wrapper}>
            <div className={styles.banner}>
              <p>
                <strong>
                  <span>
                    {windowSize > 991
                      ? "젠데이터는 과학기술정보통신부로부터"
                      : "젠데이터는 데이터사업자 신고완료,"}
                  </span>
                </strong>
                <br />
                <strong>
                  <span>
                    {windowSize > 991
                      ? "인증 받은 데이터사업자 기업입니다."
                      : "과학기술정보통신부 인증 기업입니다."}
                  </span>
                </strong>
              </p>

              <img src={dataConfirm} alt="데이터사업자 신고확인서" />
            </div>
          </div>
        </Inside>
      </main>
    </>
  );
};

export default DataDealingBanner;
