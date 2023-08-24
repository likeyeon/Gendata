import styles from './ServiceLabelingMainTitle.module.scss';

const ServiceLabelingMainTitle = () => {
  return (
    <div className={styles.TitleWrap}>
      <h1 className={styles.Title}>데이터 가공</h1>
      <p className={styles.TitleDesc}>
        원천데이터를 인공지능 모델이 학습할 수 있는 데이터셋으로 가공(<span className={styles.TextWeight}>라벨링</span>) 합니다.
      </p>
    </div>
  )
}
export default ServiceLabelingMainTitle; 
