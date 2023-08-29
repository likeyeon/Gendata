import ContactTitle from "./components/ContactTitle";
import TextWidget from "./components/TextWidget";
import Form from "./components/Form";
import styles from "./Contact.module.scss";
import Inside from "../../components/inside/Inside";
import PrivacyPolicyCheck from "../../components/form/PrivacyPolicyCheck";
import { useState } from "react";
import Section2 from "./components/Section2";
import { Helmet } from "react-helmet";

const Contact = () => {
  const [modal, openModal] = useState(false);

  const handleOpenModal = () => {
    openModal(!modal);
  };

  return (
    <div onClick={() => modal && openModal(false)}>
      <Helmet>
        <title>문의하기</title>
      </Helmet>
      <ContactTitle />
      <section className={styles.section1}>
        <main className={styles.main}>
          <Inside>
            <TextWidget />
            <Form>
              <PrivacyPolicyCheck
                modal={modal}
                handleOpenModal={handleOpenModal}
              />
            </Form>
          </Inside>
        </main>
      </section>
      <section className={styles.section2}>
        <main className={styles.main}>
          <Section2 />
        </main>
      </section>
    </div>
  );
};

export default Contact;
