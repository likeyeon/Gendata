import styles from "./Form.module.scss";
import InputField from "../../../components/form/InputField";
import SelectField from "../../../components/form/SelectField";
import TextareaField from "../../../components/form/TextareaField";

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
              <SelectField
                name={"category"}
                label={"카테고리"}
                options={[
                  "",
                  "데이터 수집",
                  "데이터 생성",
                  "AI 개발",
                  "품질 검증",
                  "AI 교육 및 멘토링",
                  "Annotation Tools",
                  "AI 솔루션",
                  "기타",
                  "비식별화 솔루션",
                ]}
              />
              <InputField name={"clientName"} label={"담당자님 성함"} />
              <InputField name={"companyName"} label={"기업명"} />
              <InputField name={"phoneNumber"} label={"담당자님 연락처"} />
              <TextareaField
                name={"comments"}
                label={"궁금하신 점이 있다면 자유롭게 작성해주세요."}
              />
              <InputField name={"email"} label={"담당자님 이메일"} />
              {children}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
