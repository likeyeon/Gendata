import styles from "./scss/Header.module.scss";

const Header = () => (
  <div className={styles.container}>
    <div className={styles.item}>
      <a className={styles.box} href="https://blog.naver.com/ai-gendata/223189350612">
        <img src="https://cdn.imweb.me/thumbnail/20230823/296bfb3b759ab.jpg" />
        <div className={styles.text_wrap}>
          <p className={styles.text}>
          반려견 데이터 수집 프로젝트(8/10~8/25)
          <span className={styles.body}>프로젝트 개요 맨 밑에 참여링크를 통해서 신청 가능</span>
          </p>
        </div>
      </a>
      <a className={styles.box} href="https://blog.naver.com/ai-gendata/223193243761">
        <img src="https://cdn.imweb.me/thumbnail/20230823/162c09d7286de.jpg"/>
        <div className={styles.text_wrap}>
        <p className={styles.text}>
          아동 문장 읽기 데이터 수집 프로젝트(8/23 ~ 10/1)
          <span className={styles.body}>프로젝트 개요 맨 밑에 참여링크를 통해서 신청 가능</span>
          </p>
        </div>
      </a>
      <a className={styles.box} href="https://docs.google.com/forms/d/e/1FAIpQLSc0uiViLIF9SHuxV6-7JG2i2-2gtlqWqqjRM8Vyw16g94nmkA/viewform?fbzx=1812570764583944529">
        <img src="https://cdn.imweb.me/thumbnail/20230825/adbbf9571fbb5.jpg" />
        <div className={styles.text_wrap}>
        <p className={styles.text}>
          탈춤 촬영 영상 데이터 수집 프로젝트(8/24 ~ 인원마감까지)
          <span className={styles.body}>클릭하면 참여링크로 이동합니다.</span>
          </p>
        </div>
      </a>
    </div>
  </div>
);

export default Header;