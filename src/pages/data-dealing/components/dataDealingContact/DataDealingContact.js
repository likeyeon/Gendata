import { Subtitle } from "../../../../components/common/typo/Typo";
import Form from "./Form";
import styles from "./DataDealingContact.module.scss";
import Inside from "../../../../components/inside/Inside";
import PrivacyPolicyCheck from "../../../../components/form/PrivacyPolicyCheck";
import { useState } from "react";

const DataDealingContact = () => {
  const [modal, openModal] = useState(false);

  const handleOpenModal = () => {
    openModal(!modal);
  };

  return (
    <div
      onClick={() => modal && openModal(false)}
      className={styles.contact_wrapper}
    >
      <Subtitle subtitle="데이터 거래 신청" className={styles.contact_title} />
      <section className={styles.section1}>
        <main className={styles.main}>
          <Inside>
            <Form>
              <PrivacyPolicyCheck
                modal={modal}
                handleOpenModal={handleOpenModal}
              />
            </Form>
          </Inside>
        </main>
      </section>
    </div>
  );
};

export default DataDealingContact;
