import styles from "./DataTypeMenu.module.scss";

import IconImg from "../../../assets/data-building/data_type_img_icon.png";
import Icon3D from "../../../assets/data-building/data_type_3d_icon.png";
import IconText from "../../../assets/data-building/data_type_text_icon.png";
import IconVideo from "../../../assets/data-building/data_type_video_icon.png";
import IconAudio from "../../../assets/data-building/data_type_audio_icon.png";

const DataTypeMenu = () => {
  return (
    <div className={styles.CategoryOuterWrap}>
      <div className={styles.CategoryInnerWrap}>
        <h2 className={styles.CategoryTitle}>DATA TYPE</h2>
        <ul className={styles.CategoryList}>
          <li className={styles.CategoryItem}>
            <a href="/gendata-service-labeling"><img src={IconImg} alt="데이터타입 이미지 아이콘" /><span>이미지</span></a>
          </li>
          <li className={styles.CategoryItem}>
            <a href="/data-process-3d"><img src={Icon3D} alt="데이터타입 3d 아이콘" /><span className={styles.Active}>3D 데이터</span></a>
          </li>
          <li className={styles.CategoryItem}>
            <a href="/data-process-text"><img src={IconText} alt="데이터타입 텍스트 아이콘" /><span>텍스트</span></a>
          </li>
          <li className={styles.CategoryItem}>
            <a href="/data-process-video"><img src={IconVideo} alt="데이터타입 비디오 아이콘" /><span>영상 데이터</span></a>
          </li>
          <li className={styles.CategoryItem}>
            <a href="/data-process-audio"><img src={IconAudio} alt="데이터타입 오디오 아이콘" /><span>음성 데이터</span></a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default DataTypeMenu;