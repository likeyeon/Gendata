import styles from "./IssueAndSecurity.module.scss";
import { Subtitle, Contents } from "../../../../components/common/typo/Typo";
import { CommonButton } from "../../../../components/common/button-type/ButtonType";

import ImgArr from "./ImgArr";
import ClickSlider from "./ClickSlider";

const IssueAndSecurity = () => {
  const data = {
    goToUrl: "/AI-service-paga",
    content: "자세히 보기",
  };
  return (
    <>
      <div className={styles.issueAndSecurity}>
        <div className={styles.title}>
          <Subtitle
            subtitle="개인정보, 보안, 비밀 등걱정되지 않으세요?"
            className={styles.maxTitle}
          />
          <Subtitle
            subtitle={
              <>
                개인정보, 보안, 비밀 등<br />
                걱정되지 않으세요?
              </>
            }
            className={styles.minTitle}
          />
          <Contents
            className={styles.contentsText}
            contents={
              <>
                젠데이터는 데이터 구축 시 개인정보 이슈를 차단하고, 고객의
                프로젝트 보안을 위하여
                <br />
                내부 서버, 작업자를 사용하여 외부에 공개되지 않고 프로젝트를
                수행합니다.
              </>
            }
          />
        </div>
        <div className={styles.blank} />
        <div className={styles.maxImg}>
          {ImgArr.map((img) => (
            <div className={styles.maxImgContainer}>
              <img className={styles.maxImgItem} src={img} alt="image" />
            </div>
          ))}
        </div>
        <div className={styles.minImg}>
          <ClickSlider ImgArr={ImgArr} />
        </div>
        <CommonButton buttonData={data} />
      </div>
    </>
  );
};

export default IssueAndSecurity;
