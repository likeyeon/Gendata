import styles from "./scss/aboutSectionThree.module.scss";

const aboutSectionThree = () => (

  <div className={styles.container}>
    <div className={styles.header}></div>
    <div className={styles.table}>
      <img src="https://cdn.imweb.me/thumbnail/20230417/a1cc7bce1aff1.png" />
      <img src="https://cdn.imweb.me/thumbnail/20230417/77e85af3dbf87.png"/>
      <img src="https://cdn.imweb.me/thumbnail/20230417/8d7ca2c3965df.png"/>
      <img className={styles.last}
      src="https://cdn.imweb.me/thumbnail/20230417/748899159d681.png"/>
    </div>
    <div className={styles.table_two}>
      <img src="https://cdn.imweb.me/thumbnail/20230417/a578fdd2133b6.png"/>
      <img src="https://cdn.imweb.me/thumbnail/20230417/c3b65297d591c.png"/>
      <img src="https://cdn.imweb.me/thumbnail/20230417/16f2271773e73.png"/>
      <img className={styles.last}
      src="https://cdn.imweb.me/thumbnail/20230417/ee679bb3027d7.png"/>
      <img className={styles.img}
      src="https://cdn.imweb.me/thumbnail/20230705/c6d13369f5936.jpg"/>
      <img className={styles.img}
      src="https://cdn.imweb.me/thumbnail/20230705/c81ec293a5244.png"/>
      <img className={styles.img}
      src="https://cdn.imweb.me/thumbnail/20230705/80b8d5b28b7ae.png"/>

    </div>
  </div>

);

export default aboutSectionThree;