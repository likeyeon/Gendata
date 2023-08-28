import styles from './scss/AiHeader.module.scss';

const AiHeader = () => (
  <div className={styles.container} >
    <div className={styles.item}>
      <div className={styles.table}>
        <a className={styles.box} href='https://aromas.gendata.cloud/'>
          <img src='https://cdn.imweb.me/thumbnail/20230823/0a8d1ac4e63a4.png'/>
          <div className={styles.text}>
            <p className={styles.title}>
              나에게 어울리는 향수 찾기
              <span class={styles.body}>사진을 올리면 AI가 당신의 분위기에 어울리는 향수를 추천합니다.</span>
            </p>
          </div>
        </a>
      </div>
    </div>
  </div>
);

export default AiHeader;