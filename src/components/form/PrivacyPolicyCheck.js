import Modal from "./Modal";
import styles from "./PrivacyPolicyCheck.module.scss";

const PrivacyPolicyCheck = ({ modal, handleOpenModal }) => {
  return (
    <>
      <div className={styles.form_group}>
        <div>
          <input type="checkbox" id="privacyPolicy" />
          <span>
            <strong
              className={styles.privacyPolicy_strong}
              onClick={handleOpenModal}
            >
              개인정보 수집 및 이용
            </strong>
            에 동의합니다.
          </span>
          <label htmlFor="privacyPolicy"></label>
        </div>
      </div>
      {modal && <Modal handleOpenModal={handleOpenModal} />}
      {modal && <div className={styles.background_dark}></div>}
    </>
  );
};

export default PrivacyPolicyCheck;
