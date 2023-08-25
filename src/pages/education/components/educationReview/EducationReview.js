import styles from "./EducationReview.module.scss";
import { Subtitle } from "../../../../components/common/typo/Typo";
import reveiw from "../../../../assets/education/reveiw.png";
const EducationReview = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.titles}>
          <Subtitle subtitle="수강생" className="" />
          <Subtitle subtitle=" REAL " className={styles.titleBlue} />
          <Subtitle subtitle="후기" className="" />
        </div>
        <img
          src={reveiw}
          className={styles.educationReviewImg}
          alt="revie image"
        />
      </div>
    </>
  );
};
export default EducationReview;
