import { useState, useCallback, useEffect } from "react";
import styles from "./Gnb.module.scss";
import logo_dark from "../../assets/gnb/logo_dark.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Gnb = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClickOpen = () => setIsOpen(!isOpen);

  const [isServiceFolded, setIsServiceFolded] = useState(true);
  const [isDataFolded, setIsDataFolded] = useState(true);
  const [isEduFolded, setIsEduFolded] = useState(true);

  const handleServiceClick = useCallback(
    (e) => {
      setIsServiceFolded(!isServiceFolded);
    },
    [isServiceFolded]
  );

  const handleDataClick = useCallback(() => {
    setIsDataFolded(!isDataFolded);
  }, [isDataFolded]);

  const handleEduClick = useCallback(() => {
    setIsEduFolded(!isEduFolded);
  }, [isEduFolded]);

  const serviceDegrees = isServiceFolded ? 0 : 180;
  const dataDegrees = isDataFolded ? 0 : 180;
  const eduDegrees = isEduFolded ? 0 : 180;

  const mqHandler = useCallback((event) => {
    !event.matches && setIsOpen(false);
  }, []);

  useEffect(() => {
    const mobileMql = window.matchMedia("(max-width: 991px)");
    mobileMql.addEventListener("change", mqHandler);

    return () => {
      mobileMql.removeEventListener("change", mqHandler);
    };
  }, [mqHandler]);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.nav_bar}>
          {isOpen ? <div className={styles.background_dark}></div> : ""}
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
                <a className={styles.gnb_item_a} href="/introduce">
                  회사소개
                </a>
              </li>
              <li className={`${styles.gnb_item} ${styles.service}`}>
                <a
                  className={styles.gnb_item_a}
                  href="/gendata-service-labeling"
                >
                  서비스
                </a>
                <ul className={`${styles.dropdown_menu} ${styles.service}`}>
                  <li
                    className={`${styles.dropdown_menu_li}  ${styles.dataBuilding}`}
                  >
                    <a
                      className={styles.dropdown_menu_li_a}
                      href="/gendata-service-labeling"
                    >
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
                        <a
                          className={styles.dropdown_menu_li_a}
                          href="/gendata-service-labeling"
                        >
                          <span>데이터 가공</span>
                        </a>
                      </li>
                      <li className={styles.dropdown_menu_li}>
                        <a
                          className={styles.dropdown_menu_li_a}
                          href="/data-collection"
                        >
                          <span>원천데이터 수집</span>
                        </a>
                      </li>
                      <li className={styles.dropdown_menu_li}>
                        <a
                          className={styles.dropdown_menu_li_a}
                          href="/inhouse-operation"
                        >
                          <span>품질 및 보안</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className={styles.dropdown_menu_li}>
                    <a
                      className={styles.dropdown_menu_li_a}
                      href="/ai-development"
                    >
                      <span>AI모델 개발</span>
                    </a>
                  </li>
                  <li className={styles.dropdown_menu_li}>
                    <a
                      className={styles.dropdown_menu_li_a}
                      href="/government-support-project"
                    >
                      <span>정부지원사업</span>
                    </a>
                  </li>
                  <li className={styles.dropdown_menu_li}>
                    <a
                      className={styles.dropdown_menu_li_a}
                      href="/data-dealing"
                    >
                      <span>데이터 거래</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className={`${styles.gnb_item} ${styles.education}`}>
                <a className={styles.gnb_item_a} href="/ai-education">
                  교육
                </a>
                <ul className={styles.dropdown_menu}>
                  <li className={styles.dropdown_menu_li}>
                    <a
                      className={styles.dropdown_menu_li_a}
                      href="/ai-education"
                    >
                      <span>AI 에듀사업</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className={styles.gnb_item}>
                <a className={styles.gnb_item_a} href="/AI-data-project">
                  프로젝트 공고
                </a>
              </li>
              <li className={styles.gnb_item}>
                <a className={styles.gnb_item_a} href="/AI-service-paga">
                  AI 서비스
                </a>
              </li>
              <li className={styles.gnb_item}>
                <a className={styles.gnb_item_a} href="/news">
                  소식
                </a>
              </li>
              <li className={styles.gnb_item}>
                <a className={styles.gnb_item_a} href="/contact">
                  문의하기
                </a>
              </li>
            </ul>
            <button className={styles.bars_btn} onClick={() => onClickOpen()}>
              <FontAwesomeIcon className={styles.icon_bars} icon={faBars} />
            </button>
          </div>
        </div>

        <div className={styles.gnb_wrap_mobile}>
          <div
            className={`${
              isOpen ? styles.nav_mobile_active : styles.nav_mobile
            }`}
          >
            <ul className={styles.nav_mobile_ul}>
              <li className={styles.depth_01}>
                <a href="/introduce">
                  <span>회사소개</span>
                </a>
              </li>
              <li className={styles.depth_01}>
                <a href="#!" onClick={handleServiceClick}>
                  <span>서비스</span>
                  <span className={styles.icon_chervron}>
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      rotation={serviceDegrees}
                    />
                  </span>
                </a>

                <ul className={isServiceFolded ? styles.folded : styles.spread}>
                  <li className={styles.depth_02}>
                    <a href="#!" onClick={handleDataClick}>
                      <span>데이터 구축</span>
                      <span className={styles.icon_chervron}>
                        <FontAwesomeIcon
                          icon={faChevronDown}
                          rotation={dataDegrees}
                        />
                      </span>
                    </a>

                    <ul
                      className={isDataFolded ? styles.folded : styles.spread}
                    >
                      <li className={styles.depth_03}>
                        <a href="/gendata-service-labeling">
                          <span>데이터 가공</span>
                        </a>
                      </li>
                      <li className={styles.depth_03}>
                        <a href="/data-collection">
                          <span>원천데이터 수집</span>
                        </a>
                      </li>
                      <li className={styles.depth_03}>
                        <a href="/inhouse-operation">
                          <span>품질 및 보안</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className={styles.depth_02}>
                    <a href="/ai-development">
                      <span>AI모델 개발</span>
                    </a>
                  </li>
                  <li className={styles.depth_02}>
                    <a href="/government-support-project">
                      <span>정부지원사업</span>
                    </a>
                  </li>
                  <li className={styles.depth_02}>
                    <a href="/data-dealing">
                      <span>데이터 거래</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className={styles.depth_01}>
                <a href="#!" onClick={handleEduClick}>
                  <span>교육</span>
                  <span className={styles.icon_chervron}>
                    <span className={styles.icon_chervron}>
                      {" "}
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        rotation={eduDegrees}
                      />
                    </span>
                  </span>
                </a>
                <ul className={isEduFolded ? styles.folded : styles.spread}>
                  <li className={styles.depth_02}>
                    <a href="/ai-education">
                      <span>AI 에듀 사업</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className={styles.depth_01}>
                <a href="/AI-data-project">
                  <span>프로젝트 공고</span>
                </a>
              </li>
              <li className={styles.depth_01}>
                <a href="/AI-service-paga">
                  <span>AI 서비스</span>
                </a>
              </li>
              <li className={styles.depth_01}>
                <a href="/news">
                  <span>소식</span>
                </a>
              </li>
              <li className={styles.depth_01}>
                <a href="/contact">
                  <span>문의하기</span>
                </a>
              </li>
            </ul>
          </div>
          {isOpen && (
            <button className={styles.x_btn} onClick={() => onClickOpen()}>
              <FontAwesomeIcon className={styles.x_icon} icon={faXmark} />
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Gnb;
