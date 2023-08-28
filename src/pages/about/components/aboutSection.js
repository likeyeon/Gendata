import styles from '../components/scss/aboutSection.module.scss';

const aboutSection = () => (

  <div className={styles.container}>
    <div className={ styles.items} >
      <div className={styles.table}>
        <p className={styles.text}>
          <strong>
            <span className={styles.ai}>AI accessible to everyone</span>
          </strong>
        </p>
        <p className={styles.space}></p>
        <span className={styles.Ai}>
          누구에게나 열려있는 인공지능
        </span>
      </div>
      <div className={styles.tabletwo}>
        <p className={styles.texttwo}>
          <strong>
              <span className={styles.our}>
              OUR VISION
              </span>
          </strong>
        </p>
        <p className={styles.space}></p>
        <span className={styles.Aitwo}>
        인공지능을 통해 기업의 가치를 발견하고 기회를 탐색할 수 있는 공간을 만들자
        </span>
      </div>
  </div>
  <div className={styles.bar}></div>
  <div className={styles.img_box}>
    <img className={styles.img}
    src='https://cdn.imweb.me/thumbnail/20230705/db1bc36f5ece3.png'/>
    <img className={styles.img_two}
    src='https://cdn.imweb.me/thumbnail/20230705/e4b9ec80eb414.png' />
  </div>
  <div className={styles.last}></div>
</div>

);

export default aboutSection;