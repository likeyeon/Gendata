import Gnb from "../../components/gnb/Gnb";
import Strength from "../../components/strength/Strength";

import ServiceLabelingMainTitle from "./components/ServiceLabelingMainTitle";
import DataTypeCategory from "./components/DataTypeCategory";
import DataProcessImageTitle from "./components/DataProcessImageTitle";
import DataProcessImageDataSet from "./components/DataProcessImageDataSet";

import styles from "./ServiceLabeling.module.scss";
import MainTab from "./components/common/MainTab";

export default function ServiceLabeling() {
  return (
    <div className={styles.Container}>
      <Gnb />
      <div>
        <ServiceLabelingMainTitle />
        <DataTypeCategory />
        <DataProcessImageTitle />
        <DataProcessImageDataSet />
        <Strength />
        <MainTab />
      </div>
    </div>
  )
}