import styles from "./FormButton.module.scss";

const FormButton = ({ innerText }) => {
  return (
    <div className={styles.form_button_wrapper}>
      <button>{innerText}</button>
    </div>
  );
};

export default FormButton;
