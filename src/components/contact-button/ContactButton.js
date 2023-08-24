import styles from "./ContactButton.module.scss";
import { Subtitle } from "../common/typo/Typo";
import React, { useState, useCallback, useEffect } from "react";

const ContactButton = () => {
  const [titelString, setTitleString] = useState(<></>);
  const maxWidthTitle = <>우리 회사에 딱 맞는 AI 서비스를 찾아보세요!</>;
  const minWidthTitle = (
    <>
      우리 회사에 딱 맞는 <br />
      AI 서비스를 찾아보세요!
    </>
  );
  const tabletMql = window.matchMedia("screen and (min-width:992px)");
  const changeEventHandler = useCallback(
    (e) => {
      if (e.matches) {
        setTitleString(maxWidthTitle);
      } else {
        setTitleString(minWidthTitle);
      }
    },
    [maxWidthTitle, minWidthTitle]
  );
  tabletMql.addEventListener("change", changeEventHandler);

  useEffect(() => {
    if (window.innerWidth > 992) {
      setTitleString(maxWidthTitle);
    }

    return () => {
      tabletMql.removeEventListener("change", changeEventHandler);
    };
  }, []);
  return (
    <div className={styles.ContactButtonBackground}>
      <Subtitle
        className={`${styles.ContactButtonTitle}`}
        subtitle={titelString}
      />
      <a href="/about">
        <button className={styles.ContactButton}>바로 문의하기 &gt;</button>
      </a>
    </div>
  );
};
export default ContactButton;
