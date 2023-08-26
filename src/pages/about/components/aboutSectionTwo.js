import styles from './scss/aboutSectionTwo.module.scss';

const aboutSectionTwo = () => (
  <div className={styles.container}>
    <div className={styles.space}></div>
    <div className={styles.gen}>
      <img src='https://cdn.imweb.me/thumbnail/20230702/b7d4b302e1e7b.png'/>
    </div>
    <div className={styles.bar}></div>
    <div className={styles.korea}>
      <p className={styles.text}>
      KOREA 2023 AI STARTUPS 343 기업
      </p>
      <p className={styles.text}>
      NIA 주관 D.N.A 분야 180대 혁신 기업
      </p>
    </div>
  </div>
);

export default aboutSectionTwo;