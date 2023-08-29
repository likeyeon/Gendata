import styles from "./Footer.module.scss";
import logoDark from "../../assets/gnb/logo_dark.png";
const Footer = () => {
  return (
    <footer>
      <div className={styles.footer}>
        <img className={styles.logo} src={logoDark} alt="logo" />
        <div className={styles.companyInfo}>
          <p>상호명: (주)젠데이터 ㅣ 사업자번호 : 449-87-02752</p>
          <p>T. 070-4895-5550 ㅣ E. info@gendata.kr</p>
          <p>본사. 광주광역시 동구 금남로 193-22, 광주AI창업캠프 3층 308호</p>
          <p>지사. 경기도 성남시 수정구 창업로 42 경기기업성장센터 2층 206호</p>
          <p>기업부설연구소. 서울시 금천구 가산디지털2로 34, 3층 319호,320호</p>
        </div>
        <div className={styles.line}></div>
        <div className={styles.copyright}>
          <strong>COPYRIGHT ⓒ (주)젠데이터 ALL RIGHT RESERVED</strong>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
