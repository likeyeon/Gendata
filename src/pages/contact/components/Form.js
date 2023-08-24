import { useState, useCallback } from "react";
import styles from "./Form.module.scss";
import Label from "../../../components/form/Label";

const Form = ({ children }) => {
  const [clientName, setClientName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [comments, setComments] = useState("");
  const [email, setEmail] = useState("");
  const selectList = [
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
  ];
  const [selected, setSelected] = useState("");

  const handleSelect = useCallback((e) => {
    setSelected(e.target.value);
  }, []);

  const handleInputClientName = useCallback((e) => {
    setClientName(e.target.value);
  }, []);
  const handleInputCompanyName = useCallback((e) => {
    setCompanyName(e.target.value);
  }, []);
  const handleInputPhoneNumber = useCallback((e) => {
    setPhoneNumber(e.target.value);
  }, []);
  const handleTextareaComments = useCallback((e) => {
    setComments(e.target.value);
  }, []);
  const handleInputEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className={styles.form}>
        <div className={styles.section}>
          <div className={styles.wrapper}>
            <form onSubmit={handleSubmit} method="POST">
              <div className={styles.group}>
                <Label name={"category"} text={"카테고리"} />
                <select
                  id="category"
                  className={styles.select}
                  onChange={handleSelect}
                  value={selected}
                >
                  {selectList.map((item) => (
                    <option value={item} key={item}>
                      {item ? item : "(선택)"}
                    </option>
                  ))}
                </select>
              </div>
              <div className={styles.group}>
                <Label name={"clientName"} text={"담당자님 성함"} />
                <input
                  className={styles.input}
                  type="text"
                  name="clientName"
                  id="clientName"
                  onChange={handleInputClientName}
                  value={clientName}
                />
              </div>
              <div className={styles.group}>
                <Label name={"companyName"} text={"기업명"} />
                <input
                  className={styles.input}
                  type="text"
                  name="companyName"
                  id="companyName"
                  onChange={handleInputCompanyName}
                  value={companyName}
                />
              </div>
              <div className={styles.group}>
                <Label name={"phoneNumber"} text={"담당자님 연락처"} />
                <input
                  className={styles.input}
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  onChange={handleInputPhoneNumber}
                  value={phoneNumber}
                />
              </div>
              <div className={styles.group}>
                <Label
                  name={"comments"}
                  text={"궁금하신 점이 있다면 자유롭게 작성해주세요."}
                />
                <textarea
                  className={styles.textarea}
                  type="text"
                  rows="3"
                  name="comments"
                  id="comments"
                  onChange={handleTextareaComments}
                  value={comments}
                />
              </div>
              <div className={styles.group}>
                <Label name={"email"} text={"담당자님 이메일"} />
                <input
                  className={styles.input}
                  type="text"
                  name="email"
                  id="email"
                  onChange={handleInputEmail}
                  value={email}
                />
              </div>
              {children}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
