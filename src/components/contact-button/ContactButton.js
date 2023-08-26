import styles from "./ContactButton.module.scss";
import { Subtitle } from "../common/typo/Typo";
import React, { useState, useCallback, useEffect } from "react";

const ContactButton = ({ maxTitle, minTitle, className }) => {
  const [titelString, setTitleString] = useState(<></>);
  const maxWidthTitle = <>{maxTitle}</>;
  const minWidthTitle = <>{minTitle}</>;
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
    if (tabletMql.matches) {
      setTitleString(maxWidthTitle);
    } else {
      setTitleString(minWidthTitle);
    }
    return () => {
      tabletMql.removeEventListener("change", changeEventHandler);
    };
  }, []);
  return (
    <div className={styles.ContactButtonBackground}>
      <Subtitle
        className={`${styles.ContactButtonTitle} ${className}`}
        subtitle={titelString}
      />
      <a href="/about">
        <button className={styles.ContactButton}>바로 문의하기 &gt;</button>
      </a>
    </div>
  );
};
export default ContactButton;
