import ContactTitle from "./components/ContactTitle";
import TextWidget from "./components/TextWidget";
import Form from "./components/Form";
import styles from "./Contact.module.scss";
import Inside from "../../components/inside/Inside";
import FormButton from "../../components/form/FormButton";
import PrivacyPolicyCheck from "../../components/form/PrivacyPolicyCheck";
import { useState } from "react";

const Contact = () => {
  const [modal, openModal] = useState(false);

  const handleOpenModal = () => {
    openModal(!modal);
  };

  return (
    <div onClick={() => modal && openModal(false)}>
      <ContactTitle />
      <div className={styles.section1}>
        <main className={styles.main}>
          <Inside>
            <TextWidget />
            <Form>
              <PrivacyPolicyCheck
                modal={modal}
                handleOpenModal={handleOpenModal}
              />
            </Form>
            <FormButton innerText={"문의 완료!"} />
          </Inside>
        </main>
      </div>
    </div>
  );
};

export default Contact;
