import Gnb from "../../components/gnb/Gnb";
import ServiceLabelingMainTitle from "./components/ServiceLabelingMainTitle";
import DataTypeCategory from "./components/DataTypeCategory";
import DataProcessImageTitle from "./components/DataProcessImageTitle";
import DataProcessImageDataSet from "./components/DataProcessImageDataSet";

import styles from './ServiceLabeling.module.scss';

export default function ServiceLabeling() {
  return (
    <div className={styles.Container}>
      <Gnb />
      <div>
        <ServiceLabelingMainTitle />
        <DataTypeCategory />
        <DataProcessImageTitle />
        <DataProcessImageDataSet />
      </div>
    </div>
  )
}