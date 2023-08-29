import ContactButton from "../../../components/contact-button/ContactButton";
import styles from "./scss/Contact.module.scss";

const Contact = () => {
  return (
    <div className={styles.section}>
      <ContactButton
        maxTitle="우리 회사에 딱 맞는 AI 서비스를 찾아보세요!"
        minTitle={
          <>
            우리 회사에 딱 맞는
            <br /> AI 서비스를 찾아보세요!
          </>
        }
        className=""
      />
    </div>
  );
};

export default Contact;
