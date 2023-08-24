import styles from "./DataTypeCategory.module.scss";

import IconImg from "../../../assets/data-building/data_type_img_icon.png";
import Icon3D from "../../../assets/data-building/data_type_3d_icon.png";
import IconText from "../../../assets/data-building/data_type_text_icon.png";
import IconVideo from "../../../assets/data-building/data_type_video_icon.png";
import IconAudio from "../../../assets/data-building/data_type_audio_icon.png";

const DataTypeCategory = () => {
  return (
    <div className={styles.CategoryWrap}>
      <ul className={styles.CategoryList}>
        <li className={styles.CategoryItem}>
          <img src={IconImg} alt="데이터타입 이미지 아이콘" />
        </li>
        <li className={styles.CategoryItem}>
          <img src={Icon3D} alt="데이터타입 3d 아이콘" />
        </li>
        <li className={styles.CategoryItem}>
          <img src={IconText} alt="데이터타입 텍스트 아이콘" />
        </li>
        <li className={styles.CategoryItem}>
          <img src={IconVideo} alt="데이터타입 비디오 아이콘" />
        </li>
        <li className={styles.CategoryItem}>
          <img src={IconAudio} alt="데이터타입 오디오 아이콘" />
        </li>
      </ul>
    </div>
  )
}
export default DataTypeCategory;