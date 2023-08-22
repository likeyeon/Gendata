import styles from "./Gnb.module.scss";
import logo_dark from "../../assets/gnb/logo_dark.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Gnb = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.nav_bar}>
          <div className={styles.logo_wrap}>
            <a href="/">
              <img
                className={styles.logo_dark}
                src={logo_dark}
                alt="logo"
              ></img>
            </a>
          </div>
          <div className={styles.gnb_wrap}>
            <ul className={styles.gnb_menu}>
              <li className={styles.gnb_item}>
                <a className={styles.gnb_item_a} href="/about">
                  회사소개
                </a>
              </li>
              <li className={`${styles.gnb_item} ${styles.service}`}>
                <a className={styles.gnb_item_a} href="/ai-development">
                  서비스
                </a>
                <ul className={`${styles.dropdown_menu} ${styles.service}`}>
                  <li
                    className={`${styles.dropdown_menu_li}  ${styles.dataBuilding}`}
                  >
                    <a className={styles.dropdown_menu_li_a} href="/">
                      <span>
                        데이터 구축
                        <FontAwesomeIcon
                          className={styles.icon_angleRight}
                          icon={faAngleRight}
                        />
                      </span>
                    </a>
                    <ul className={styles.dropdown_menu}>
                      <li className={styles.dropdown_menu_li}>
                        <a className={styles.dropdown_menu_li_a} href="/">
                          <span>데이터 가공</span>
                        </a>
                      </li>
                      <li className={styles.dropdown_menu_li}>
                        <a className={styles.dropdown_menu_li_a} href="/">
                          <span>원천데이터 수집</span>
                        </a>
                      </li>
                      <li className={styles.dropdown_menu_li}>
                        <a className={styles.dropdown_menu_li_a} href="/">
                          <span>품질 및 보안</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className={styles.dropdown_menu_li}>
                    <a className={styles.dropdown_menu_li_a} href="/">
                      <span>AI모델 개발</span>
                    </a>
                  </li>
                  <li className={styles.dropdown_menu_li}>
                    <a className={styles.dropdown_menu_li_a} href="/">
                      <span>정부지원사업</span>
                    </a>
                  </li>
                  <li className={styles.dropdown_menu_li}>
                    <a className={styles.dropdown_menu_li_a} href="/">
                      <span>데이터 거래</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className={`${styles.gnb_item} ${styles.education}`}>
                <a className={styles.gnb_item_a} href="/education">
                  교육
                </a>
                <ul className={styles.dropdown_menu}>
                  <li className={styles.dropdown_menu_li}>
                    <a className={styles.dropdown_menu_li_a} href="/">
                      <span>AI 에듀사업</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className={styles.gnb_item}>
                <a className={styles.gnb_item_a} href="/">
                  AI 비즈니스 매칭
                </a>
              </li>
              <li className={styles.gnb_item}>
                <a className={styles.gnb_item_a} href="/">
                  소식
                </a>
              </li>
              <li className={styles.gnb_item}>
                <a className={styles.gnb_item_a} href="/">
                  문의하기
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.nav_moboile}></div>
      </nav>
    </header>
  );
};

export default Gnb;
