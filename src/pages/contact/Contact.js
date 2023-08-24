import Gnb from "../../components/gnb/Gnb";
import Form from "../../components/form/Form";
import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <>
      <Gnb />
      <main className={styles.main}>
        <Form />
      </main>
    </>
  );
};

export default Contact;
