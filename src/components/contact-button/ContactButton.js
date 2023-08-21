import styles from "./ContactButton.module.scss";
import contactButtonBackground from "../../assets/contactButtonBackground.png";

const ContactButton = ({ title }) => {
  return (
    <div className={styles.ContactButtonBackground}>
      <p className={styles.ContactButtonTitle}>{title}</p>
      <a href="/about">
        <button className={styles.ContactButton}>바로 문의하기 &gt; </button>
      </a>
    </div>
  );
};
export default ContactButton;
