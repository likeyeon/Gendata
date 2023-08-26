import styles from "./TabContent.module.scss";

import {HoverButton} from "../../../../../../components/common/button-type/ButtonType";

const TabContent = ({contentsData}) => {
  const {
    title, 
    desc, 
    img
  } = contentsData;

  const data = {
    goToUrl: "https://www.gendata.ai/gendata-service-labeling",
    content: "자세히 보기 ",
  }

  return (
    <div className={styles.TabContentWrap}>
      <h3 className={styles.TabContentTitle}>{title}</h3>
      <p className={styles.TabContentDesc}>{desc}</p>
      <HoverButton buttonData={data}/>
      <div className={styles.TabContentImgWrap}>
        <img src={img} alt=""/>
      </div>           
    </div>
  )
};

export default TabContent;