import styles from "./EducationIntro.module.scss";
import { Contents } from "../../../../components/common/typo/Typo";

const EducationIntro = () => {
  return (
    <div className={styles.container}>
      <Contents
        contents="젠데이터가 자랑스럽게 선보이는 AI에듀 사업부에서는 인공지능 데이터라벨러 인재양성과 인공지능 개발 멘토링 등의 혁신적인 프로그램을 제공하고 있습니다."
        className={styles.contents}
      />
      <Contents
        contents="우리는 교육 분야에서 AI의 힘을 믿고, 더 나은 교육을 위해 지속적인 노력을 기울이고 있습니다."
        className={styles.contents}
      />
      <div className={styles.space}></div>
      <Contents
        contents="AI에듀 사업부는 교육과 혁신의 파트너로서, 교육과 기술을 접목하여 차세대 인재를 양성하고, 혁신적인 프로그램을 제공합니다"
        className={styles.contents}
      />
      <Contents
        contents="우리와 함께하면 더 넓은 교육 가능성과 성장 기회를 만날 수 있습니다."
        className={styles.contents}
      />
    </div>
  );
};
export default EducationIntro;
