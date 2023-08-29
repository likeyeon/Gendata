import styles from './scss/AiHeader.module.scss';

const AiHeader = () => (
  <section className={styles.section} >
    <div className={styles.container}>
        <a className={styles.item} href='https://aromas.gendata.cloud/'>
          <img src='https://cdn.imweb.me/thumbnail/20230823/0a8d1ac4e63a4.png'/>
          <div className={styles.text}>
            <p className={styles.title}>
              나에게 어울리는 향수 찾기
              <span class={styles.body}>사진을 올리면 AI가 당신의 분위기에 어울리는 향수를 추천합니다.</span>
            </p>
          </div>
        </a>
        <a className={styles.item} href='https://www.semoai.com/'>
          <img src='https://cdn.imweb.me/thumbnail/20230828/9a269dd3872c8.jpg'/>
          <div className={styles.text}>
            <p className={styles.title}>
              세상 모든 기업을 위한 AI 비즈니스 서비스
              <span class={styles.body}>AI 도입 및 프로젝트 구체화 → AI 전문 기업 매칭 및 프로젝트 관리</span>
            </p>
          </div>
        </a>
    </div>
  </section>
);

export default AiHeader;