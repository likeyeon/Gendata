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
              <SelectField
                name={"dealCategory"}
                label={"거래 유형 선택"}
                options={[
                  "",
                  "데이터를 판매하고 싶습니다.",
                  "데이터를 구매하고 싶습니다.",
                ]}
              />
              <InputField name={"money"} label={"희망금액"} />
              <InputField name={"managerName"} label={"담당자님 성함"} />
              <SelectField
                name={"dataCategory"}
                label={"데이터 유형 선택"}
                options={[
                  "",
                  "교통",
                  "금융",
                  "농식품",
                  "디지털산업혁신",
                  "라이프로그",
                  "산림",
                  "소방안전",
                  "스마트치안",
                  "유통소비",
                  "중소기업",
                  "지역경제",
                  "통신",
                  "해양수산",
                  "헬스케어",
                  "환경",
                ]}
              />
              <InputField name={"phoneNumber"} label={"담당자님 연락처"} />
              <TextareaField
                name={"summary"}
                label={"필요한 데이터 요약(수요의 경우에만 작성)"}
              />
              <InputField name={"email"} label={"담당자님 이메일"} />
              {children}
            </form>
            <FormButton innerText={"신청완료"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
