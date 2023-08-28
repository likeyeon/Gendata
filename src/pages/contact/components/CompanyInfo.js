import styles from "./CompanyInfo.module.scss";

const CompanyInfo = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <p>
          <strong>본사</strong>
        </p>
        <p>
          <strong>기업부설연구소</strong>
        </p>
        <p>
          <strong>지사</strong>
        </p>
        <p>
          <strong>대표전화</strong>
        </p>
        <p>
          <strong>이메일</strong>
        </p>
      </div>
      <div className={styles.right}>
        <p>서울시 금천구 가산디지털2로 34, 3층 319호,320호(가산동)</p>
        <p>서울시 금천구 가산디지털2로 34, 3층 319호,320호 (가산동)</p>
        <p>광주시 동구 백서로 125번길 34-2, 5층 148호</p>
        <p>070-4895-5550</p>
        <p>info@gendata.kr (회사)</p>
        <p>mh.ham@gendata.kr (대표)</p>
      </div>
    </div>
  );
};

export default CompanyInfo;
