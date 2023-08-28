import styles from "./Form.module.scss";
import InputField from "../../../../components/form/InputField";
import SelectField from "../../../../components/form/SelectField";
import TextareaField from "../../../../components/form/TextareaField";
import FormButton from "../../../../components/form/FormButton";

const Form = ({ children }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className={styles.form}>
        <div className={styles.section}>
          <div className={styles.wrapper}>
            <form onSubmit={handleSubmit} method="POST">
              <InputField name={"companyName"} label={"기업명"} />
              <InputField name={"governmentName"} label={"정부사업명"} />
              <InputField name={"managerName"} label={"담당자님 성함"} />
              <SelectField
                name={"cooperation"}
                label={"협업 형태 선택"}
                options={[
                  "",
                  "데이터 바우처",
                  "AI 바우처",
                  "R&D 지원사업",
                  "NIA 주관 인공지능 학습용 데이터 구축 사업",
                ]}
              />
              <InputField name={"phoneNumber"} label={"연락처"} />
              <InputField name={"email"} label={"이메일"} />
              <TextareaField
                name={"questions"}
                label={"문의사항"}
                width={"full"}
              />
              {children}
            </form>
            <FormButton innerText={"신청 완료"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
